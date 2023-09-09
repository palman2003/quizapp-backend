const mongoose = require("mongoose");

// Use the existing collection name "questions"
const Question = mongoose.model("question", {}, "questions");

const fetchQuestions = () => {
  return Question.find({}).exec()
    .then(questions => questions) // Assuming you want to wrap questions in an array
    .catch(err => {
      console.error("Error fetching questions:", err);
      throw err; // Re-throw the error so it can be caught further up the call stack if needed
    });
};

module.exports = fetchQuestions;
