import axios from 'axios';
import { validators } from 'vue-form-generator';

export default {
  initConfig,
};

function initConfig(confName) {
  return loadConfig(confName)
  .then(parseConfig)
  .catch((err) => {
    console.log('Error loading Config: ', err);
  });
}

function loadConfig(configName) {
  return axios.get(`http://127.0.0.1:7000/${configName}.json`)
    .then(res => res.data);
}

function parseConfig({ meta, schema, model }) {
  if (!meta) throw new Error('config.meta not found');
  if (!schema) throw new Error('config.schema not found');
  if (!model) throw new Error('config.model not found');
  const parsedSchema = schema;

  if (schema.groups) {
    parsedSchema.groups.forEach((group, i) => {
      group.fields.forEach((field, j) => {
        parsedSchema.groups[i].fields[j] = decorateField(field);
      });
    });
  } else if (schema.fields) {
    parsedSchema.fields = schema.fields.map(decorateField);
  }

  return {
    meta,
    schema: parsedSchema,
    model,
    formOptions: {
      validateAfterLoad: false,
      validateAfterChanged: true,
    },
  };
}

function decorateField(field) {
  const fieldWithValidator = field;
  if (field.validator) {
    const validator = validators[field.validator];
    fieldWithValidator.validator = validator;
  }
  return fieldWithValidator;
}
