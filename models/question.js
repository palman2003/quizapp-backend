const mongoose = require("mongoose");

// Use the existing collection name "questions"
const Question = mongoose.model("question", {}, "questions");

// Example query to fetch all documents from the "questions" collection
Question.find({}, (err, questions) => {
  if (err) {
    console.error("Error fetching questions:", err);
  } else {
    let question=[questions]
  }
});

module.exports=Question