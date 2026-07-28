module.exports = function (eleventyConfig) {
  // eleventy-plugin-rss temporarily disabled: v3 plugin export is incompatible
  // with this project's CJS require() config under Eleventy 3. Revisit when
  // adding an RSS feed template — likely needs dynamic import() instead.

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addFilter("byEra", (films, era) => {
    return (films || []).filter((f) => f.era === era);
  });

  eleventyConfig.addFilter("findEra", (eras, slug) => {
    return (eras || []).find((e) => e.slug === slug) || {};
  });

  eleventyConfig.addFilter("slugify", (str) => {
    return String(str)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
