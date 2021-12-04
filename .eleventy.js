
module.exports = function(eleventyConfig) {

    return {
      dir: {
        input: "src",
        output: "dist",
        includes: "_includes"
      },
      templateFormats: [
        // Templates:
        "html",
        "njk",
        "md",
        // Static Assets:
        "css",
        "jpeg",
        "jpg",
        "png",
        "svg",
        "woff",
        "woff2"
      ],
      passthroughFileCopy: true
    }
  };