<template>
    <div class="custom-radio1-wrapper">
        <label v-for="(data, index) in options" :class="cls">
            <input :name="name" type="radio" class="custom-control-input" :value="data.value" @change="updateInput" v-model="CHK">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">{{data.label}}</span>
        </label>
    </div>
</template>

<script>
  export default {
    name: 'Btn',
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: {
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      minimal: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        CHK: this.value,
      };
    },
    computed: {
      cls() {
        const custom = (this.minimal === '1') ? 'radio2' : 'radio1';
        return `custom-control custom-radio ${custom}`;
      },
    },
    methods: {
      updateInput(event) {
        this.$emit('input', event.target.value);
      },
    },
  };
</script>
