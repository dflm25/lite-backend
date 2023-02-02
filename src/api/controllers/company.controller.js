import knex from '../database';

export const index = async (req, res, next) => {
    try {
      const companies = await knex('companies');

      if (companies) {
        res.status(200).json(companies);
      }

      res.status(400).send({ message: "Invalid Credentials", type: "error" });
    } catch (error) {
      return next(error);
    }
}
