<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make an alert</h1>

            <div class="form-group" role="group">
                <label>My alert is</label>
                <div class="custom-radio1-wrapper">
                    <label class="custom-control custom-radio radio1">
                        <input v-model="ALERT_TYPE" type="radio" class="custom-control-input" value="corporate">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Corporate</span>
                    </label>
                    <label class="custom-control custom-radio radio1">
                        <input v-model="ALERT_TYPE" type="radio" class="custom-control-input" value="content">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Content</span>
                    </label>
                    <label class="custom-control custom-radio radio1">
                        <input v-model="ALERT_TYPE" type="radio" class="custom-control-input" value="warning">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Warning</span>
                    </label>
                </div>
            </div>

            <div class="form-group" >
                <label for="text" >Write some poetry for the user</label>
                <textarea v-model="ALERT_TEXT" id="text" placeholder="Roses are red, violets are blue, this website uses cookies to provide you some goodies" class="form-control"></textarea>
            </div>

            <div class="form-group" >
                <label for="btntext" >Add a button with this label</label>
                <input v-model="BTN_TEXT" type="text" id="btntext" placeholder="I get it !" class="form-control" />
            </div>

            <div class="form-group" >
                <label for="btnlink" >Add a link to that button</label>
                <input v-model="BTN_LINK" type="text" id="btnlink" placeholder="https://www.axa.com" class="form-control" />
            </div>
        </form>
        <DesignerDemo>
            <Alert
                    :buttonText="BTN_TEXT"
                    :buttonLink="BTN_LINK"
                    :styling="ALERT_TYPE">{{ ALERT_TEXT }}</Alert>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Alert from '@/components/Alert/Alert';

  export default {
    name: 'AlertDesigner',
    components: {
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
