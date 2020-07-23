# Deadsimple Shopify 💰

A dead-simple shopify theme with killer DX and web perf 👨🏻‍💻🏇🏻✨

*This project is a WIP, I wouldn't recommend using it yet*

## Features
With Shopify's Slate now deprecated, The main value of this theme, is to modernize & streamline the development experience of Shopify themes.  

With that in mind, I've left the theme intentionally simple, and is meant to act as a "starter" (similar to the underscores theme in wordpressland) with some killer DX stuff builtin from the start. 

Here's a list of the key features today:
- **🏪 Multiple Themes & Store Configs:** Configurable with different shopify themes & storefronts, comes out of the box with infra for dev, staging, and production stores. 
- **🛠 Webpack Support:** A Modern Webpack setup with sane defaults out of the box. This can be easily extended to support most modern JS needs (React, Vue, Typescript, etc)
- **🕵️‍♀️ Eslint Support:** Eslint setup with sane defaults out of the box. This can easily be replaced with your existing EsLint setup or stripped out all together. 
- **💾 Easy Deploy & Dev Scripts:** Easily develop your store using `npm run dev` which will open your dev theme in your browser, watches for changes to your theme files & JS with for seamless updates as you write code. While this isn't local dev like Slate offered, it *feels* close. 
- **🧪 E2E testing with Cypress.io:** End to End testing setup with Cypress to make sure your site stays in great shape when you make changes. 

## Getting Started
To get started, you can either start working with the template theme included in `/src/` or paste in your own theme
> be sure not to delete `/src/app` as it acts as your JS folder

### Working with Javascript
Deadsimple Shopify is setup to work out of the box with a simple webpack setup. Paste your existing JS into the `/src/app/` folder and intiailize your JS in the `/src/app/main.js` file. 

#### How to add additional entrypoints
Do you have a javascript file that you only want to load on certain templates? 
- a js file you only want to run on your product page.
- a  js file you only need for a specific tempalte or landing page.
- a js file you only want to load based on any condition, basically. 
- etc, etc

**This requires you to manually edit the webpack config, but I'll guide you through it!**
1. go to `/webpack.config.js` and find the `entry` object.
2. Add a key value pair for your new file where the key is `assets/{your-file-name-here}` and the value is a relative path to your js file.
3. Link the entrypoint file from your liquid files using a liquid tag, like this: `{{ 'your-file-name.js' | asset_url | script_url }}`. See [their docs for more info](https://shopify.dev/docs/themes/liquid/reference/filters/url-filters#asset_url)
4. Make to restart your dev server, and that the new file has been uploaded to your shopify theme. 
4. Tada :tada: you've got a new JS entry point that you can link off to! 

Here's an example of what the entry object should look like with your custom javascript entrypoint files:

```javascript
entry{ 
  'assets/index': './src/app/index.js',
  'assets/{you-file-name-here}': './src/app/{your-file-name-here}.js'
}
```
