import knex from "../database";

export const index = async (req, res, next) => {
  const { action } = req.query;

  try {
    let companies;

    if (action === "getAll") {
      companies = await knex("companies");
    } else {
      companies = await knex("companies").paginate({
        perPage: 10,
        currentPage: 0,
      });
    }

    res.status(200).json(companies);
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  const data = req.body;

  try {
    await knex("companies").insert(data);
    res.status(200).json("Company saved successfully");
  } catch (error) {
    return next(error);
  }
};

export const edit = async (req, res, next) => {
  const { id } = req.params;
  try {
    const company = await knex("companies").where("nit", id).first();
    res.status(200).json(company);
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    await knex("companies").where("nit", id).update(data);
    res.status(200).json("Company updated successfully");
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    await knex("companies").where("nit", id).del();
    res.status(200).json("Company removed succesfully");
  } catch (error) {
    return next(error);
  }
};
