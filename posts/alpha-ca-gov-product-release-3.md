---
layout: index.html
title: Alpha.CA.gov product release 3
meta: Third product release for Alpha.CA.gov
previewimage: /img/Cover-Release-3.jpg
lead: null
author: JP Petrucione
publishdate: 03/11/2020
tags: news
---
<figure class="figure"><img src="/img/Cover-Release-3.jpg" class="" alt="A complete list of all Alpha.CA.gov user stories."><figcaption class="figure-caption">A complete list of all Alpha.CA.gov user stories.</figcaption></figure>

The first phase of the Alpha.CA.gov initiative wrapped up this past Friday with the release of eight new prototypes:

*   Apply for a discounted phone service
*   Check your tap water quality
*   Find shelters near you
*   Contact a state agency
*   Prepare for a wildfire
*   Considerations after a wildfire
*   Sign up for local emergency alerts
*   Apply for unemployment insurance

As with our prior releases, this third and final release is the product of research, experimentation and iteration. In this release, we shipped the most stories in the shortest period of time. We wanted to show the value of at least creating initial prototypes, emphasizing the fact that we should always be iterating.

On the research and experimentation front, we tried a few new methods for getting user feedback, including a new online tool and expanded in-person testing.

The online tool allowed us to connect with Californians across the state from a mix of socio-economic backgrounds, varying levels of tech savvy (and non-savvy) as well as other criteria like “previously evacuated due to a wildfire or other natural disaster” to get feedback on our disaster prototypes.

We also prioritized in-person research and feedback including soliciting friends and family feedback on water quality. One of the most surprising outcomes from this testing was that every person we talked to had, at one time, checked their water quality. Whether it was because they were using it to mix baby formula or because they grew up in a place where tap water was unsafe, it was a surprising number of people.

We recognize that the n (the number of people talked to) in research like this is small but the chance to have the opportunity to ask “why” or “can you tell us more” in 30-minute, in-person interviews is invaluable.

These interviews allowed us to get at a deeper understanding of the questions people have around water, the work-arounds they use to try and figure out their water quality, and why this is such an important user need to focus on.

Our in-person research also taught us that when working with disaster preparedness, response, or recovery, each person’s experience is SO unique to their situation that it’s hard to get feedback that can be universalized and turned into a standard experience for users. But we embraced every piece of feedback and the prototypes that we offer in this release are intended to be iterated on and improved to become more relevant to people’s lives.

Going through this process helped clarify for us the role government plays in providing information. It also gave us insights into the challenges and possible approaches to sharing information relevant to each person’s individual situation.

As the last prong in our expanding user research efforts, we’re circling back with everyone who submitted their email in the initial survey (about 85 people). We will send the alpha.ca.gov site to them to ask for feedback.

Our dev/tech team also really expanded on some best practices and brought some deep learnings to their work in this sprint.

The team used a Cricket Wireless’ Icon phone to test everything on low-end hardware. Making this part of our process exposed interesting new bugs and highlighted how important our existing focus on performance is. Being able to see render issues and interaction lag on a real device made it possible for each team member to actually see and feel the sub-par experience users on these devices have when surfing the web.

This is critical given the fact that our team all use the most recent or prior release Apple or Android phones. And that when we make performance improvements the impact on high-end devices is minimal but is dramatic on low-end phones like the Cricket.

The other thing our dev team was really excited about this sprint was beginning to publish our own web components to power customized widgets, which really improved quality. We were able to hammer out interaction and accessibility improvements and install updates easily across multiple sites.

We’re working on a separate blog that wraps up the Alpha phase and provides several, really interesting takeaways and learnings. Stay tuned for that later this week.

As with all of our work, these newest prototypes are presented to you as works in progress. We welcome your feedback to make them better.

## Homepage

