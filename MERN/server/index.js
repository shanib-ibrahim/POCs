const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Food = require("./models/food");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URL;

async function main() {
  await mongoose.connect(mongoDB);
  console.log("Database Connection established");
}
main().catch((err) => console.log(err));

//Create Food
app.post("/", async (req, res) => {
  const foodName = req.body.foodName;
  const daysSinceEaten = req.body.daysSinceEaten;

  const newFood = new Food({ foodName, daysSinceEaten });
  try {
    await newFood.save();
    res.send("Food saved successfully");
  } catch (error) {
    console.log(error);
  }
});

//Read Food
app.get("/display", async (req, res) => {
  Food.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

//update food
app.put("/update/:id", async (req, res) => {
  const foodName = req.body.newFoodName;
  const id = req.params.id;
  try {
    const update = await Food.findById(id);
    if (!update) {
      return res.status(404).send("Food not found");
    }

    update.foodName = foodName;
    await update.save();
    res.send("Updated");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

//Delete Food
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  Food.findByIdAndDelete(id).exec();
  res.send("Deleted");
});

app.listen(9000, () => {
  console.log("Server running on port 9000");
});
