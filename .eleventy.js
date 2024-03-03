const { DateTime } = require("luxon");

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

    //Add path prefix for gh-pages site ---> site001


    //Return
    return {
        dir: {
            input: 'src',
            output: '_site'
        },
        pathPrefix: "/site001/"
    }
};