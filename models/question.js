const mongoose = require("mongoose");

// Use the existing collection name "questions"
const Question = mongoose.model("question", {}, "questions");

const fetchQuestions = (callback) => {
  Question.find({}, (err, questions) => {
    if (err) {
      console.error("Error fetching questions:", err);
      callback(err, null);
    } else {
      let question = questions;
      callback(null, question);
    }
  });
};

module.exports = fetchQuestions;
