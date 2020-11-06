---
layout: index.html
title: 'Prioritizing users in a crisis: Building the California COVID-19 response site'
meta: Developing the California state COVID-19 emergency response website
previewimage: /img/covid-site.jpg
lead: null
author: Aaron Hans
publishdate: 04/29/2020
tags: news
---
The CA.gov Alpha team was tasked with developing the California state COVID-19 emergency response website in collaboration with the CHHS Office of Innovation and the California Department of Technology.

Our challenge: Create a scalable, accessible, stable website that is easy to update in a fast changing public health crisis. And do it in four days. 

This challenge is one that will be familiar to our digital colleagues working in other states, cities and countries right now. We’ve been super impressed by and appreciative of the work being done in places like [San Francisco](https://sf.gov/topics/coronavirus-covid-19), [New Jersey](https://covid19.nj.gov/) and the [United Kingdom](https://www.gov.uk/coronavirus). 

Just like those teams, we’ve been focused on prioritizing user needs in this time of crisis. And we thought it could be useful to share out how we’ve been using technology/development decisions to do this.

For our team, we started by returning to one of our core principles: “Always accessible.”  

We recognize, of course, that “Always accessible” is not a novel approach. Here in California accessibility is a guiding principle in the state’s digital strategy. And our work is just one part of the state’s larger commitment to ensuring that information and services are accessible.

What is novel is how our team is broadening the definition of accessibility for state government to include performance as a core component. Performance as accessibility.

Our goal is to make COVID19.CA.gov fast and easy to use on any kind of hardware or with any level of bandwidth. 

We’re not yet 100% accessible – but accessibility is 100% our north star and what we are working toward every day. 

## Accessible, always

We take multiple steps to make sure our products work for everyone. 

We run automated audits which give us performance and accessibility scores on every build. Getting a high score on these automated tools is a good initial indicator, but not the whole story. We also manually test sites, ensuring we remain accessible via alternative navigation modes. We test with screen readers, which gives us a sense of how our site is experienced by sight-impaired users. This helps find and eliminate interactions that might trap or slow people down.

We’re grateful for support from the [California Department of Rehabilitation](https://www.dor.ca.gov/). The DOR team trained us to use those screen readers and has been instrumental helping us understand and avoid many common issues often created accidentally. 

And we’re grateful to the CHHS Office of Innovation whose team members are the frontline in our work to make our content accessible and clear.  

## Performance as a critical component of accessibility

[Fast sites are more successful](https://wpostats.com/) than slow ones. And some tools make it easier than others to produce fast sites.

Our team uses Bootstrap, which by default, is quite large. So we make sure to run CSS pruning processes to trim out all unused code before deploying to production. We also avoid the Bootstrap javascript widgets because we prefer using small, low dependency Web Components.

### Web Components

Delivering the desired layout and interactivity with a small code footprint allows us to hit our performance goals more easily. We create light frontend interactivity by publishing Web Components. When we have to build our own we use some of the [open-wc](https://open-wc.org/) build tools that help by providing models for running components in isolation and integrated testing patterns.

We are mostly depending on the custom element part of the web component standard. This lets us easily use components on different properties with an npm install and using the tag on a page, allowing us to provide the maximum amount of flexibility and reuse. Building new frontend properties using Web Components is a user-first choice for many reasons:

*   Web Components work well with any tech stack 
*   Component code can travel with its own integrated unit tests
*   Integration can be done via npm
*   Web Components can be modified in isolation and versioned so consumers can choose which versions to install

These advantages give new code a better chance for longevity and higher probability that our current efforts are providing future benefit instead of technical debt.

We are aware that building our own [components](https://www.npmjs.com/org/cagov) when necessary is a big decision. We only undertake this when we can’t find existing options that use dependencies sparingly and provide the required UI. When creating new components we run tests  in browsers, down to IE11, as well as ensuring they adhere to all of our other standards for accessibility and performance. 

### A site with bad performance is exponentially worse on a low end device

We’re proud to have achieved a high score on our [Lighthouse](https://developers.google.com/web/tools/lighthouse) performance audit but that isn’t enough for government tools, especially in this time of crisis. 

We need to go above and beyond to ensure that all users are able to get a performant experience, no matter their device. This is especially true since users aren’t able to shop around for a different, better government experience. 

So we picked up the cheapest phone they had at Cricket Wireless. A $20 device running Android 9, with no contract commitment has been one of the most useful and effective tools in our effort to be accessible.  

The experience on this device is pretty different from what we see on the newest iPhones or Google Pixel devices. Pages delivering a lot of javascript are slow to render and respond to interaction, any scroll triggered effects look terrible and not actually cool (like they look on a new iPhone). Even swiping quickly through long, complex pages can be frustrating and slow as the device struggles to render lots of content.

Leaner, faster sites benefit _everybody_, but making sure your applications run smoothly on low-end hardware makes a massive difference for those users. 

### Preserving performance

As we add new features, it can be difficult to keep tabs on how our performance is changing. As well as using Lighthouse, we’ve introduced Calibre to our reporting, as this enabled us to keep our builds fast. We’re able to trigger performance and accessibility reports on each build with a process running outside of the build itself.

This is how Calibre reports our changes to Slack:

<figure class="figure"><img src="../img/perf-monitor.jpg" class="" alt="Monitoring performance in slack"><figcaption class="figure-caption">Calibre reporting performance metrics to slack</figcaption></figure>

We can use this same data to report to our dashboards. This helps us with visibility to the whole team, not just the engineers.

<figure class="figure"><img src="../img/dashboard.jpg" class="" alt="Monitoring performance in slack"><figcaption class="figure-caption">Performance and Accessibility widgets in data studio dashboards</figcaption></figure>

### Getting expert advice

Alex Russell, Senior Staff Software Engineer for Chrome at Google, kindly [analyzed](https://docs.google.com/document/d/1S4jG8YKZrL_RpaDf5uk_vuEO7osdNNloDnXTAfjuDdo/edit) the covid19.ca.gov site. He identified some areas for improvement with our fonts and integration with Google Analytics.

We were stoked to have  Alex’s deep expertise benefit COVID19.CA.gov. And we’re deeply appreciative of his advocacy to pay attention to performance. 

Overall, Alex found that the covid19.ca.gov site was fast, rendered quickly and finished all operations faster than similar sites, which helps users get the information they need quickly and easily.

<figure class="figure"><a href="https://s3.amazonaws.com/www.whatupwebdev.com/assets/ca_covid_19_comparison_video.mp4"><img src="../img/webpagetest.jpg" class="" alt="WebPageTest Comparison timeline"></a><figcaption class="figure-caption">Web Page Test timeline comparison</figcaption></figure>

## Interactivity with APIs

### Functions as a Service (FAAS)

API endpoints running on FAAS allow us to keep our backend code in isolated, cheap, scalable components. The [@CAdotGov](https://twitter.com/cadotgov) team is running infrastructure mostly on Azure. [Carter Medlin](https://twitter.com/CarterMedlin) set up the first APIs on Azure’s FAAS services. 

<figure class="figure"><img src="../img/api-alpha.jpg" class="" alt="api.alpha.ca.gov screenshot"><figcaption class="figure-caption"><a href="https://api.alpha.ca.gov">https://api.alpha.ca.gov</a></figcaption></figure>

## Stability via pregeneration

Covid19.ca.gov received millions of visitors in the hours after Governor Newsom announced the statewide Stay at Home Order.

The site was able to handle this level of traffic easily because we removed every unnecessary piece from the production service pipeline. This provided us with peace of mind ahead of launch, lowers costs and improves stability. While our content is constantly updated and deployed automatically, we create a pregenerated version of the final build each time so that production systems serve the body of pages as static content. 

We chose [11ty](https://11ty.io/) as our static content generator because we like their philosophy and emphasis on performance and accessibility. Making the production build a set of static files removes a lot of common bottlenecks. Scaling concerns are radically simplified because the initial content is delivered without database connections or even any server side code execution.

Removing complexity and risk from the production pipeline doesn’t require us to forego any interactivity or force us to abandon mature open source tools. 

We are making the choice to run all computation possible before deployment. We are still using APIs for data driven interactions, such as the [Telehealth provider lookups](https://covid19.ca.gov/telehealth) page. Content is authored in our private WordPress repository and the output is integrated with 11ty, so we don’t run PHP on public servers. 

### Authoring with WP, FAAS, github actions

We chose WordPress for their premier authoring environment but decided not to use it as a content delivery tool. This allowed us to take advantage of the mature writing tools WordPress provides without needing to support any of its dependencies in our production environment.

We were able to decouple WordPress authoring from reading by using its built in API. We set its publish trigger to notify our Function as a Service (FAAS) service when content was updated. Our [FAAS tool](https://github.com/cagov/wordpress-integration-api) moved the post content from WordPress to Github.

We then used [a Github Action](https://github.com/marketplace/actions/eleventy-action-plus-rss) to trigger 11ty builds and deploy to a browseable github pages branch which then triggers the deploy to our Azure production environment 

<figure class="figure"><img src="../img/webAppReferenceArchitecture.jpg" class="" alt="Web App Reference Architecture"></figure>

## It’s not over

We know that the COVID-19 pandemic is a marathon, not a sprint. We’re mindful there’s more work to do in the coming weeks and months. And our team is looking forward to continuing to meet the challenge of this moment by ensuring that the people of California get the information they need quickly and easily.
