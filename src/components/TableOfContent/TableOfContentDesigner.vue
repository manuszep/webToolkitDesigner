<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a radio input</h1>

            <Row
                type="text"
                label="Title"
                v-model="TOC_TITLE"
                placeholder="ex: List of sections"
                id="tocTitle"></Row>

            <Row
                type="textarea"
                className="textarea-large"
                label="Label, link list (1 / line, comma separated)"
                v-model="LINKS"
                placeholder="ex: #link_value, Display label"
                id="links"></Row>
        </form>

        <DesignerDemo>
            <TableOfContent :links="getLinks" :title="TOC_TITLE"/>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Row from '@/components/Form/Row/Row';
  import TableOfContent from '@/components/TableOfContent/TableOfContent';

  export default {
    name: 'TableOfContentDesigner',
    components: {
      Row: Row,
      DesignerDemo: DesignerDemo,
      TableOfContent: TableOfContent,
    },
    data() {
      return {
        TOC_TITLE: 'List of sections',
        LINKS: 'This is the section 1, #section1\nThis is the second section, #section2',
      };
    },
    computed: {
      getLinks() {
        const links = this.LINKS.split('\n');
        const res = [];
        let i = 0;
        let tmp;
        let lnk;
        let lbl;

        for (i; i < links.length; i += 1) {
          tmp = links[i].split(',');
          lbl = tmp[0].trim();
          lnk = (tmp.length > 1) ? tmp[1].trim() : '#';

          if (lbl !== '') {
            res.push({ link: lnk, label: lbl });
          }
        }

        if (!res.length) return [{ link: '#', label: 'Empty' }];

        return res;
      },
    },
  };
</script>
