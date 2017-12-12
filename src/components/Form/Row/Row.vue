<template>
    <div :class="groupCls" role="group">
        <label :for="id">{{label}}</label>
        <div v-if="type === 'radio'">
            <Radio v-bind:value="value" :options="options" :name="name" @input="updateInput($event)"/>
        </div>
        <div v-else-if="type === 'checkbox'">
            <Checkbox v-bind:value="value" :options="options" :name="name" @input="updateInput($event)"/>
        </div>
        <div v-else-if="type === 'select'">
            <SelectList v-bind:value="value" :options="options" :name="name" @input="updateInput($event)"/>
        </div>
        <div v-else-if="type === 'textarea'">
            <textarea v-bind:value="value" :class="inputCls" :placeholder="placeholder" :id="id" @keyup="updateInput($event.target.value)"></textarea>
        </div>
        <div v-else>
            <input v-bind:value="value" :class="inputCls" :placeholder="placeholder" :id="id" :type="type" @keyup="updateInput($event.target.value)" />
        </div>
        <div v-if="hasError()" class="form-control-feedback">{{error}}</div>
    </div>
</template>

<script>
  import Classnames from 'classnames';
  import Radio from '@/components/Form/Radio/Radio';
  import Checkbox from '@/components/Form/Checkbox/Checkbox';
  import SelectList from '@/components/Form/Select/SelectList';

  export default {
    name: 'Row',
    components: {
      Radio: Radio,
      Checkbox: Checkbox,
      SelectList: SelectList,
    },
    props: {
      label: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      options: {
        type: Array,
        required: false,
      },
      type: {
        type: String,
        required: true,
      },
      error: {
        type: String,
        required: false,
      },
      className: {
        type: String,
        required: false,
      },
      value: {
        required: false,
      },
    },
    data() {
      return {
        INPUT_DATA: this.value,
      };
    },
    computed: {
      groupCls() {
        return Classnames('form-group', { 'has-danger': this.hasError() });
      },
      inputCls() {
        return Classnames('form-control', this.className, { 'form-control-danger': this.hasError() });
      },
    },
    methods: {
      hasError() {
        return (typeof this.error !== 'undefined' && this.error !== '');
      },
      updateInput(val) {
        this.$emit('input', val);
      },
    },
  };
</script>
