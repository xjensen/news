const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("mySort", function(collection) {
    let posts = [];
    collection.getAll().forEach( (item) => {
      if(item.data.tags[0] == 'news') {
        posts.push(item);
      }
    })
    return posts.sort(function(a, b) {
      return new Date(a.data.publishdate) - new Date(b.data.publishdate);
    }).reverse();
  });
  eleventyConfig.addPlugin(pluginRss);

  return {
    templateFormats: ["html", "md", "njk"],
    dir: {
      input: "posts",
      output: "_site",
    }
  };
};