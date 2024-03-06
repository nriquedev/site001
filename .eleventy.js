//const { DateTime } = require("luxon");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
require("dotenv").config();

module.exports = eleventyConfig => {

    //export assets folder
    eleventyConfig.addPassthroughCopy("src/assets",{
        filter: [
            "!sass"
        ]
    });

    //Multiple config files.
    eleventyConfig.addPlugin(require('./config/custom-markdown-rules.js'));
    eleventyConfig.addPlugin(require('./config/custom-filters.js'));
    eleventyConfig.addPlugin(require('./config/custom-syntax-highlighting.js'));

    //Prefix to deploy to a subdir
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
        extensions: "html, css, png, jpeg"
    });
    
    console.log("env var: ", process.env.DEV_ENVIRONMENT);
    //Return
    return {
        pathPrefix: process.env.DEV_ENVIRONMENT === 'true' ? "" : "/site001/",
        dir: {
            input: 'src',
            output: '_site'
        }
    }
};