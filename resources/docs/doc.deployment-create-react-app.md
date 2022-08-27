# Deployment | Create React App

https://create-react-app.dev/docs/deployment/#netlify


### Netlify

To do a manual deploy to Netlify's CDN:

```
npm install netlify-cli -g
netlify deploy
```

Choose build as the path to deploy


To setup continous delivery:

With this setup Netlify will build and deploy when you push to git or open a pull request:


1. Start a new netlify project
2. Pick your Git hosting service and select your repository
3. Click Build your site


Support for client-side routing:

To support pushState, make sure to create a public/\_redirects file with the following rewrite rules

```
/*  /index.html  200
```