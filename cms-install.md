# CMS Installation

Procedure for installing Netlify CMS. I'm assuming all files are current with this forked repo.

## Install Azure OAuth Functions

To allow people to log into the new CMS with their GitHub accounts, we need to facilitate OAuth transactions. We can do this with [a group of Azure App Functions I built for this purpose](https://github.com/xjensen/azure-oauth-functions).

1. Fetch that repo and deploy to Azure as a Function App.

2. After deployment to Azure, take note of the Function App's root URL. We'll be using this. 

> Example: https://fa-go-alph-blg-001.azurewebsites.net

## Configure the CMS files

In the repo for the site, we need to point the CMS to these Azure functions.

3. Open this file: [src/cms/config.yml](https://github.com/xjensen/news/blob/master/src/cms/config.yml)

4. Put your Azure Function App's root URL (from step #2) into the `backend/base_url` field.

> Example: https://fa-go-alph-blg-001.azurewebsites.net

5. If needed, change `auth_endpoint` to match how your Azure Function App routes, if different.

6. Deploy these changes to the site.

## Configure a GitHub OAuth app.

On the GitHub side, we need to set up an OAuth app to allow logins from the CMS.

7. Check out [instructions for creating an OAuth app](https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app). It's not too complicated.

8. You'll need to enter some values when you get to the "Register a new OAuth application" page. 

* **Application Name** is what internal authors/editors will see when they log in for the first time and accept access. It should look official: `news.alpha.ca.gov Content Management` or something similar. 
* **Homepage url** should be `https://news.alpha.ca.gov/cms`.
* **Application Description** can be whatever you want.
* **Authorization callback URL** is the URL to the Callback function in the Azure Function App. 

> Example: https://fa-go-alph-blg-001.azurewebsites.net/api/callback

9. Do it! When your GitHub OAuth app is created, take note of the **Client ID**. You'll also need to generate a **Client secret**. We'll need these two values next.

## Configure Azure OAuth Functions

We need to configure some environment variables in Azure to get our OAuth functions working.

10. Go to the dashboard for our new Azure Function App, as deployed in steps #1 and #2.

11. Click into the Settings/Configuration area.

12. We're going to enter some new Application settings. **Save** when done.

* Set `REDIRECT_URL` to the same value we entered for the **Authorization callback URL** on the GitHub OAuth app.

> Example: https://fa-go-alph-blg-001.azurewebsites.net/api/callback

* Set `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET` with correponding values from the GitHub OAuth App.

> More securely storing the OAUTH_CLIENT_SECRET is left as an exercise for the reader, and probably differs depending upon standards at CDT.

## Accessing the CMS

13. Go to `https://news.alpha.ca.gov/cms`.

## Local Development

14. Editing articles should be done on the live site. When you want to *do development* on the CMS itself, such as create new content widgets, run the following command (from the site's directory) in a terminal.

```npx netlify-cms-proxy-server```

(This requires the `netlify-cms-proxy-server` from npm.)

Then run the usual `serve` command in another terminal at the same time.

```npm run serve```

Any articles you "publish" with the proxy active will commit to the local git repo, rather than going to GitHub. You could still later push those local commits live if you want.






