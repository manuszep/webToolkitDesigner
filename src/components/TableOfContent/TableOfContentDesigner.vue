<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a radio input</h1>

            <div class="form-group" >
                <label for="tocTitle">Title</label>
                <input v-model="TOC_TITLE" type="text" id="tocTitle" placeholder="ex: List of sections" class="form-control" />
            </div>

            <div class="form-group" role="group">
                <label>Label, link list (1 / line, comma separated)</label>
                <textarea v-model="LINKS" class="form-control" placeholder="ex: #link_value, Display label"></textarea>
            </div>
        </form>

        <DesignerDemo>
            <TableOfContent :links="getLinks" :title="TOC_TITLE"/>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import TableOfContent from '@/components/TableOfContent/TableOfContent';

  export default {
    name: 'TableOfContentDesigner',
    components: {
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
