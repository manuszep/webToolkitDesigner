<template>
    <div class="table-of-contents">
        <div v-if="title" class="table-of-contents__heading">{{title}}</div>
        <nav class="table-of-contents__nav">
            <ul class="table-of-contents__menu">
                <li v-for="(data, index) in links" class="table-of-contents__item">
                    <a :href="data.link" class="table-of-contents__link">{{data.label}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'TableOfContent',
    props: {
      title: {
        type: String,
        required: false,
      },
      links: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
      };
    },
  };
</script>
