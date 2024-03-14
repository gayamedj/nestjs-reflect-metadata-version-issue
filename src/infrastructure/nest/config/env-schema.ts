import * as Joi from "@hapi/joi";

const EnvValidationSchema = Joi.object({
    DATABASE_TYPE: Joi.required(),
    DATABASE_HOST: Joi.required(),
    DATABASE_PORT: Joi.number().required(),
    DATABASE_USER: Joi.required(),
    DATABASE_NAME: Joi.required(),
    DATABASE_PASSWORD: Joi.required(),
});

export default EnvValidationSchema;