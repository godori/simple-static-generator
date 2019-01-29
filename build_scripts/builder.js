var fs = require("fs-extra");
var path = require("path");
var pageTemplate = require("./page_template");

// relative to package.json
var pagePath = "./pages";
var pagesMetaPath = "./pages_meta";
var copyFolders = ["./images", "./css", "./js"];
var outputPath = "./build";

console.log(pageTemplate.testPage());
