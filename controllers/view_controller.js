const User = require("../models/User");
const Post = require("../models/Post");
const { fn, col } = require("sequelize");
const sequelize = require('sequelize');

module.exports = {
  async attachUser(req, res, next) {
    const user = await User.findByPk(req.session.user_id);

    req.user = user && user.get({ plain: true });

    next();
  },

  async goToHomepage(req, res) {
    res.render("home", {
      title: "Student Link",
      home: true,
      user: req.user,
    });
  },

  async registerForm(req, res) {
    res.render("forms/register_form", {
      title: "Register",
      register: true,
    });
  },

  async loginForm(req, res) {
    res.render("forms/login_form", {
      title: "Login",
      login: true,
    });
  },

  async goToDashboard(req, res) {
    const users = await User.findAll();
    const posts = await Post.findAll({
      include: User,
      attributes: [
        "title",
        "subject",
        "subject_level",
        "post_text",
        "meeting_info",
        [sequelize.col('User.username'), 'username']
        // [fn("date_format", col("createdAt"), "%m%d%Y"), "formatted_date"],
      ],
    });
    res.render("forms/allPosts", {
      title: "Dashboard",
      users: users.map((userObj) => userObj.get({ plain: true })),
      posts: posts.map((postObj) => postObj.get({ plain: true })),
    });
  },

  async postForm(req, res) {
    res.render("forms/postform", {
      title: "Create a Post",
    });
  },

  async usersPosts(req, res) {
    const user = await User.findByPk(req.session.user_id, {
      include: {
        model: Post,
        attributes: [
          "id",
          "subject",
          "subjet_level",
          "topic",
          "post_text",
          [
            fn("date-format", col("release_date"), "%m/%d/%Y"),
            "formatted_date",
          ],
        ],
      },
    });

    res.render("userdata", {
      user: user.get({ plain: true }),
    });
  },

  async logOut(req, res) {
    // Clear the user ID from the session to log them out
    req.session.destroy();
    res.redirect("/");
  },
};
