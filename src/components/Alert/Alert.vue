<template>
    <div :class="getClass()" role="alert">
        <div class="top-content-bar-message">
            <slot></slot>
        </div>
        <a v-if="buttonText" :href="buttonLink" class="btn btn-ghost btn-ghost-white top-content-bar-btn">
            {{buttonText}}
        </a>
    </div>
</template>

<script>
  import ClassNames from 'classnames';

  export default {
    name: 'Alert',
    props: {
      buttonText: {
        type: String,
        required: false,
      },
      buttonLink: {
        type: String,
        required: false,
      },
      styling: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
      };
    },
    methods: {
      getClass() {
        return ClassNames('alert top-content-bar', {
          'top-content-bar--corporate': typeof this.styling === 'undefined' || this.styleing === '' || this.styling === 'corporate',
          'top-content-bar--content': this.styling === 'content',
          'top-content-bar--warning': this.styling === 'warning',
        });
      },
    },
  };
</script>
