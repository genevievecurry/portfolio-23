---
title: "Ruby on Rails Community Survey Results"
showSummary: true
showTaxonomies: true
showDate: false
featureAlt: ""
coverCaption: ""
---

This is a project I built to communicate the results of a survey that a company I worked for conducted in 2020, as part of a series of surveys conducted over the past decade.

The survey was sent to the Ruby on Rails community, and asked them questions about how they host, deploy, build, and maintain their Rails applications.

{{< button href="https://rails-hosting.com/2020/" target="_blank" >}}
Visit Ruby on Rails Survey Results
{{< /button >}}

## Goals

The essential goals of the project were to use survey data to tell a story that is:

- True to the data
- Interesting
- Easily understood
- Valuable to community members
- Visually attractive

Additionally, I had a few of my own goals for the project, chiefly to make it easier to update and maintain than previous iterations of the survey results, which led to the following questions:

- How can I make sure the data is accurate and consistent?
- How might I give content editors full control over the content?
- How can I ensure updates and deployments are as painless as possible?
- How can I make it easier to reuse for future surveys?
- How can I build it as quickly as possible, since I have a lot of other work to do?

## Process

Although this project was not a client project, nor did it include complex integrations, user authentication, or even a database, I want to use it to illustrate my process for building a project from start to finish, as I took on the role of **project manager, designer, and developer**.

### Planning technical architecture

An issue I could see with previous years surveys is that each one was built as a separate project, with its own codebase and deployment process. This meant that each year, the project had to be rebuilt from scratch, with all of the design, planning, and development work that entails. I understood why it was done this way, since in previous years the project was managed by a non-coding designer and implemented by an intern with guidance from a developer.

I wanted to find the right tool for the job, and I knew that I wanted to use a static site generator, since the content would be static, and I wanted to avoid the overhead of a database. I also wanted to use a headless CMS, since I wanted to give content editors full control over the content, and I wanted to avoid the overhead of building a custom CMS. In this case, using Jamstack was a great fit.

The JAM of Jamstack refers to:

- **J**avaScript
- **A**PIs
- **M**arkup

It's a methodology that emphasizes pre-built markup, decoupling the frontend from the backend by using APIs, and (optionally) using JavaScript to enhance the user experience. Since the website is generated at build time, it can be deployed as static files, which are fast and cheap to host. It's also an incredibly flexible way to approach a project like this. You may read more about it on Netlify's website, [What is Jamstack?](https://jamstack.org/what-is-jamstack/).

#### Choosing a static site generator

