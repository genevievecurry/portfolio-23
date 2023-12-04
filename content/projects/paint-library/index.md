---
title: "Paint Library"
showSummary: true
showTaxonomies: true
groupByYear: true
showDate: false
---

[Paint Library](https://www.paintlibrary.art/) is is an online database of artist paint swatches.

{{< button href="https://www.paintlibrary.art/" target="_blank" >}}
Visit Paint Library
{{< /button >}}

## Why?

I was starting to dip my toes into the unexpectedly vast (and expensive) sea of premium watercolor materials, and realized fairly quickly that I needed a system of organization to avoid accidentally purchasing colors I didn't _really_ need.

It started out as a simple spreadsheet, which I learned is the way that most watercolor enthusiasts keep track of their collections. As I was building out my spreadsheet using Google Sheets, I felt a bit restricted by the format. After all, watercolors are a primarly visual experience. It's possible to insert images into cells, but I noticed that as I was looking at other artists' collections, I was not seeing any images.

After spending some time looking for a modern watercolor database where I could quickly look up any brand or pigment easily, I realized that there didn't appear to be a resource quite what I was looking for, so I started working on the [Paint Library](https://www.paintlibrary.art/) project, with the goal that users would be able to:

- [Search for any color](https://www.paintlibrary.art/search/rose-madder) they were interested in by name
- Look up an [entire line of paints offered by specific manufacturers](https://www.paintlibrary.art/manufacturer/daniel-smith)
- [See what each paint looks like](https://www.paintlibrary.art/paint/88022595-69ce-4506-8614-e794e0b18524/moonglow), with images uploaded by me or users with accounts
- Understand the [pigments used in each paint](https://www.paintlibrary.art/pigments/blue/PB29)
- Compare paints between manufacturers
- See [palettes used by professional artists](https://www.paintlibrary.art/palette/beea6902-ebe1-4d63-ab3d-c331b5c439ca/nature)
- Save their own [palette collections](https://www.paintlibrary.art/palettes) and share them with other artists or keep them private to use as a reference
- Visitors can make or [request an account](https://www.paintlibrary.art/login/request)
- Users can comment on paints

Since the [Paint Library](https://www.paintlibrary.art/) is a side project, it inevitably stalled out before I setup a robust registration process. Looking at analytics, I can see there is interest and it's showing up in search results, but other folks have since built their own versions with similar data collections, and I learned that I was more interested in scraping and processing paint and pigment data than managing an online art community.

## Building it

The repository is public if you want to take a look at it: [genevievecurry/paint-library-app](https://github.com/genevievecurry/paint-library-app).

Building this project was a thinly veiled excuse to play with [Svelte](https://svelte.dev/), [SvelteKit](https://kit.svelte.dev/), and [Prisma](https://www.prisma.io/). At the time, SvelteKit was pre-1.0, and since I was full of excitement and working on it regularly, I was able to keep up with the rapidly evolving project (and the breaking changes that came along).

## Functionality

- Postgres database
- Data parsing to import paint data in bulk
- Authentication and authorization
- Image upload (hosted on ImageKit)
- Application generated emails (using Twilio)
- Admin-only management tools, such as comment approval & moderation

## Screenshots

{{< figure
    src="home.png"
    alt="Home page of Paint Library, showing a search box and most recently added paint swatches."
    caption="[Paint Library's home page](https://www.paintlibrary.art/)"
    style="browser"
    >}}

{{< figure
    src="paint.png"
    alt="A screenshot showing Paint Library's page on a paint called Aussie Red Gold by Daniel Smith."
    caption="[Aussie Red Gold](https://www.paintlibrary.art/paint/4010111e-cede-4660-a2cd-00882661f8ee/aussie-red-gold) by [Daniel Smith](https://www.paintlibrary.art/manufacturer/daniel-smith)."
    style="browser"
    >}}

Each paint page includes uploaded swatches, the individual pigments used to create the paint, its lightfastness, transparency, staining and granulation ratings, and a manufacturer description. Not all manufacturers readily share this information, so the library isn't totally complete. Pages also include a space for a community description and artists notes (which are essentially moderated comments).

## Updates

### Fall 2022 Update

After setting aside development for a few months, I was something like 200 releases behind, and realized I had made a terrible error by not staying on top of things. I had been contacted by someone who was interested in partnering up with me to work on the content side of things on the website, and felt motivated to get the "community" aspect of the website going, but I ran into some serious issues that are just endemic to the breakneck speed that the JavaScript/Node ecosystem moves that made it harder to add OpenTelemetry and some other tools that would help me see how the app was working with actual users.

I REALLY enjoyed building the app, and using Svelte to do it. I built features as they occurred to me, used technology I was curious about, and totally skipped adding a test suite. It's not the way I would do things in a business context, but that's what side projects are for, right?

So, for now, Paint Library is on hold.

### Spring 2023 Update

Using my abandoned Svelte version of Paint Library as a template, I started rebuilding the static aspects of it in Next.js, hoping to learn more about the framework and how to use it with TypeScript, especially given its recent popularity. I was able to use the original PostgresQL database from V1 and a lot of the same code, which made things go pretty quickly.

Ultimately, I decided that Next.js is not a framework I wanted to continue using, for a variety of reasons. I imagine there are some business contexts that might make sense for it, but it would not be at the top of my list for new projects if I were tasked with making a recommendation.

You can check out the [Next.js iteration of Paint Library](https://paint-library-next.vercel.app/), hosted on Vercel (of course), if you're curious! It's VERY slow to navigate, the diagnosis of which is one of the friction points I could cite as part of my hesitation with the framework. Besides, side projects should be fun, right? JavaScript can be very fun to write, but Next.js made it kind of... well... un-fun.

### Winter 2023 Update

In the true spirit of side projects with mysterious sources of motivation driving them, I started working on a third iteration of the library. Why? Who knows!

This iteration is a 180&deg; turn, framework-wise. It is built using Elixir and Phoenix LiveView, and is hosted on Fly.io. Because I wanted the database structure to better align with Ecto (a very SQL-forward ORM for Elixir), I wrote parsers to import data via CSV exports from the original PostgresQL database, after setting up migrations and schemas in the new app.

I think Elixir is the winner here, and I'm excited to continue working on this version of the library. I think Ruby on Rails would also have been a good choice, with many of the same benefits.

You can see the project as I develop it at [paintlib.fly.dev](https://paintlib.fly.dev/), with the warning that anything could be broken at any time. Be sure to play with the theme switcher in the header and the [pigment filters](https://paintlib.fly.dev/pigments)!
