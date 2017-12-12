<template>
    <div class="custom-select-group">
        <select v-bind:value="value" :name="name" :class="inputCls" @change="updateInput($event.target.value)">
            <option v-for="(data, index) in options" :value="data.value" :disabled="data.disabled" :hidden="data.hidden">{{data.label}}</option>
        </select>
    </div>
</template>

<script>
  import Classnames from 'classnames';

  export default {
    name: 'SelectList',
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
        return Classnames('custom-select', { 'form-control-danger': this.hasError() });
      },
    },
    methods: {
      updateInput(val) {
        this.$emit('input', val);
      },
      hasError() {
        return (this.error || this.parentHasError());
      },
      parentHasError() {
        return (typeof this.$parent !== 'undefined' && typeof this.$parent.hasError !== 'undefined' && this.$parent.hasError());
      },
    },
  };
</script>
