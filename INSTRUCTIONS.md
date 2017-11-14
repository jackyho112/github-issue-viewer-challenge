# Issues Explorer (front end)

> Please feel free to ask questions!

First and foremost, this project is meant for you to showcase what you can do with JavaScript (specifically with React), and CSS.

We want to gauge your grasp of CSS (preprocessors are encouraged!), and how you organize JavaScript code. Specifically, we'll be looking for best practices, your development process, design decisions, and overall project structure.

## M-V-P! M-V-P!

Your mission, should you choose to accept it, is to create a prototype of a cool issue explorer for a fictional client. As an initial goal, you'll be creating the issue explorer for Github issues, and those issues will be filterable by their state!

We are giving _you_ complete control over the architecture of how to implement it. Due to our internal tech stack, though, we insist that you use React!

**See _mocks folder** to get a clear picture of the task 😎

### Constraints

- it must look and feel good across **all** screen sizes
- that's it!

### Tasks (required)

- create a `README.md` file with simple instructions to run the app
- create a search page with a search bar. Users should be able to paste a GitHub repo url here.
- create a results page that displays the **all** (open, closed, pull requests) issues from the search query
- indicate which issues are closed or pull requests using the icons
- implement filtering by open, closed, or pull requests on the results page

### Bonus (not required)

If you have some extra time, pick any of the following!

- implement smooth transitions to and from the search and results pages
- when a filter is applied, add show / hide transitions to the results
- add indicators for search progress
- what if there are no results, or an error fetching the results?
- what if a repo has tons of issues? Consider implementing pagination with infinite scrolling.
- it would be useful if we could share stateful urls to other users, so that they can view results without searching!

Use the [Github issues API](https://developer.github.com/v3/issues/#list-issues-for-a-repository) as your source of data. The first page with all issues should have `status` params set to `all`. _Be aware of_ [the api's pagination params](https://developer.github.com/v3/#pagination).

## Hints

- it is an MVP (minimum viable product) - done is better than perfect
- this project is designed to be completed in about 4 hours, but if you need some extra time to plan, research, and fill in the "looking back" section of your Q&A, take it!
- test your app with repos that are [full of issues](https://github.com/facebook/react) as well as ones that have [no issues](https://github.com/axiomzen/cc_IssuesExplorerFE_Empty)

**Before you start, please read and fill out the respective section of [QnA.md](./QnA.md)**.

That's all for now. Don't hesitate to ask questions, for guidance or for more clarification on the project. We are excited to see what you come up with!

Good luck!
