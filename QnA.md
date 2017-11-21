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

- Although the mockups technically have two pages, I made a single-page application because it is a smoother user experience. Furthermore, the header and the landing page have a lot of common attributes such as the background color and the app title; hence, I believe it is worth making the header support full-screen display despite the added complexities. This decision also has the added benefits of saving time and keeping the code base small which are relevant to this kind of take-home assignments.

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

In total: 5 hours and 40 minutes

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- I would tell myself to get more familiar with [styled-components](https://github.com/styled-components/styled-components) before starting on the project because at various points of development, I had to refer back to the documentation to look for standard ways

- infinite list

- styling box

- one page

- svg component

> Did you learn anything new?

- text

- styled components

> Do you feel that this assignment allowed you to showcase your abilities effectively?

-

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

-
