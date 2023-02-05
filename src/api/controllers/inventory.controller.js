import knex from "../database";
import { getInventoryPDF } from "../utilities/pdf";

export const index = async (req, res, next) => {
  const { action } = req.query;

  try {
    let inventories;

    if (action === "getPdf") {
      const data = await knex("inventories");
      getInventoryPDF(data);
      res.status(200).json("ok");
    } else {
      inventories = await knex("inventories").paginate({
        perPage: 10,
        currentPage: 0,
      });
    }

    res.status(200).json(inventories);
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  const data = req.body;

  try {
    await knex("inventories").insert(data);
    res.status(200).json("inventory saved successfully");
  } catch (error) {
    return next(error);
  }
};

export const edit = async (req, res, next) => {
  const { id } = req.params;
  try {
    const inventory = await knex("inventories").where("id", id).first();
    res.status(200).json(inventory);
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    await knex("inventories").where("id", id).update(data);
    res.status(200).json("inventory updated successfully");
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    await knex("inventories").where("id", id).del();
    res.status(200).json("inventory removed succesfully");
  } catch (error) {
    return next(error);
  }
};