I chose [Gatsby](https://www.gatsbyjs.com/). Gatsby is based on React, which is a framework that comes with its share of upsides and downsides. The upsides are that it is very popular, developers at my company were familiar with it, and for a JavaScript framework, it had hit a point of maturity that it was not suffering from the high churn rate that has led to significant frustration in the JavaScript community. The main downside of React is its inherent complexity, which I believe is often downplayed.

One might wonder why I did not choose to use a Ruby-based static site generator, such as Jekyll or Middleman, since [Planet Argon](https://www.planetargon.com/) is a Rails shop. I am sure that they would have been fine choices, but I wanted to use Nivo (more about that later), and Nivo is a React library, so it made sense to use a React-based static site generator for consistency.

#### Choosing a headless CMS

I went with Forestry.io, which is now [Tina](https://tina.io/). It's a headless CMS that integrates with Git. A headless CMS like this offers some excellent benefits to both devs and content editors:

- Developers can set up the CMS to work with the data structures they want to use, and content editors can use the CMS to create and edit content without having to worry about the underlying data structures.
- When content editors make changes, it pushes content to Git, which means that the content is version controlled, and it can be edited locally, which is lovely for developers.
- Content updates can also trigger a build and deploy, which means that content editors can update the site without having to ask a developer to do it for them.
- The end product is VERY FAST for site visitors, since there are no API calls or database queries to slow things down.

{{< figure
src="js-and-rails-forestry.gif"
alt="Screenshot of an content editing interface on Forestry.io"
caption="Forestry was a headless CMS that integrated with Git."
style="browser"
    >}}

#### Choosing a deployment platform

I wanted to use Netlify, since it is a great platform for deploying static sites, and Netlify is a big proponent of Jamstack. The tool has has a great UI, and it integrates with Git, which means that it can automatically build and deploy the site when changes are pushed to the repository via the headless CMS. Since the project was fairly limited in scope, we could take advantage of the free tier.

### Designing the website

I designed the website using Figma, and chose colors based on the Ruby and Ruby on Rails logos to make a visual connection. I also wanted to make sure that there was a visual connection to the other surveys and to Planet Argon, while keeping things simple, which is my preferred design style (and also to make sure I could build it quickly later). I worked with our marketing director to review the design and plan the content.

{{< figure
src="social-animation.gif"
alt="Animated gif of clicking a social media share button"
caption="I also designed in some opportunities for frontend fun :)"
    >}}

#### Data visualization

As I mentioned before, I wanted to use [Nivo](https://nivo.rocks/). It is used on the [State of JavaScript](https://stateofjs.com) website, which is a project I admire. Although our Ruby on Rails survey needed to be significantly smaller in scope than the State of Javascript, it was clear Nivo would be a great tool for visualizing the data.

{{< figure
src="nivo-chart.png"
alt="Screenshot of 2020 Ruby on Rails Community Survey Results"
caption="A Nivo pie chart on the website"
style="browser"
    >}}

#### Content

Content was planned asynchronously with the design and data cleanup tasks. We also wanted to include insights from community members to add another facet to the data, which added a bit of complexity to the build process.

{{< figure
src="community-insight.png"
alt="Screenshot of 2020 Ruby on Rails Community Survey Results"
caption="A community insight section of the website."
    >}}

### Data cleanup

The data was messy. The survey had changed over the years, with questions being added, removed, and reworded. The format also changed, as different survey vendors were used over time. This meant that the data was not always consistent, and required a lot of cleanup. Since year-over-year trends were important to the survey results, I had to make sure that the data was consistent across years, which included a lot of spreadsheet wrangling. In all honesty, I actually enjoy parsing and tidying data, so this wasn't as awful for me as it might be for others.

The data also had to be converted to a format that could be used by Nivo, which meant writing a script to convert the data from CSV to XML, and then using GraphQL to query the data in Gatsby and pass it to Nivo. Although this was a pain to do the first time, the tool Planet Argon used for newer surveys supported XML exports, which theoretically meant that future surveys would be easier to update.

## Outcomes

Ultimately, I believe the project met most of the goals I set out to achieve. The data was accurate and consistent, and the content was interesting and valuable to community members. The design was simple and easy to understand, and the data was presented in a way that was visually attractive. The project was set up to be easy to reuse for future surveys.

{{< figure
src="scroll.gif"
alt="Screenshot of 2020 Ruby on Rails Community Survey Results"
style="browser" >}}

Unfortunately we were not able to use Netlify as planned for the final production deployment. Ultimately, there was a last-minute time crunch to get the site shipped and there were some issues with the domain that needed to be used that were outside of my control. The workaround was to drop the project's build folder into an S3 bucket and host it from there. That really poured cold water on the ease of content edits, since content editors would have to ask a developer to manually build and deploy the site for them, but it was a compromise that had to be made at the time, and ultimately speaks to the flexibility that Jamstack projects offer.

Once the site was up, I was moved on to other projects, and eventually moved on to another company, but I do hope that they can migrate to a better deployment solution in the future (because it's so convenient!).

I highly recommend [Nivo](https://nivo.rocks/) if you are using React in your project and need to visualize data and you have potentially complex data visualization needs that are not met by simpler charting libraries, but not so complicated as requiring the raw power of D3.js.

[Gatsby](https://www.gatsbyjs.com/) was a decent choice for this project, although I would not immediately recommend it for all projects, due to the potential complexity of React and GraphQL.

[Forestry.io](https://tina.io/forestry/) was a great choice for a headless CMS, and that leads me to believe that [TinaCMS](https://tina.io/), the next iteration of Forestry, is just as nice.
