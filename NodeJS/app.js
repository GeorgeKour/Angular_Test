var first_name = "George";
/* console.log("🚀 ~ file: app.js ~ line 2 ~ first_name", first_name); */

var sayFirstName = function (name) {
  console.log("🚀 ~ file: app.js ~ line 5 ~ sayFirstName ~ name", name);
};

/* sayFirstName(first_name); */

var object1 = {
  name: "Nick",
  age: 54,
};

/* sayFirstName(object1.name); */

// file system
var fs = require('fs');

fs.writeFile('./text.txt','How are you?',function(err){
if (err){
    console.log("Error");
}
});

fs.readFile('./text.txt', function (err, data) {
  if (!err) {
    console.log("🚀 ~ file: app.js ~ line 20 ~ fs.readFile ~ data", data.toString());
  }
});
