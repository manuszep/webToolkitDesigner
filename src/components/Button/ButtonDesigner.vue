<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a button</h1>

            <Row
                type="radio"
                label="My button is"
                v-model="BTN_TYPE"
                :options="[{value: '', label: 'A link'}, {value: 'button', label:'An actual button'}]"></Row>

            <Row
                type="radio"
                label="I want my button to be"
                v-model="BTN_SIZE"
                :options="[{value: 'small', label: 'Small'}, {value: '', label: 'Medium'}, {value: 'large', label: 'Large'}]"></Row>

            <Row
                type="radio"
                label="Which style ?"
                v-model="BTN_STYLE"
                :options="[{value: 'axa', label: 'Default'}, {value: 'ghost', label: 'Ghost'}, {value: 'ghost-neg', label: 'Ghost negative'}]"></Row>

            <Row
                type="checkbox"
                label="How nice would it be to add an icon ?"
                v-model="BTN_ICON_GROUP"
                :options="[{name: 'BTN_ARROW', label: 'That would be awesome !'}, {name: 'BTN_SPLIT', label: 'Make it stand out'}]"></Row>

            <Row
                type="select"
                label="I want something special..."
                v-model="BTN_ICON"
                :options="[
                    {value: '', label: 'Choose wisely...'},
                    {value: 'add', label: 'add'},
                    {value: 'arrow-bottom', label: 'arrow-bottom'},
                    {value: 'arrow-left', label: 'arrow-left'},
                    {value: 'arrow-right', label: 'arrow-right'},
                    {value: 'arrow-top', label: 'arrow-top'},
                    {value: 'btn-arrow', label: 'btn-arrow'},
                    {value: 'burger', label: 'burger'},
                    {value: 'calendar', label: 'calendar'},
                    {value: 'check-circle', label: 'check-circle'},
                    {value: 'checkmark', label: 'checkmark'},
                    {value: 'circle-outline', label: 'circle-outline'},
                    {value: 'circle', label: 'circle'},
                    {value: 'clipboard', label: 'clipboard'},
                    {value: 'close', label: 'close'},
                    {value: 'desktop', label: 'desktop'},
                    {value: 'download', label: 'download'},
                    {value: 'dropdown', label: 'dropdown'},
                    {value: 'facebook', label: 'facebook'},
                    {value: 'feedback', label: 'feedback'},
                    {value: 'google-plus', label: 'google-plus'},
                    {value: 'home', label: 'home'},
                    {value: 'info', label: 'info'},
                    {value: 'linked-in', label: 'linked-in'},
                    {value: 'mobile', label: 'mobile'},
                    {value: 'modal-close', label: 'modal-close'},
                    {value: 'process-checkmark', label: 'process-checkmark'},
                    {value: 'remove', label: 'remove'},
                    {value: 'search', label: 'search'},
                    {value: 'source', label: 'source'},
                    {value: 'switch', label: 'switch'},
                    {value: 'tablet', label: 'tablet'},
                    {value: 'twitter', label: 'twitter'},
                    {value: 'upload', label: 'upload'},
                    {value: 'youtube', label: 'youtube'}]"></Row>

            <Row
                type="text"
                label="Add a nice injunction for the stubborn user"
                v-model="BTN_TEXT"
                placeholder="e.g. Buy now !"
                id="text"></Row>

            <template v-if="!isButton">
                <Row
                    type="text"
                    label="And bring him to that URL"
                    v-model="BTN_HREF"
                    placeholder="e.g. https://www.axa.com"
                    id="url"></Row>
            </template>
        </form>

        <DesignerDemo :neg="isNeg">
            <Btn
                    :button="isButton"
                    :large="isLarge"
                    :small="isSmall"
                    :styling="styling"
                    :href="BTN_HREF"
                    :arrow="hasArrow"
                    :icon="BTN_ICON"
                    :split="BTN_ICON_GROUP.BTN_SPLIT">{{ BTN_TEXT }}</Btn>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Row from '@/components/Form/Row/Row';
  import Btn from '@/components/Button/Button';

  export default {
    name: 'ButtonDesigner',
    components: {
      Row: Row,
      Btn: Btn,
      DesignerDemo: DesignerDemo,
    },
    data() {
      return {
        BTN_TYPE: '',
        BTN_SIZE: '',
        BTN_STYLE: 'axa',
        BTN_ICON: '',
        BTN_TEXT: 'Get that insurance !',
        BTN_HREF: '#',
        BTN_ICON_GROUP: { BTN_ARROW: null, BTN_SPLIT: false },
      };
    },
    computed: {
      isButton() {
        return this.BTN_TYPE === 'button';
      },
      isLarge() {
        return this.BTN_SIZE === 'large';
      },
      isSmall() {
        return this.BTN_SIZE === 'small';
      },
      isNeg() {
        return this.BTN_STYLE === 'neg' || this.BTN_STYLE === 'ghost-neg';
      },
      hasArrow() {
        return this.BTN_ICON_GROUP.BTN_ARROW;
      },
      styling() {
        return this.BTN_STYLE;
      },
    },
  };
</script>

