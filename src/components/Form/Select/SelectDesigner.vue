<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a select input</h1>

            <Row
                type="text"
                label="Default option"
                v-model="SELECT_DEFAULT"
                placeholder="ex: Please select..."
                id="selectDefault"></Row>

            <Row
                type="checkbox"
                label="Default option style"
                v-model="SELECT_DEFAULT_STYLE"
                :options="[{name: 'DISABLED', label: 'Disabled'}, {name: 'HIDDEN', label: 'Hidden'}]"></Row>

            <Row
                type="textarea"
                className="textarea-large"
                label="Labels, Values (1 / line, comma separated)"
                v-model="SELECT_LABELS"
                placeholder="ex: Button label, 0"
                id="valueLabels"></Row>

            <Row
                type="text"
                label="Field name"
                v-model="SELECT_NAME"
                placeholder="ex: SELECT_FIELD"
                id="selectName"></Row>
        </form>

        <DesignerDemo>
            <SelectList :options="getOptions" :name="SELECT_NAME"/>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Row from '@/components/Form/Row/Row';
  import SelectList from '@/components/Form/Select/SelectList';

  export default {
    name: 'SelectDesigner',
    components: {
      Row: Row,
      SelectList: SelectList,
      DesignerDemo: DesignerDemo,
    },
    data() {
      return {
        SELECT_LABELS: 'Option 1, 1\nOption 2, 2',
        SELECT_NAME: 'SELECT_FIELD',
        SELECT_DEFAULT: 'Please select...',
        SELECT_DEFAULT_STYLE: { DISABLED: true, HIDDEN: false },
      };
    },
    computed: {
      getOptions() {
        const labels = this.SELECT_LABELS.split('\n');
        const res = [];
        let i = 0;
        let tmp;
        let lbl;
        let val;
        let disabled;
        let hidden;

        if (typeof this.SELECT_DEFAULT !== 'undefined' && this.SELECT_DEFAULT !== '') {
          res.push({ value: '', label: this.SELECT_DEFAULT, disabled: this.SELECT_DEFAULT_STYLE.DISABLED, hidden: this.SELECT_DEFAULT_STYLE.HIDDEN });
        }

        for (i; i < labels.length; i += 1) {
          if (labels[i] !== '') {
            tmp = labels[i].split(',');
            lbl = tmp[0].trim();
            val = (tmp.length > 1 && tmp[1].trim() !== 'default') ? tmp[1].trim() : null;
            disabled = (tmp.length > 2 && tmp[2].trim() === 'disabled');
            hidden = ((tmp.length > 2 && tmp[2].trim() === 'hidden') || (tmp.length > 3 && tmp[3].trim() === 'hidden'));
            res.push({ value: val, label: lbl, disabled: disabled, hidden: hidden });
          }
        }

        if (!res.length) return [{ value: null, label: 'Empty' }];

        return res;
      },
    },
  };
</script>
