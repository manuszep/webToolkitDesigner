<template>
    <div>
        <label v-for="(data, index) in options" class="custom-control custom-checkbox">
            <input v-bind:checked="getValue(data.name)" :name="data.name" type="checkbox" :class="inputCls" @change="updateInput(data.name, $event.target.checked)" />
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">{{data.label}}</span>
        </label>
    </div>
</template>

<script>
  import Classnames from 'classnames';

  export default {
    name: 'Checkbox',
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: {
        required: false,
      },
      className: {
        type: String,
        required: false,
      },
      error: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      inputCls() {
        return Classnames('custom-control-input', { 'form-control-danger': this.hasError() });
      },
    },
    methods: {
      updateInput(key, val) {
        if (typeof this.value === 'undefined') return val;
        const newValue = JSON.parse(JSON.stringify(this.value)); // Clone data
        newValue[key] = val;
        this.$emit('input', newValue);

        return newValue;
      },
      hasError() {
        return (this.error || this.parentHasError());
      },
      parentHasError() {
        return (typeof this.$parent !== 'undefined' && typeof this.$parent.hasError !== 'undefined' && this.$parent.hasError());
      },
      getValue(name) {
        if (typeof this.value === 'undefined') return '';
        return (typeof this.value[name] !== 'undefined') ? this.value[name] : '';
      },
    },
  };
</script>
