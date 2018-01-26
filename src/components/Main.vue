<template>
  <div class="regi">
    <form @submit.prevent="onSubmit()">
      <vue-form-generator
        class="vfg"
        :schema="schema"
        :model="model"
        :options="formOptions"
      >
      </vue-form-generator>

      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import configService from '../plugins/configService';

export default {
  name: 'MainComponent',

  data() {
    return {
      config_name: '',
      api_url: '',
      schema: {},
      model: {},
      formOptions: {},
    };
  },

  created() {
    this.config_name = window.REGI_CONFIG_NAME;
    configService.initConfig(this.config_name)
      .then((config) => {
        console.log(config);
        Object.assign(this, config);
      });
  },

  watch: {
    'model.salutation': function(newVal) {
      if (newVal) console.log(newVal);
    }
  },

  methods: {
    onSubmit() {
      console.log(this.model);
    },
  },

};
</script>

<style lang="scss">
  @import "vue-form-generator/dist/vfg.css";

  .vfg {
    padding: 10px;

    fieldset {
      border: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid #ddd;
      border-top: none;
      margin: 20px 0;

      legend {
        margin-left: -1px;
        width: calc(100% + 2px);
        border: none;
        background-color: #adadad;
        padding: 8px 16px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-size: .8em;
        text-transform: uppercase;
        letter-spacing: .5px;
        line-height: 1.4;
        font-weight: 100;
        color: #fff;
      }
    }
    .form-group {
      padding: 10px 15px;
      margin-bottom: 0;

      label {
        display: block;
        margin-bottom: 5px;
      }
    }
    .form-control {
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
    .field-wrap {
      border-bottom: 1px solid #ccc;
    }
  }
</style>
