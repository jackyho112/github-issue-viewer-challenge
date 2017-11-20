import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Labels from '../components/Labels';
import filters from '../constants/filters';

function getIconUrl(issue) {
  const foundFilterLabel = Object.keys(filters).find(
    label => filters[label].iconUrl && filters[label].identify(issue),
  );

  if (foundFilterLabel) {
    return filters[foundFilterLabel].iconUrl;
  }

  return null;
}

const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const IssueDiv = styled.div`
  height: 35rem;
  width: 50rem;
  position: relative;
  margin-bottom: 5rem;
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
`;

const TitleDiv = styled.div`
  height: 10%;
  padding: 2.5rem;
  font-size: 1.75rem;
  background: ${colors.blue};
  color: ${colors.white};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const BodyDiv = styled.div`
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  flex-basis: auto;
  height: 80%;
`;

const MsgHeading = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const IconImg = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;

function renderIssue(issue) {
  const iconUrl = getIconUrl(issue);

  return (
    <IssueDiv key={issue.id}>
      <TitleDiv>{issue.title}</TitleDiv>
      <BodyDiv>{issue.body || 'No description'}</BodyDiv>
      <Labels labels={issue.labels} />
      {iconUrl ? <IconImg src={iconUrl} /> : null}
    </IssueDiv>
  );
}

const Issues = ({ issues }) => {
  return (
    <ContainerDiv>
      {issues.length > 0
        ? issues.map(renderIssue)
        : <MsgHeading>No issue to display currently</MsgHeading>}
    </ContainerDiv>
  );
};

export default Issues;
