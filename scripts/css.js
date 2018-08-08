var sass = require("sass");
var Fiber = require("fibers");

sass.render({
  file: "input.scss",
  importer: function (url, prev, done) {
    // ...
  },
  fiber: Fiber,
  outFile: yourPathTotheFile,
}, function (err, result) {
  // ...
});