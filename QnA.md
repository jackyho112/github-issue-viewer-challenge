# QnA

### Planning:

> What do you think are the greatest risk areas in completing the project?

- Choosing the optimal tools and overall coding styles concerning questions such as how to style React components, whether to use an existing React component libraries like [material-ui](https://github.com/callemall/material-ui), which popular organizational style to pick for structuring the React application and whether to utilize a state management library. There is a tremendous amount of risks involved in making this kind of decisions for this project because it is time-sensitive to the hourly level and hence any ambiguity or irregularity in any tool can potentially derail the whole project with the addition damage of making the development process a lot more stressful.

- In my experience, even simple-looking UIs can have hidden CSS challenges because CSS has a lot of arbitrary rules and hence is an extremely unpredictable language. The time-sensitive nature of this project further compounds the level of risk that goes into making every single CSS decision, especially those that concern layouts and affect child elements. Moreover, some styles in the mockups may be difficult to implement and therefore require difficult compromises which could be detrimental to the aesthetic quality of the end product.

> What changes/additions would you make to the design?

- Only allowing pasting at the search bar might be too limiting although it does cover most of the use cases. Hence, I would recommend accommodating typing at the input field by explicitly including a button to submit the search. Furthermore, once the user arrives at the issue list page, I would allow the link label to transform into an input field and a submit button by clicking on it so that the user can change the link more easily. However, to integrate this change, I think we should change the design of the label to look more clickable.

- I believe it is reasonable to allow an user to click on each GitHub issue and go to the issue page because it is likely that this is the ultimate goal of an user going to a GitHub issue viewer. To elaborate further, I would imagine that most users go to the site in order to get an overview of an issue and want to navigate to the issue page if the overview looks interesting. This would require some simple design changes on how each issue item looks to resemble a link more.

**Looking back**
- I feel that the filter bar should be designed to be a part of the header or look like it is fixed to the top so that it can have a fixed position below or inside the header and looks fitting. With this change, the user can change the filter easily at any time instead of having to scroll to the top. If we do not change the filter, there should be an up arrow button, which can be clicked to scroll immediately to the very top, fixed to the bottom of the page when the top scroll position is not zero.

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

- Adding label filtering should be valuable to our users because I believe a lot of them go on the website in order to look for contribution opportunities and a lot of labels are related to the contribution status of an issues. For example, 'help wanted' is a common label to indicate that the maintainers welcome contribution on that issue. By implementing filtering by labels, it allows users to further customize the list to their interests.

- I think a lot of users would welcome the addition of the ability to save their favourite GitHub projects so that their issues can be more conveniently retrieved from a list of saved repositories instead of having to paste a link every time. Furthermore, if more filtering options are added in the future, this saving feature can also incorporate the custom filters so that an user can more quickly get to the issues they are interested in.

- I would love to implement a feature that displays the overall statistics, such as the total number of open issues, of a repository because that would allow an user to get an even broader snapshot for the project right away. Right now the only way to get an overall climate of a project is to skim through through the details of the latest issues which is quite a cumbersome way to quickly gauge one's level of interest in the repository. On the other hand, an overview box should satisfy that need competently.

---

### Looking back:

> Describe the major design/build decisions and why you made them.

- Although the mockups technically have two pages, I made a single-page application because it is a smoother user experience. Furthermore, the header and the landing page have a lot of common attributes such as the background color and the application title; hence, I believe it is worth making the header support full-screen display despite the added complexities. This decision also has the added benefits of saving time and keeping the code base small which are most relevant to this kind of take-home assignments.

- I decided to implement an infinite list in the MVP version because I had experience building infinite list containers and the application otherwise has the risk of loading an extremely long list all at once which can be unsafe for some users. Furthermore, because of my past experience, an infinite list infrastructure is natural and intuitive to my development or thought process despite the additional implementation time.

- I made a few tool decisions that may be considered controversial. For instance, I decided to style my React components using [styled-components](https://github.com/styled-components/styled-components) instead of going with the traditional stylesheet approach. Another example is my choice to go with a Webpack setup as opposed to using [create-react-app](https://github.com/facebookincubator/create-react-app). Furthermore, I decided to skip writing unit or snapshot tests as well as fixing lint errors. All tool choices are made for the consideration of speed and my comfortability with using the libraries. And the lack of tests, type checking and linting are for saving time. All these decisions are made based on the time-sensitive and stressful nature of this assignment and do not reflect how I work at all times.

- I decided to slightly change the design of displaying the information of each issue because I found it difficult to optimally show the full text of its topic and description while maintaining the same height for all issue boxes. I experimented with different CSS properties and could not achieve what the mockup aims for. Furthermore, I decided to get rid of the white dot on the left corner of each label box because that adds more complexities but appears to bring little discernible user value. Overall, I had to deviate from the mockup on this part for a more rigid look mainly because I was running into difficulties and had little time to spare.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- Understanding the specs: 20 minutes
- Planning: 20 minutes
- Picking tools and setting up the project: 30 minutes
- Coding the landing page and its transformation to the listing page: 50 minutes
- Coding the issue listing page displaying all results with minimal styling and learning the GitHub api: 30 minutes
- Implementing the infinite list component: 40 minutes
- Implementing the filter bar: 30 minutes
- Styling each issue box to look like how it is in the mockup and make the site responsive: 60 minutes
- Fixing bugs and debugging various issues: 30 minutes
- Refactoring and cleaning up: 30 minutes

In total: 5 hours and 40 minutes(these are rough estimates)

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- I would tell myself to get more familiar with [styled-components](https://github.com/styled-components/styled-components) before starting on the project because at a few points of the development, my utilization of the library gave me errors and I had to quickly refer back to the documentation for clarification. Due to the time-sensitive nature of the assignment, these obstacles made the process a bit more stressful. In normal circumstances, I would simply do some more research and handle the situations calmly based on the new information.

- I wish I could identify the hidden limitation of the mockup for the issue box. It was not easy to find an ideal way to display the information of each issue given its high probability to overflow the container. It was quite a predicament when I discovered that `text-overflow: ellipsis` does not work as I expected it to be and I had to do a lot more research on the various CSS properties that could potentially be used to reach the proper display. As I was spending too much time trying to achieve the mockup with little success, I decided to compromise and end up with a more rigid design.

- I should have used [babel-plugin-inline-react-svg](https://github.com/kesne/babel-plugin-inline-react-svg) to handle using the icons instead of loading them through [file-loader](https://github.com/webpack-contrib/file-loader) because by using the latter, I had to modify the original icon files and that was definitely not a flexible way to code the icons. The babel plugin would allow me to idiomatically style the icons as React components and the SVG files to maintain its original integrity.

- Despite my previous experience, the extra features I decided to include in the MVP version were not exactly implemented without any hurdle and I wish I could have thought more deeply about their implementation. Namely, when my original plan for implementing the infinite list produced code that was as easy to reason about as I would like it to be. Furthermore, my decision to reuse the header component as the initial page added more logic to the component than I expected at first. These issues were eventually resolved through refactoring, but more careful planning could have ameliorated the difficulties.

> Did you learn anything new?

- I learned more about the usage of the css property, `text-overflow` and its limitation. For instance, I now know that it has to be used together with `overflow` and `white-space`. Furthermore, in the future, I can more easily identify situations where text overflowing could be a problem from mockups and come up with plans beforehand.

- I have gotten more familiar with `styled-components`. More specifically, I have gained more experience integrating the library with a React component's props and organizing a React library with this method of styling. Furthermore, I have acquired more insights in terms of the props and cons of using `styled-components`. For instance, it is convenient and explicit for a component's styles to be in the same file as its content, but it may be hard to come up with ways to reuse styles.

**Please be aware that the comments below are purely my opinions and may not be entirely true**
> Do you feel that this assignment allowed you to showcase your abilities effectively?

- Unfortunately, regardless of the evaluation, this assignment does not accurately reflect my coding abilities in a team or company setting which is the work context in Axiom Zen or pretty much every single developer shop I have ever worked in. I do know that this kind of take-home assignments is ubiquitous in tech companies, but I believe its effectiveness to showcase how a candidate will work in the company is lacking. Please let me elaborate further.

- Throughout my coding career in terms of both work and hobby, I have never worked on a project that has such criterions in such an unrealistic context. Namely, I was given the impression that this project would be heavily evaluated based the amount of time I spent completing it because I was given a timeframe of four hours and told that 'done is better than perfect'. On the other hand, Axiom Zen aims to discern my usage of best practices, development process, design decisions and structuring skills. These two are extremely conflicting requirements. For instance, I make completely different technical decisions based on a project's goal and metrics of success. In order to strongly prioritize speed, I had to make calls that I rarely make in a company setting and many of them are not acceptable development practices in a team environment.

- There are many examples of poor development practices in the context of a company that I had to make in this project to fulfill the requirements. For instance, I would never code so much without writing a single test, skip type checking in my React components, skip fixing lint errors and push so many features without asking for feedback. These are all essential practices for a large code base or an application that is expected to grow in the foreseeable future. However, they are not discernibly as appropriate or essential for a take-home assignment that is time-sensitive at the hourly level, requires a wide range of features and has huge evaluative consequences.

- In terms of tools, I had to make most choices for the sake of speed and my initial comfortability, whilst in a company setting, I would pick tools that make the most sense for the feature requirements, enhance the maintainability of the code base, have low complexities and are performant. Furthermore, normally, I will do much more research on my personal time to learn about various relevant tools and popular approaches when I am given certain tasks that my experience does not completely relate to, while for this assignment, learning is also counted toward the time. For instance, I picked `styled-components` to style my components mainly for convenience, while under normal circumstances, I would be much more considerate and think about how it will affect the codebase in the long run. Another example is my decision not to use a state management library with the purpose of saving time and risk minimization. For a growing React codebase, I would almost always implement a state management tool such as [Redux](https://github.com/reactjs/redux) and [MobX](https://github.com/mobxjs/mobx), both of which I have experience in. Integration with any of these tools would drastically change and most likely improve a React code base's structure and expressiveness.

- Last but not least, this project was done in a rather solitary context which does not remotely match how software development should be conducted in the real world. In a normal company setting, I will divide the tasks of an update into minimally viable chunks and then work progressively towards completing the updates by pushing out one chunk on each step and getting feedback on it. In terms of my coding style and technical decisions, I would also take into account the existing code base's or the company's other code bases' conventions, my coworkers' experiences and preferences, the organization's culture, the business goals and the purpose of each update from the user's point of view. These are all extremely important considerations when I am coding in a company setting and will significantly influence how I code to make the most optimal decisions for the company. Unfortunately, these factors barely exist or are mostly irrelevant for this assignment as far as its specifications and circumstances go.

- In conclusion, I code differently based on the context to achieve maximum effectiveness regarding the purpose and try to incorporate collaboration appropriately into my development process. This assignment portrays a context completely different from the development context that is in a company setting and therefore does not accurately reflect how I would work as an Axiom Zen engineer, regardless of the result of the evaluation.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

This exercise does not demonstrate most of my strengths. Here are the examples:

- Evaluating a feature perceptively and dividing it into multiple viable updates to be pushed to production for frequent evaluation and feedback

- Collaborating effectively with designers and businesspeople on arriving at a design that takes into account the perspectives of all stakeholders while maintaining the health of the code base

- Understanding the business, aesthetic and user experience aspects of each feature based on scientific knowledge and hence being able to provide valuable inputs at driving a feature's direction towards providing users the most values

- Adapting optimally to different projects' conventions and contributing idiomatically to different code bases

- Quickly absorbing feedback and discerning preferences from teammates with the goal of crafting a coding style that is in harmony with the team

- Wisely taking advantage of teammates' strengths by collaborating with them on different tasks and learning from their experience

- Accessing the health of a code base, sensibly refactoring existing modules and astutely advancing the quality of existing code

- Keeping up-to-date with the latest technologies, best practices and discussions among the most talented engineers by being active in the open source community and constantly learning new knowledge

Some of these skills can be evaluated in my recent PRs to open source projects.
1. [A PR for material-ui](https://github.com/mui-org/material-ui/pull/9004)
2. [A PR for prettier](https://github.com/prettier/prettier/pull/2763)
3. [A PR for eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/pull/1458)

### Extra comments:

I am so sorry that I had to be blunt and critical in my postmortem; if I still have your attention, let me give you a bit more context about my comments. Three months ago, I did a bunch of similar assignments and they landed me a few offers. I eventually picked the one given by [thisopenspace](https://thisopenspace.com) and have been working there since. What I have noticed is the mentality and considerations I had coding the assignments are not remotely similar to the ones I have when working for thisopenspace mostly because the environments and contexts are totally different for the two activities. In other words, from the code assignment, thisopenspace would see me as a coder absolutely different than how I would be coding for them. Although my current company happened to find both identities desirable, this does not excuse an ineffectual process to be relied upon this heavily for evaluation. I hope you can understand my point of view given my personal experience.
