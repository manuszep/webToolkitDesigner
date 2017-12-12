<template>
    <CustomTag :tag="getTag()" :href="getHref()" :class="getClass()">
        <slot></slot><svg v-if="hasArrow()" class="icon btn-icon" viewBox="0 0 16 16"><use xlink:href="/static/icons.svg#btn-arrow"></use></svg>
        <svg v-if="hasIcon()" class="icon btn-icon"><use :xlink:href="getIcon()"></use></svg>
    </CustomTag>
</template>

<script>
  import CustomTag from '@/components/CustomTag/CustomTag';
  import ClassNames from 'classnames';

  export default {
    name: 'Button',
    props: {
      button: {
        type: Boolean,
        required: false,
      },
      small: {
        type: Boolean,
        required: false,
      },
      large: {
        type: Boolean,
        required: false,
      },
      styling: {
        type: String,
        required: false,
      },
      arrow: {
        type: Boolean,
        required: false,
      },
      icon: {
        type: String,
        required: false,
      },
      split: {
        type: Boolean,
        required: false,
      },
    },
    components: {
      CustomTag,
    },
    data() {
      return {
      };
    },
    methods: {
      getTag() {
        return !this.button ? 'a' : 'button';
      },

      getHref() {
        if (this.button) return null;
        return (typeof this.href !== 'undefined') ? this.href : '#';
      },

      hasArrow() {
        return this.arrow && !this.hasIcon();
      },

      hasIcon() {
        return typeof this.icon !== 'undefined' && this.icon !== '';
      },

      getIcon() {
        if (!this.hasIcon()) return '';

        return `/static/icons.svg#${this.icon}`;
      },

      getClass() {
        return ClassNames('btn', {
          'btn-axa': this.styling === 'axa',
          'btn-sm': this.small,
          'btn-lg': this.large,
          'btn--warn': this.styling === 'warn',
          'btn-ghost': this.styling === 'ghost' || this.styling === 'ghost-neg',
          'btn-ghost-white': this.styling === 'ghost-neg',
          'btn--neg': this.styling === 'neg',
          'btn-split-icon': this.split,
        });
      },
    },
  };
</script>
