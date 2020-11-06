---
layout: index.html
title: Alpha.CA.gov product release 1
meta: Alpha.CA.gov product release 1
previewimage: /img/alpha.ca.gov-homepage-thumb.jpg
lead: null
author: JP Petrucione
publishdate: 01/13/2020
tags: news
---
<figure class="figure"><img src="../img/homepage-alpha.png" class="" alt="Alpha.CA.gov homepage banner."><figcaption class="figure-caption">Alpha.CA.gov homepage banner.</figcaption></figure>

## Please test this work in progress!

It’s been a very busy, very productive six weeks for our team. (Even despite the holiday season!)

As we’ve documented in our weekly “Done/doing” blogs, we’ve begun to build the proverbial plane, even as we’re approaching cruising altitude.

To date, we have: configured our instances of GitHub, GSuite and Slack - tools not widely used in California state government. Gotten our cloud environment up and running ( thanks to a huge lift from [CDT](https://twitter.com/CADeptTech)). Established initial [workplace norms, ceremonies and workflows, design and operational principles](https://handbook-cadotgov.readthedocs.io/en/latest/). Bootstrapped a web design architecture, developed and tested prototypes (including this new blog, which is open source and 100% accessible). Said “[Hello California!](https://twitter.com/CAdotGov/status/1204814757624086528")” Begun the ongoing process of gathering, researching and prioritizing [user needs](https://twitter.com/CAdotGov/status/1202723639423950849). Pushed out our [first user survey](https://twitter.com/CAdotGov/status/1207797255643766785). Gotten a sample SMS text up and running. Collaborated with, learned from, and greatly appreciated working with our state partners in our research, testing and fact checking.

The ramp up was chaotic at times, like any start up. We’ve hit plenty of speed bumps along the way — and have plenty of learnings to share:

Establishing a culture of collaboration and actually getting to know each other as people, from the outset, are among the most important things we’ve done. And while we’re still learning how to work together and trying to figure out the simple things like finding the right temperature for the office (a work in progress), we have a solid foundation for navigating and resolving conflict.

We can’t emphasize enough how critical Sprint 0 (our planning and logistics sprint) was for building a foundation before kickoff. Finding and setting up the office, hiring staff, figuring out the right number of chairs we _actually_ need, working with legal to vet tools, and other basic operational needs are a huge undertaking and, often, underestimated.

Launching an alpha just before the winter holidays is not an optimal timeline. Doing the kick-off during the holidays meant that roles and responsibilities have had to shift in order to keep up momentum while team members were away. This heightened what was already proving to be a challenge around operationalizing our workflows to figure who’s doing what, when, and what the hand off of tasks between teams members looks like.

Working in the agile way has also proven to be a challenge. It’s fundamentally different from how state government typically operates — and it’s a new way of working for most of us (see building the plane metaphor above). At the same time, many of us are learning new tools, most notably [GitHub](https://GitHub.com/cagov), which we’re using as our primary workflow management tool.

Another significant challenge has been scaling up our user testing. User research is a newer discipline for the State. The status quo currently depends on operationalizing untested assumptions of what we think people need. We are trying to set a new way of work in this alpha, but as a result, none of the basics were in place when we got started. For example, there was no legal template for participant consent for qualitative user interviews. And we still don’t have the ability to compensate people for the time they spend talking to us and sharing their stories (we’re working on it).

Other minor but impactful challenges have slowed our roll at points. Things like not having electricity for the first week, working around partners’ availability for fact-checking user stories, and procuring new tools and subscriptions (always takes longer than anticipated).

We’ll be posting more about our challenges and learnings in the weeks ahead. But the most important learning we can offer at this point is: when it comes to creating user-focused digital services, there is no such thing as “done,” or “final.” There are always iterations and improvements that can be made.

It’s in that spirit that we share our [first product release](http://alpha.ca.gov/) with you.

These seven new prototypes — a homepage, find your minimum wage, request a birth certificate, find official California state holidays, hire a licensed contractor for home improvements, and find food banks near you — are a work in progress. They’re iterations on where we started. They’ve been user tested (to the extent possible) and improved based on that feedback and will continue to be tested and iterated on. They’re not meant to be perfect, and we need your feedback to help make them better.

The prototypes are as accessible as possible (each scores 100 on [Lighthouse](https://twitter.com/____lighthouse?lang=en)). AAnd none exceed a 6th grade reading level. In these critical ways, they provide simpler, clearer, faster access to state government information and services.

We hope you’ll give us feedback so that we can continue to learn, test, iterate and improve these pages.

Below, we’ve tried to capture a before/after for each user story, as well as some of the user feedback we captured testing the prototypes. A complete account of each user story can be found on [GitHub](https://GitHub.com/orgs/cagov/projects/2).

## Homepage

*   [Baseline](http://ca.gov/)

<figure class="figure"><img src="../img/cadotgov-homepage.png" alt="CA.gov homepage"><figcaption class="figure-caption">Baseline for the current CA.gov homepage</figcaption></figure>

Check out the iterated [homepage](http://www.alpha.ca.gov)

## Find your minimum wage

*   [GitHub issue](http://www.https://GitHub.com/cagov/UX/issues/43)
*   [Baseline](https://www.dir.ca.gov/dlse/faq_minimumwage.htm)

<figure class="figure"><img src="../img/baseline-minimum-wage.png" alt="Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”</figcaption></figure>

We tested and iterated three prototypes

<figure class="figure"><img src="../img/proto-minimum-wage-1.png" alt="Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”</figcaption></figure>

<figure class="figure"><img src="../img/proto-minimum-wage-2.png" alt="Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”</figcaption></figure>

<figure class="figure"><img src="../img/proto-minimum-wage-3.png" alt="Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Find your minimum wage.”</figcaption></figure>

User feedback & takeaways included:

*   We learned that while the statewide minimum wage is a certain amount, some cities and counties set their own rate which is not always easy to find.
*   “More info on the page would be helpful.”
*   “Why provide the city look up when it says “statewide?”
*   Less isn’t always enough.

Check out the iterated “[Find your minimum wage](https://alpha.ca.gov/services/find-minimum-wage-your-city/)” page

## Request a birth certificate

*   [GitHub issue](https://GitHub.com/cagov/UX/issues/53)
*   [Baseline](https://www.cdph.ca.gov/Programs/CHSI/Pages/Obtaining-Certified-Copies-Online.aspx#)

<figure class="figure"><img src="../img/request-a-birth-certificate.png" alt="Screenshot of the current CA.gov “Request a birth certificate” page."><figcaption class="figure-caption">Screenshot of the current CA.gov “Request a birth certificate” page."</figcaption></figure>

We tested and iterated two prototypes:

<figure class="figure"><img src="../img/proto-birth-certificate-1.png" alt="Screenshot of Alpha.CA.gov design prototype for “Request a birth certificate.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Request a birth certificate.”</figcaption></figure>

<figure class="figure"><img src="../img/proto-birth-certificate-2.png" alt="Screenshot of the current CA.gov “Request a birth certificate”"><figcaption class="figure-caption">Screenshot of the current CA.gov “Request a birth certificate” page."</figcaption></figure>

User feedback & takeaways included:

*   We went to the county office and observed people trying to get their birth certificate. We learned that people didn’t know they had to bring their ID or make the request at the county of birth.
*   “I like the first one better. You can see all the info first and then see the link. Showing the cost is a good idea, seeing the wait time is good.”
*   “Having the word ‘cost’ is needed and ‘wait time’ is helpful.”
*   “I like the button to be more at the bottom.”

Check out the iterated “[Request a birth certificate](https://alpha.ca.gov/services/request-birth-certificate/)” page

## Find official California state holidays

*   [GitHub issue](https://GitHub.com/cagov/UX/issues/52)
*   [Baseline](https://www.calhr.ca.gov/employees/pages/state-holidays.aspx)

<figure class="figure"><img src="../img/baseline-state-holidays.png" alt="Screenshot of the current CA.gov “Find official California state holidays” page." "=""><figcaption class="figure-caption">Screenshot of the current CA.gov “Find official California state holidays” page."</figcaption></figure>

We tested and iterated two prototypes:

<figure class="figure"><img src="../img/proto-state-holidays-1.png" alt="Screenshot of the current CA.gov “Screenshot of Alpha.CA.gov design prototype for “Find official California state holidays.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Find official California state holidays.”</figcaption></figure>

<figure class="figure"><img src="../img/proto-state-holidays-2.png" alt="Screenshot of the current CA.gov “Screenshot of Alpha.CA.gov design prototype for “Find official California state holidays.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Find official California state holidays.”</figcaption></figure>

User feedback & takeaways included:

*   We learned that listing the holidays is not as simple as listing the dates, particularly if the some of the holidays and holiday time off fall on weekends.
*   “I definitely like the upcoming holiday feature.”
*   “Link to add calendar looks out of place, breaks up the text in an odd way.”

Check out the iterated “[Find official California state holidays](https://alpha.ca.gov/services/state-california-employee-holidays/)” page

## Hire a licensed contractor for home improvements

*   [GitHub issue](https://GitHub.com/cagov/UX/issues/38)
*   [Baseline](https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/)

<figure class="figure"><img src="../img/home-improvements.png" alt="Screenshot of the current CA.gov “Hire a contractor for home improvements” page.”"><figcaption class="figure-caption">Screenshot of the current CA.gov “Hire a contractor for home improvements” page.</figcaption></figure>

We tested and iterated two prototypes (including one paper prototype):

<figure class="figure"><img src="../img/proto-home-improvements-1.png" alt="Screenshot of Alpha.CA.gov design prototype for “Hire a licensed contractor for home improvements.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Hire a licensed contractor for home improvements.”</figcaption></figure>

<figure class="figure"><img src="../img/proto-home-improvements-2.jpeg" alt="Screenshot of Alpha.CA.gov design prototype for “Hire a licensed contractor for home improvements.”"><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Hire a licensed contractor for home improvements.”</figcaption></figure>

User feedback & takeaways included:

*   We learned that the process to hire a licensed contractor is complicated.
*   “I assume it would take me somewhere more in-depth.”
*   “The link icon under #2 looks more official, seems to show authority. The “press button” icon appears more simple.”
*   “Maybe should say more details.”

Check out the iterated “[Hire a licensed contractor for home improvements](https://alpha.ca.gov/services/hire-licensed-contractor-home-improvements/)” page

## Find food banks near you

*   [GitHub issue](https://GitHub.com/cagov/UX/issues/33)
*   [Baseline](https://www.cdss.ca.gov/food-banks)

<figure class="figure"><img src="../img/baseline-food-banks.png" alt="Screenshot of the current CA.gov “Find food banks near you” page."><figcaption class="figure-caption">Screenshot of the current CA.gov “Find food banks near you” page.</figcaption></figure>

We tested and iterated one prototype:

<figure class="figure"><img src="../img/proto-food-banks.png" alt="Screenshot of the Alpha.CA.gov design prototype for “Find food banks near you.”"><figcaption class="figure-caption">Screenshot of the Alpha.CA.gov design prototype for “Find food banks near you.”</figcaption></figure>

User feedback & takeaways included:

*   We listed 211 as another resource assuming that if people were looking for food banks, they would also look for 211 services. When tested, people didn’t know what 211 was. We found this to be an opportunity to inform people of other services that they may obtain.
*   “Looks nice and simple, I’d make text bigger. I mean, I know people know how to enlarge on screen to make bigger…”
*   “Needs housing info.”
*   “Looks good. Could use some visuals, like what the places look like. Could use a picture to go with it. Would look up using zip code.”

Check out the iterated “[Find food banks near you](https://alpha.ca.gov/services/find-food-banks-near-you/)” page
