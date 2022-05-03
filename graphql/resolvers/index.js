"use strict";

const { user } = require("../../models");

const Query = {
  getUsers: async (root) => {
    return await user.findAll();
  },
  getUser: async (root, { id }) => {
    return await user.findByPk(id);
  },
};

const Mutation = {
  createUser: async (root, { name, email, contact_number }) => {
    return await user.create({ name, email, contact_number });
  },

  updateUser: async (root, { id, name, email, contact_number }) => {
    const updatedUserData = await user.update(
      { name, email, contact_number },
      { where: { id } }
    );
    let message = "";
    if (updatedUserData) message = "User updated successfully";
    else message = "Cannot find the user.";
    return message;
  },

  deleteUser: async (root, { id }) => {
    const deletedData = await user.destroy({ where: { id } });
    let message = "";
    if (deletedData) message = "User deleted successfully";
    else message = "Cannot find the user.";
    return message;
  },
};

module.exports = { Query, Mutation };
