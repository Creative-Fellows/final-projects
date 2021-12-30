/*
the file that we used to seed the db is seedwork
*/
var mongoose = require("mongoose");
var request = require("request");
const Story = require("./models/Story");
const dbconnection = require("./db/index");
const Author = require("./models/Author");
//dbconnection();
mongoose.connect("mongodb://localhost/hackernewsdb");
// In this file, build out a worker that will populate the database
// with the data you need from the HackerNews API

// Here is an example of getting the top 500 stories from the API
// and logging them to the console.
// You are not required to use this code (though you may).
//var topStoriesURL = "https://hacker-news.firebaseio.com/v0/beststories.json";
Author.deleteMany({}).then(() => {
  console.log("success");
});
Story.deleteMany({}).then(() => {
  console.log("success");
});
var topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json/";
var data = null;
var datas = null;
var authdatas = null;
var j;
var i;
var authors = [];
var autho = [];
var isJSONResponse = function (headers) {
  return headers["content-type"].includes("json");
};
var arr = [];
var id = [];
var getJSONFromHackerNews = function (url, callback) {
  request.get(url, function (err, response, body) {
    var aut = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error("Response did not contain JSON data."), null);
    } else {
      data = JSON.parse(body);
      for (i = 0; i < 10; i++) {
        id.push(data[i]);
      }

      console.log(id);
      callback(null, data);

      for (j = 0; j < 10; j++) {
        request.get(
          `https://hacker-news.firebaseio.com/v0/item/${id[j]}.json`,
          async (err, response, body) => {
            if (err) {
              callback(err, null);
            } else if (!isJSONResponse(response.headers)) {
              callback(new Error("Response did not contain JSON data."), null);
            } else {
              datas = JSON.parse(body);

              Story.insertMany(datas);

              authors.push(datas.by);

              console.log(authors);

              await Author.deleteMany({}).then(() => {
                console.log("success");
              });
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[0]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[1]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[2]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[3]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[4]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[5]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[6]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[7]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[8]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
              request.get(
                `https://hacker-news.firebaseio.com/v0/user/${authors[9]}.json`,
                async (err, response, body) => {
                  authdatas = JSON.parse(body);
                  await Author.insertMany(authdatas);
                }
              );
            }
          }
        );
      }
    }
  });
};

getJSONFromHackerNews(topStoriesURL, function (err, data, datas) {
  console.log(err, "err, expect to be null");
  console.log(data, "data, expect to be ids for top 500 stories");
});
