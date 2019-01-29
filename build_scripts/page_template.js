var md = require("markdown-it")();

module.exports = {
  testPage: function() {
    var result = md.render("# godori markdown test");
    return `<!DOCTYPE html>
    <head>This is Head</head>
    <body>
        ${result}
    </body>
    </html>`;
  },
  generatePage: function() {}
};
