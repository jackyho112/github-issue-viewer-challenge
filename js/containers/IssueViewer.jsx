import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { chunk, flatten } from 'lodash';
import InfiniteScroller from 'react-infinite-scroller';

import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import Issues from '../components/Issues';
import filters from '../constants/filters';

const batchSize = 30;
const topHeaderHeight = 8;
const defaultFilter = 'All Issues';

const LoaderDiv = styled.div`
  text-align: center;
  font-size: 3rem;
  padding: 2rem;
`;

const MainContentDiv = styled.div`
  top: ${`${topHeaderHeight}rem`};
  position: absolute;
  height: calc(100% - 8rem);
  width: 100%;
`;

class IssueViewer extends Component {
  state = {
    currentLink: '',
    currentPageNumber: 0,
    currentIssues: [],
    shouldDisplayInvalidLinkMsg: false,
    loading: false,
    canLoadMore: false,
    currentFilter: defaultFilter,
  };

  currentRepo = null;
  repoLinkIssuesStore = {};

  onLinkPaste = event => {
    this.setState({ currentLink: event.target.value }, this.fetchIssues);
  };

  clearLink = (shouldDisplayInvalidLinkMsg = false) => {
    this.currentRepo = null;

    this.setState({
      shouldDisplayInvalidLinkMsg,
      currentLink: '',
      currentIssues: [],
      currentPageNumber: 0,
      canLoadMore: false,
      currentFilter: defaultFilter,
    });
  };

  selectFilter = currentFilter =>
    this.setState(
      {
        currentFilter,
        currentIssues: [],
        currentPageNumber: 0,
        canLoadMore: true,
      },
      this.fetchIssues,
    );

  filterIssues = issues => {
    const filterFunc = filters[this.state.currentFilter].identify;
    return issues.filter(filterFunc);
  };

  fetchIssues = () => {
    const { repoLinkIssuesStore, state: { currentLink, loading } } = this;

    if (loading) {
      return;
    }

    let url;
    try {
      url = new URL(currentLink);
    } catch (e) {
      return this.clearLink(true);
    }

    const repoPath = url.pathname;

    if (!repoLinkIssuesStore[repoPath]) {
      repoLinkIssuesStore[repoPath] = {
        pageLoaded: 0,
        areAllLoaded: false,
        isValid: true,
        issues: [],
        path: repoPath,
      };
    } else if (!repoLinkIssuesStore[repoPath].isValid) {
      return this.clearLink(true);
    }

    this.currentRepo = repoLinkIssuesStore[repoPath];
    this.loadNextPage();
  };

  loadNextPage = () => {
    const repo = this.currentRepo;
    const { currentPageNumber } = this.state;
    const nextPage = currentPageNumber + 1;

    if (repo.pageLoaded >= nextPage) {
      return this.updateIssuesNextPage();
    }

    this.setState({ loading: true });

    return axios
      .get(
        `https://api.github.com/repos${repo.path}/issues?page=${nextPage}&per_page=${batchSize}&state=all`,
      )
      .then(response => {
        repo.isValid = true;

        if (response.data.length === 0) {
          repo.areAllLoaded = true;
        } else {
          repo.pageLoaded += 1;
          repo.issues = repo.issues.concat(response.data);
        }

        this.updateIssuesNextPage();
      })
      .catch(() => this.clearLink(true))
      .then(() => this.setState({ loading: false }));
  };

  updateIssuesNextPage = () => {
    const repo = this.currentRepo;
    const rowChunks = chunk(repo.issues, batchSize);
    const nextPage = this.state.currentPageNumber + 1;
    const newIssues = flatten(rowChunks.slice(0, nextPage));
    const newIssuesFiltered = this.filterIssues(newIssues);

    return this.setState({
      canLoadMore: !(repo.issues.length === newIssues.length &&
        repo.areAllLoaded),
      currentIssues: newIssuesFiltered,
      currentPageNumber: nextPage,
    });
  };

  renderHeader() {
    const {
      currentLink,
      shouldDisplayInvalidLinkMsg,
      currentPageNumber,
      loading,
    } = this.state;

    return (
      <Header
        key="header"
        currentLink={currentLink}
        shouldDisplayInvalidLinkMsg={shouldDisplayInvalidLinkMsg}
        currentPageNumber={currentPageNumber}
        loading={loading}
        clearLink={this.clearLink}
        onLinkPaste={this.onLinkPaste}
        topHeaderHeight={topHeaderHeight}
      />
    );
  }

  render() {
    const {
      currentFilter,
      currentIssues,
      canLoadMore,
      currentLink,
    } = this.state;

    return [
      this.renderHeader(),
      <MainContentDiv key="main-content">
        <FilterBar
          key="filter-bar"
          currentFilter={currentFilter}
          selectFilter={this.selectFilter}
        />
        <InfiniteScroller
          loadMore={this.fetchIssues}
          loader={<LoaderDiv>Loading...</LoaderDiv>}
          hasMore={canLoadMore}
        >
          <Issues issues={currentIssues} />
        </InfiniteScroller>
      </MainContentDiv>,
    ];
  }
}

export default IssueViewer;
