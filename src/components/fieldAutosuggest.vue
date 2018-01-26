<template>
  <div>
    <input
      class="form-control"
      type="text"
      v-model="value"
      :disabled="disabled"
      :maxlength="schema.max"
      :placeholder="schema.placeholder"
      :readonly="schema.readonly"
      @input="onInput()"
    >
    <div class="vfg-regi-suggestions" v-for="(item, i) in suggestions" :key="i" v-if="show">
      <div @click="onSelectSuggestion(item._source.postalCode)">{{item._source.postalCode}}</div>
    </div>
  </div>
</template>

<script>
  import { abstractField } from 'vue-form-generator';
  import axios from 'axios';

  export default {
    mixins: [ abstractField ],

    data() {
      return {
        suggestions: [],
        show: false,
      }
    },

    methods: {
      onInput() {
        if (this.value) {
          axios.get(`http://elastic.dev.dimedis.de/regina/postalcode/_search?q=postalCode:${this.value}*`)
            .then((data) => {
              if (data.status !== 200) throw new Error('Postal-code service error');
              if (this.value) {
                this.show = true;
                this.suggestions = data.data.hits.hits;
              }
            }).catch(err => {
              return err;
            });
        }
      },

      onSelectSuggestion(val) {
        this.value = val;
        this.show = false;
      },
    },
  };
</script>

