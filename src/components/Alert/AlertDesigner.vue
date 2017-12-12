<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make an alert</h1>

            <Row
                type="radio"
                label="My alert is"
                v-model="ALERT_TYPE"
                :options="[{value: 'corporate', label: 'Corporate'}, {value: 'content', label:'Content'}, {value: 'warning', label:'Warning'}]"></Row>

            <Row
                type="textarea"
                className="textarea-large"
                label="Write some poetry for the user"
                v-model="ALERT_TEXT"
                placeholder="Roses are red, violets are blue, this website uses cookies to provide you some goodies"
                id="text"></Row>

            <Row
                type="text"
                label="Add a link to that button"
                v-model="BTN_LINK"
                placeholder="https://www.axa.com"
                id="btnlink"></Row>
        </form>
        <DesignerDemo fullWidth>
            <Alert
                    :buttonText="BTN_TEXT"
                    :buttonLink="BTN_LINK"
                    :styling="ALERT_TYPE">{{ ALERT_TEXT }}</Alert>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Row from '@/components/Form/Row/Row';
  import Alert from '@/components/Alert/Alert';

  export default {
    name: 'AlertDesigner',
    components: {
      Row: Row,
      Alert: Alert,
      DesignerDemo: DesignerDemo,
    },
    data() {
      return {
        ALERT_TYPE: 'content',
        ALERT_TEXT: 'Roses are red, violets are blue, this website uses cookies to provide you some goodies',
        BTN_TEXT: 'I get it !',
        BTN_LINK: 'https://www.axa.com',
      };
    },
  };
</script>