*   We asked users for their feedback on how best to group prototypes. The final groupings reflect the feedback from these users.
*   Check out the [iterated homepage](https://alpha.ca.gov/)

## Check if you can get a discounted phone service

*   User story: As a low income person, I need LIFELINE SERVICES, so that I can stay connected and communicate.
*   Our assumption: It’s imperative that we build services for all people and all devices. Californians that use Lifeline Services are often eligible for other social services. We assume that prioritizing this need will reveal other services to tackle. We want to test if this is the case and if this content and format makes sense to folks that depend on these services.
*   [GitHub issue #64](https://github.com/cagov/UX/issues/64)
*   [Baseline](https://www.cpuc.ca.gov/lifeline/)

<figure class="figure"><img src="/img/lifeline-baseline-transaction-landing-S-page.jpg" alt="Screenshot of current Lifeline Services baseline."><figcaption class="figure-caption">Screenshot of current Lifeline Services baseline.</figcaption></figure>

We tested and iterated multiple prototypes, including:

<figure class="figure"><img src="/img/lifeline-eligibility-before-testing-1.jpg" alt="Screenshot of Alpha.CA.gov design prototype for " check="" if="" you="" can="" get="" a="" discounted="" phone="" service”"=""><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Check if you can get a discounted phone service”</figcaption></figure>

<figure class="figure"><img src="/img/lifeline-eligibility-before-testing-question-2-S.jpg" alt="Screenshot of Alpha.CA.gov design prototype for " check="" if="" you="" can="" get="" a="" discounted="" phone="" service”"=""><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Check if you can get a discounted phone service”</figcaption></figure>

<figure class="figure"><img src="/img/lifeline-eligibility-before-testing-question-3-S.jpg" alt="Screenshot of Alpha.CA.gov design prototype for " check="" if="" you="" can="" get="" a="" discounted="" phone="" service”"=""><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Check if you can get a discounted phone service”</figcaption></figure>

<figure class="figure"><img src="/img/lifeline-apply-online-before-testing-S.jpg" alt="Screenshot of Alpha.CA.gov design prototype for " check="" if="" you="" can="" get="" a="" discounted="" phone="" service”"=""><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Check if you can get a discounted phone service”</figcaption></figure>

User feedback and takeaways included:

*   “Oh next, what’s next. Oh it didn’t do anything because I was supposed to click on something. That’s good.”
*   “Until you explained it a little bit more it wasn’t clear that I should go through it step by step. I would recommend hiding the other steps. Start with ‘if you can go to a discount.’” (This comment helped reinforce that “check elgibility” was its own need.)
*   “I like that it explains what a household is.”
*   “It is all easy to read but not intuitive to go to step #2.”
*   Check out the iterated “[Check if you can get a discounted phone service](https://www.alpha.ca.gov/check-if-you-can-get-discounted-phone-service/)”

## Check your tap water quality

*   User story: As a Californian, I need to know my WATER QUALITY, so I can know if it's safe to drink.
Our assumption: Water safety and accessibility is one of California's most significant issues. We assume that informing Californians of the quality of the water they drink is a need and one that is not currently being met. We sought to answer two questions: where does my water come from and what is my water quality? We then wanted to point people to a place where they could learn more. We hope to test if addressing these questions gets us closer to meeting the need.*   [GitHub issue #90](https://github.com/cagov/UX/issues/90)
*   [Baseline](https://www.waterboards.ca.gov/water_issues/programs/hr2w/)

<figure class="figure"><img src="/img/Water-Baseline.jpg" alt="Screenshot of the current CA.gov “Check your tap water quality” page."><figcaption class="figure-caption">Screenshot of the current CA.gov “Check your tap water quality”</figcaption></figure>

We tested and iterated three prototypes:

<figure class="figure"><img src="/img/Water-Prototype-Safe-to-drink-v2-S.jpeg" alt="Screenshot of Alpha.CA.gov design prototype for “Check your tap water quality."><figcaption class="figure-caption">Screenshot of the current CA.gov “Check your tap water quality” page.</figcaption></figure>

<figure class="figure"><img src="/img/Water-Prototype-Safe-to-drink-v3-S.jpeg" alt="Screenshot of Alpha.CA.gov design prototype for “Check your tap water quality."><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Check your tap water quality.”</figcaption></figure>

<figure class="figure"><img src="/img/Water-Prototype-Unsafe-to-drink-v2-S.jpeg" alt="Screenshot of Alpha.CA.gov design prototype for “Check your tap water quality."><figcaption class="figure-caption">Screenshot of Alpha.CA.gov design prototype for “Check your tap water quality.”</figcaption></figure>

User feedback and takeaways included:

*   “Call out is confusing”
*   “What is that unit?”
*   “Who is the authority on water?”
*   “Would have preferred zip look-up because I'm lazy, glad it auto populated”
*   “Who is responsible if my water tastes funny?”
*   “How is it determined how it's tested?”
*   “How do I know to trust California?”
*   “Going to state of CA, feels like asking Monsanto if corn is safe”
*   Check out the iterated “[Check your tap water quality](https://www.alpha.ca.gov/check-your-tap-water-quality/)” page

## Find shelters near you

*   User story: As a person looking for temporary housing, I need to know where I can find my nearest SHELTER, so that I have a roof over my head.
*   Our assumption: With access to housing at a crisis point here in California, making it easier to find shelters would be helpful, a value add and worth testing. There are many situations that could force a person to have to find a shelter - and as far as we could tell there is not a robust state data source for this information.
*   [GitHub issue #102](https://GitHub.com/cagov/UX/issues/102)
*   Baseline: there isn't anything comparable (that we could find)
*   We ran out of time to test before shipping, but our product owner chose to launch recognizing that this prototype is not done, and we know there’s a need to test and iterate.
*   Check out the iterated “[Find shelters near you](https://www.alpha.ca.gov/find-shelters-near-you/)”

## Contact a state agency

*   User story: As someone who wants to know information about government organizations, I want to be able to find details and CONTACT INFORMATION for the organization I want to connect with.
*   Our assumption: We assume that people are looking for state entity contacts. This will test the best way to share the state directory with Californians. And it will test any other content types we should consider when bucketing state entity information.
*   [GitHub issue #65](https://github.com/cagov/UX/issues/65)
*   [Baseline](https://cold.govops.ca.gov/)

<figure class="figure"><img src="/img/Contact Agency_Baseline.jpg" alt="Screenshot of the current CA.gov “Contact a state agency” page."><figcaption class="figure-caption">Screenshot of the current CA.gov “Prepare for a wildfire" page."</figcaption></figure>

*   Limited bandwidth meant that we ended up testing this prototype internally with Alpha team staff members.
*   Check out the iterated “[Contact a state agency](https://www.alpha.ca.gov/contact-us/)”

## Prepare for a wildfire and Sign up for local emergency alerts

*   User story: As a person who knows an emergency could happen, I need to know what TOP TEN emergency prep things I need, so that I can feel more prepared.
*   Our assumption: We want to test if the public will trust the guidance/considerations in this content type. This is particularly focused on preparing for a wildfire. We want to learn what resonates with people.
*   Additionally: One of the first things that became clear as we worked on the user story is that signing up for local emergency alerts should be a stand alone step prototype.
*   [GitHub issue #98](https://github.com/cagov/UX/issues/98)
*   [Baseline](https://www.caloes.ca.gov/individuals-families)

<figure class="figure"><img src="/img/Wildfire-Preparedness-Baseline.jpg" alt="Screenshot of the current CA.gov “Prepare for a wildfire” page."><figcaption class="figure-caption">Screenshot of the current CA.gov “Prepare for a wildfire" page."</figcaption></figure>

We tested and iterated one prototype:

<figure class="figure"><img src="/img/Prepare Wildfire-Prototype-1.jpg" alt="Prepare for a wildfire" prototype."=""><figcaption class="figure-caption">"Prepare for a wildfire" prototype.</figcaption></figure>

User feedback and takeaways included:

*   “Wishes for graphics to be more clear”
*   “Know alert is by county”
*   “Some you have to do in order, like you need a plan before you practice it”
*   “All are important steps; leave in this order but make sure it makes sense in the order”
*   “Doesn’t really understand how the content/steps are ordered”
*   “How do I know this has accurate info”
*   “Design is off-putting almost looks like an ad, feels too sophomorish”
*   “Choose a family communication - really liked this step”
*   Check out the iterated “[Prepare for a wildfire](https://www.alpha.ca.gov/prepare-for-wildfire/)” and “[”Sign up for local emergency alerts](https://www.alpha.ca.gov/sign-up-for-local-emergency-alerts/)” pages
