const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

const port = 3000;

app.use(express.json());
app.use(cors());

// Data for localhost run
// In-memory help center data
const helpCenterData = [
  {
    title: "Branches",
    description: "Abstract Branches lets you manage, version, and document your designs in one place."
  },
  {
    title: "Manage your account",
    description: "Configure your account settings, such as your email, profile details, and password."
  },
  {
    title: "Manage organizations, teams, and projects",
    description: "Use Abstract organizations, teams, and projects to organize your people and your work."
  },
  {
    title: "Manage billing",
    description: "Change subscriptions and payment details."
  },
  {
    title: "Authenticate to Abstract",
    description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning."
  },
  {
    title: "Abstract support",
    description: "Get in touch with a human."
  }
];

// to get all specific Data

app.get("/cards", (req, res) => {
  res.json(helpCenterData);
});




// connect MongoDB

const uri = "mongodb+srv://fahadhasan164:HHuozFJdkLhJpTEv@cluster0.fv7dr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Basic endpoint to check if the server is running

app.get("/ping", (req, res) => {
  res.send("Server is running");
});

// define routes
const cardRoutes = require("./routes/cardsRoute");
app.use("/cards", cardRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something went wrong");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
