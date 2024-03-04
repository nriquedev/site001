//const { DateTime } = require("luxon");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

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

    //Prefix to deplay to a subdir
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    //Return
    return {
        pathPrefix: "/site001/",
        dir: {
            input: 'src',
            output: '_site'
        }
    }
};