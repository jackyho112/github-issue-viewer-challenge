import closedIssueIconUrl from '../../_assets/icons/issue-closed.svg';
import pullRequestIconUrl from '../../_assets/icons/pull-request.svg';

export default {
  'All Issues': {
    identify: () => true,
    order: 1,
  },
  'Open Issues': {
    identify: issue => issue.state === 'open',
    order: 2,
  },
  'Closed Issues': {
    identify: issue => issue.state === 'closed',
    order: 3,
    iconUrl: closedIssueIconUrl,
  },
  'Pull Request': {
    identify: issue => typeof issue.pull_request !== 'undefined',
    order: 4,
    iconUrl: pullRequestIconUrl,
  },
};
