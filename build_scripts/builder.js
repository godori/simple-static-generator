var fs = require("fs-extra");
var path = require("path");
var pageTemplate = require("./page_template");

// relative to package.json
var pagePath = "./pages";
var pagesMetaPath = "./pages_meta";
// var copyFolders = ["./images", "./css", "./js"];
var outputPath = "./build";

console.log(pageTemplate.testPage());

// * clean build directory
try {
  for (var file of fs.readdirSync(outputPath)) {
    fs.removeSync(path.join(outputPath, file));
  }
} catch (err) {
  console.log("error during cleanup:" + err);
  process.exit(1);
}

var pages = {},
  pagesMeta = {};

console.log("Loading pages...");

try {
  for (var page of fs.readdirSync(pagePath)) {
    pages[page] = fs.readFileSync(path.join(pagesPath, page), "utf8");
  }
} catch (err) {
  console.log("Error during page loading: " + err);
  process.exit(1);
}

console.log("Loading pages metadata...");

try {
  for (var pageMata of fs.readdirSync(pagesMetaPath)) {
    pagesMeta[pageMeta] = fs.readdirSync(
      path.join(pagesMetaPath, pageMeta),
      "utf8"
    );
  }
} catch (err) {
  console.log("Error during metadata loading: " + err);
  process.exit(1);
}

console.log("Generating pages...");
try {
  for (var page of Object.entries(pages)) {
    console.log(page);
    var pageName = page[0].slice(0, page[0].lastIndexOf(".")); // remove extension from file name
    var metadata = pagesMeta.hasOwnProperty(pageName + ".json");
  }
} catch (err) {
  console.log("Error during page generation: " + err);
}
