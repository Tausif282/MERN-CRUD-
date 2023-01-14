const moongose = require("mongoose");

const FoodSchema = new moongose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  daySinceIAte: {
    type: Number,
    required: true,
  },
});

const Food = moongose.model("Food", FoodSchema);

module.exports = Food;
