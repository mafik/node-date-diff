
// Generating format and calculation function
var date_diff = require('node-date-diff');

var format_diff = date_diff.gen(date_diff.formats.english);

// Writing the diff to console.
console.log(format_diff(new Date(),new Date(2011, 9, 18)));
