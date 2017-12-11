<template>
    <div class="page">
        <h1>Create element</h1>

        <TableOfContent :links="links" />
    </div>
</template>

<script>
  import TableOfContent from '@/components/TableOfContent/TableOfContent';

  export default {
    name: 'CreateElement',
    components: {
      TableOfContent,
    },
    data() {
      return {
        links: [
          { link: '/Alert', label: 'Alert' },
          { link: '/Button', label: 'Button' },
          { link: '/TableOfContent', label: 'Table of content' },
          { link: '/Form/Radio', label: 'Form Radio' },
        ],
      };
    },
  };
</script>

