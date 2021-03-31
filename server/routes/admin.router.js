const AdminBro = require("admin-bro");
const express = require("express");
const argon2 = require("argon2");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const { buildAuthenticatedRouter } = require("@admin-bro/express");
const { company } = require("../models/adminSchema");

const auth = {
  cookieName: "eapay-nigeria",
  cokiePassword:
    "dancinginmoodlikenothingwithmesoilaughttogtherwithyounoremembertakebackto2002",
  authenticate: async (email, password) => {
    const companyUser = await company.findOne({ email });

    if (company && argon2.verify(company.encryptedPassword, password)) {
      return companyUser.toJson();
    }
    return null;
  },
};

const sessionsOptions = () => session({
  secret: "hello",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
});

/**
 *
 * @param {AdminBro} admin
 * @returns {express.Router} router
 */

const buildAdminRouter = (admin) => {
  const router = buildAuthenticatedRouter(admin, auth, null, session({ secret: 'hi', resave: false, saveUninitialized: true}));
  return router;
};

module.exports = buildAdminRouter;
