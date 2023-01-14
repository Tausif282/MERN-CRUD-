const express = require("express");
const mongoose = require("mongoose");
const FoodModel = require("./models/Food");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(
  "mongodb+srv://user:hamza123@crud.wbyczd6.mongodb.net/food?retryWrites=true&w=majority"
);

app.post("/insertdata", async (req, res) => {
  const user = req.body;
  const newUser = new FoodModel(user);
  await newUser.save();
  res.json(user);
});
app.put("/update", async (req, res) => {
  const newFoodName = req.body.newFoodName;
  const id = req.body.id;
  try {
    FoodModel.findById(id, (err, updatedFood) => {
      updatedFood.foodName = newFoodName;
      updatedFood.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/getdata", async (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await FoodModel.findByIdAndRemove(id);
  res.send(id);
});

app.listen(3001, () => {
  console.log("Server is running in Port 3000.....");
});
