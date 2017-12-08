<script>
  export default {
    name: 'CustomTag',
    props: {
      tag: {
        type: String,
        required: true,
      },
    },
    render(createElement) {
      return createElement(
        this.tag,   // tag name
        this.$slots.default, // array of children
      );
    },
  };
</script>

