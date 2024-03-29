var express = require("express");
var router = express.Router();
const passport = require("passport");
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Food Compass" });
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate(
    // Which passport strategy is being used?
    "google",
    {
      // Requesting the user's profile and email
      scope: ["profile", "email"],
    }
  )
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

// API Request


module.exports = router;