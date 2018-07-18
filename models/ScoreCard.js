var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ScoreCardSchema = new Schema({
  fighterName: {
    type    : String,
    required: true
  },
  fighterScoreArray: {
    fighterScore: [Number]
  },
  opponentName: {
      type    : String,
      required: true
  },
  opponentNameScoreArray: {
    opponentScore: [Number]
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("ScoreCard", ScoreCardSchema);

// Export the Article model
module.exports = Article;
