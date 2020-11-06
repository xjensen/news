# CMS Installation

## Install Azure OAuth Functions

To allow people to log into the new CMS with their GitHub accounts, we need to facilitate OAuth transactions. We can do this with [a group of Azure App Functions I built for this purpose](https://github.com/xjensen/azure-oauth-functions).

1. Fetch that repo and deploy to Azure as a Function App.

2. After deployment to Azure, take note of the Function App's root URL. We'll be using this. 

> Example: https://canews-oauth-functions.azurewebsites.net/

## Configure the CMS files

In the repo for the site, we need to point the CMS to these Azure functions.

3. Open this file: src/cms/config.yml

4. Put your Azure Function App's root URL (from step #2) into the `backend/base_url` field.

5. If needed, change `auth_endpoint` to match how your Azure Function App routes, if different.



