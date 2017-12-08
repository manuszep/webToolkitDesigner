<template>
    <div class="designer-demo">
        <div :class="designerClass" ref="demoWrapper">
            <slot></slot>
        </div>

        <div class="designer-demo__code">
            <code>{{markup}}</code><a class="designer-demo__copy" href="#" v-on:click="copyClipboard"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/static/icons.svg#clipboard"></use></svg></a>
        </div>
    </div>
</template>

<script>
  import ClassNames from 'classnames';
  import Pretty from 'pretty';

  export default {
    name: 'HelloWorld',
    props: {
      neg: {
        type: Boolean,
        required: false,
      },
    },
    data() {
      return {
        markup: null,
      };
    },
    computed: {
      designerClass() {
        return ClassNames('designer-demo__element', {
          'designer-demo__element--neg': this.neg,
        });
      },
    },
    methods: {
      copyClipboard() {
        const textArea = document.createElement('textarea');
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.opacity = 0;
        textArea.value = this.markup;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          /**/
        }
        document.body.removeChild(textArea);
      },
    },
    updated() {
      this.$nextTick(() => {
        if (typeof this.$refs.demoWrapper === 'undefined') return;
        const target = this.$refs.demoWrapper;
        this.markup = Pretty(target.innerHTML.replace(/<!---->/g, ''), { unformatted: ['code', 'pre', 'em', 'strong'] });
      });
    },
    mounted() {
      this.$nextTick(() => {
        if (typeof this.$refs.demoWrapper === 'undefined') return;
        const target = this.$refs.demoWrapper;
        this.markup = Pretty(target.innerHTML.replace(/<!---->/g, ''), { unformatted: ['code', 'pre', 'em', 'strong'] });
      });
    },
  };
</script>

<style lang="scss">
    @import 'DesignerDemo.scss';
</style>
