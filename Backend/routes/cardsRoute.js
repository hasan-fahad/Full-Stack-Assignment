const express = require('express');

const router = express.Router();
const Card = require("../models/card");

// create a Card
router.post("/", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    console.error("Error creating card:", error); // Log the error
    res.status(500).json({ message: "Error creating card" });
  }
});

// get all cards

router.get("/", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (error) {
    res.status(500).send("Error getting cards ");
  }
});

// get a single card by title

router.get("/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.findOne({ title });
    if (!card) return res.status(404).send("Card not found");
    res.send(card);
  } catch (error) {
    res.status(500).send("Error getting card ");
  }
});


module.exports = router;