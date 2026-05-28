const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src");

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://adelle.ink",
    },
  });

  return {
    dir: {
      output: "docs"
    }
  }
};
