const mongoose = require("mongoose");
const request = require("request");
const Story = require("./models/Story");
const Author = require("./models/Author");
mongoose.connect("mongodb://localhost/hackernewsdb");

Author.deleteMany({}).then(() => {
  console.log("success");
});
Story.deleteMany({}).then(() => {
  console.log("success");
});

var topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json/";
var data = null;
var datas = null;
var datass = null;
var datasss = null;
var i = 0;
var j = 0;
var k = 0;
var authors = [];

var idcomment = [];
var idcomments = [];
//var topStoriesinfo = `https://hacker-news.firebaseio.com/v0/item/${id[i]}.json`;
var headerres = (headers) => {
  return headers["content-type"].includes("json");
};

var topStories = function (url, callback) {
  request.get(url, function (err, response, body) {
    if (err) {
      callback(err, null);
    } else if (!headerres(response.headers)) {
      callback(new Error("Response did not contain JSON data."), null);
    } else {
      data = JSON.parse(body);
      callback(null, data);
    }
  });
};

var storiesinfo = (callback) => {
  for (i = 0; i < 10; i++)
    request.get(
      `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`,
      function (err, response, body) {
        if (err) {
          callback(err, null);
        } else if (!headerres(response.headers)) {
          callback(new Error("Response did not contain JSON data."), null);
        } else {
          datas = JSON.parse(body);
          authors.push(datas.by);
          idcomment.push(datas.kids);
          callback(null, datas);
        }
      }
    );
};

var authinfo = (callback) => {
  for (j = 0; j < 10; j++) {
    request.get(
      `https://hacker-news.firebaseio.com/v0/user/${authors[j]}.json`,
      function (err, response, body) {
        if (err) {
          callback(err, null);
        } else if (!headerres(response.headers)) {
          callback(new Error("Response did not contain JSON data."), null);
        } else {
          datass = JSON.parse(body);

          callback(null, datass);
        }
      }
    );
  }
};

var commentinfo = (callback) => {
  for (k = 0; k < idcomments.length; k++) {
    request.get(
      `https://hacker-news.firebaseio.com/v0/item/${idcomments[k]}.json`,
      function (err, response, body) {
        if (err) {
          callback(err, null);
        } else if (!headerres(response.headers)) {
          callback(new Error("Response did not contain JSON data."), null);
        } else {
          datasss = JSON.parse(body);

          callback(null, datasss);
        }
      }
    );
  }
};

topStories(topStoriesURL, (err, data) => {
  //   console.log(data);
});

setTimeout(() => {
  storiesinfo((err, datas) => {
    // console.log(datas);
    Story.insertMany(datas);
    // console.log(authors);
    // console.log(idcomment);
    idcomments = [].concat(...idcomment);
    // console.log(idcomments);
  });
}, 2000);

setTimeout(() => {
  authinfo((err, datass) => {
    Author.insertMany(datass);
    // console.log(datass);
  });
}, 3000);

setTimeout(() => {
  commentinfo((err, datass) => {
    // console.log(datasss);
  });
}, 4000);