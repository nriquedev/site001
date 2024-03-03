const { DateTime } = require("luxon");

module.exports = eleventyConfig => {
    //Date filters
    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });
}

