<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a checkbox input</h1>

            <Row
                type="textarea"
                className="textarea-large"
                label="Labels, Name (1 / line, comma separated)"
                v-model="CHECK_LABELS"
                placeholder="ex: Check label, chk_lbl"
                id="valueLabels"></Row>
        </form>

        <DesignerDemo>
            <Checkbox :options="getOptions" />
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Row from '@/components/Form/Row/Row';
  import Checkbox from '@/components/Form/Checkbox/Checkbox';

  export default {
    name: 'CheckboxDesigner',
    components: {
      Row: Row,
      Checkbox: Checkbox,
      DesignerDemo: DesignerDemo,
    },
    data() {
      return {
        CHECK_LABELS: 'Check 1, chk1\nCheck 2, chk2',
      };
    },
    computed: {
      getOptions() {
        const labels = this.CHECK_LABELS.split('\n');
        const res = [];
        let i = 0;
        let tmp;
        let lbl;
        let name;

        for (i; i < labels.length; i += 1) {
          if (labels[i] !== '') {
            tmp = labels[i].split(',');
            lbl = tmp[0].trim();
            name = (tmp.length > 1) ? tmp[1].trim() : `chk${i}`;
            res.push({ name: name, label: lbl });
          }
        }

        if (!res.length) return [{ name: 'chk', label: 'Empty' }];

        return res;
      },
    },
  };
</script>
