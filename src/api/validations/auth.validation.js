import {Joi} from 'express-validation';

const auth = {
  // POST /v1/auth/login
  login: {
    body: Joi.object({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
    }),
  },

  // POST /v1/auth/refresh
  refresh: {
    body: Joi.object({
      email: Joi.string()
        .email()
        .required(),
      refreshToken: Joi.string().required(),
    }),
  },
};

export default auth;