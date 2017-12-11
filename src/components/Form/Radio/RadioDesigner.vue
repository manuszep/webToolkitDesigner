<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a radio input</h1>

            <div class="form-group" role="group">
                <label>Labels, Values (1 / line, comma separated)</label>
                <textarea v-model="RADIO_LABELS" class="form-control" placeholder="ex: Button label, 0"></textarea>
            </div>

            <div class="form-group" >
                <label for="radioName">Field name</label>
                <input v-model="RADIO_NAME" type="text" id="radioName" placeholder="ex: FLD_RADIO" class="form-control" />
            </div>

            <div class="form-group" role="group">
                <label>Style</label>
                <Radio v-model="RADIO_STYLE" :options="[{value: '0', label: 'Normal'}, {value: '1', label:'Minimal'}]"/>
            </div>
        </form>

        <DesignerDemo>
            <Radio :options="getOptions" :name="RADIO_NAME" :minimal="RADIO_STYLE"/>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Radio from '@/components/Form/Radio/Radio';

  export default {
    name: 'RadioDesigner',
    components: {
      DesignerDemo: DesignerDemo,
      Radio: Radio,
    },
    data() {
      return {
        RADIO_LABELS: 'Option 1, 1\nOption 2, 2',
        RADIO_NAME: 'OPTION_FIELD',
        RADIO_STYLE: '0',
      };
    },
    computed: {
      getOptions() {
        const labels = this.RADIO_LABELS.split('\n');
        const res = [];
        let i = 0;
        let tmp;
        let lbl;
        let val;

        for (i; i < labels.length; i += 1) {
          if (labels[i] !== '') {
            tmp = labels[i].split(',');
            lbl = tmp[0].trim();
            val = (tmp.length > 1) ? tmp[1].trim() : '';
            res.push({ value: val, label: lbl });
          }
        }

        if (!res.length) return [{ value: '', label: 'Empty' }];

        return res;
      },
    },
  };
</script>
