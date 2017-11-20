import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';
import AppTitle from './AppTitle';
import SearchBar from './SearchBar';
import LinkDisplay from './LinkDisplay.jsx';
import closeIconUrl from '../../_assets/icons/close.svg';

const appTitle = 'GitHub Issue Viewer';
const searchBarPlaceholder = 'Paste a link to a Github repo!';

const ClearLinkImg = styled.img`
  position: absolute;
  right: 2rem;
  bottom: -6rem;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

const MsgP = styled.p`
  font-size: 2rem;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  background: ${colors.pink};
  display: flex;
  align-items: center;
  width: ${props => (props.isFullScreen ? '100%' : 'calc(100% - 6rem)')};
  height: ${props => (props.isFullScreen ? '100%' : `${props.headerHeight}rem`)};
  flex-direction: ${props => (props.isFullScreen ? 'column' : 'row')};
  justify-content: ${props => (props.isFullScreen ? 'center' : 'space-between')};
  padding: ${props => (props.isFullScreen ? '0' : '0 3rem')};
  z-index: 1;
`;

const Header = ({
  currentLink,
  shouldDisplayInvalidLinkMsg,
  currentPageNumber,
  loading,
  clearLink,
  topHeaderHeight,
  onLinkPaste,
}) => {
  const isFullScreen = !currentLink || currentPageNumber === 0;

  function renderHeaderContent() {
    if (isFullScreen) {
      return [
        <AppTitle title={appTitle} fontSize={3} key="app-title" />,
        <SearchBar
          value={currentLink}
          onChange={onLinkPaste}
          placeholder={searchBarPlaceholder}
          key="search-bar"
        />,
        shouldDisplayInvalidLinkMsg
          ? <MsgP key="msg-p-invalid">Please paste a valid link</MsgP>
          : null,
        loading ? <MsgP key="msg-p-loading">Loading...</MsgP> : null,
      ];
    }

    return [
      <AppTitle title={appTitle} fontSize={2.5} key="app-title" />,
      <LinkDisplay link={currentLink} key="link-display" />,
      <ClearLinkImg
        src={closeIconUrl}
        onClick={() => clearLink()}
        key="clear-link"
      />,
    ];
  }

  return (
    <Container headerHeight={topHeaderHeight} isFullScreen={isFullScreen}>
      {renderHeaderContent()}
    </Container>
  );
};

export default Header;
