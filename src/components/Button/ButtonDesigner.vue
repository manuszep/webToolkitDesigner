<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a button</h1>

            <div class="form-group" role="group">
                <label>My button is</label>
                <div class="custom-radio1-wrapper">
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_TYPE" type="radio" class="custom-control-input" value="">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">A link</span>
                    </label>
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_TYPE" type="radio" class="custom-control-input" value="button">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">An actual button</span>
                    </label>
                </div>
            </div>

            <div class="form-group" role="group">
                <label>I want my button to be</label>
                <div class="custom-radio1-wrapper">
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_SIZE" type="radio" class="custom-control-input" value="small">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Small</span>
                    </label>
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_SIZE" type="radio" class="custom-control-input" value="">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Medium</span>
                    </label>
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_SIZE" type="radio" class="custom-control-input" value="large">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Large</span>
                    </label>
                </div>
            </div>

            <div class="form-group" role="group">
                <label>Which style ?</label>
                <div class="custom-radio1-wrapper">
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_STYLE" type="radio" class="custom-control-input" value="axa">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Default</span>
                    </label>
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_STYLE" type="radio" class="custom-control-input" value="ghost">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Ghost</span>
                    </label>
                    <label class="custom-control custom-radio radio1">
                        <input v-model="BTN_STYLE" type="radio" class="custom-control-input" value="ghost-neg">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Ghost negative</span>
                    </label>
                </div>
            </div>

            <div class="form-group" role="group">
                <label>How nice would it be to add an icon ?</label>
                <div>
                    <label class="custom-control custom-checkbox">
                        <input v-model="BTN_ARROW" type="checkbox" class="custom-control-input" />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">That would be awesome !</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                        <input v-model="BTN_SPLIT" type="checkbox" class="custom-control-input" />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Make it stand out</span>
                    </label>
                </div>
            </div>

            <div class="form-group" >
                <label>I want something special...</label>
                <div class="custom-select-group">
                    <select v-model="BTN_ICON" class="custom-select" >
                        <option value="">Choose wisely...</option>

                        <option value="add">add</option>
                        <option value="arrow-bottom">arrow-bottom</option>
                        <option value="arrow-left">arrow-left</option>
                        <option value="arrow-right">arrow-right</option>
                        <option value="arrow-top">arrow-top</option>
                        <option value="btn-arrow">btn-arrow</option>
                        <option value="burger">burger</option>
                        <option value="calendar">calendar</option>
                        <option value="check-circle">check-circle</option>
                        <option value="checkmark">checkmark</option>
                        <option value="circle-outline">circle-outline</option>
                        <option value="circle">circle</option>
                        <option value="clipboard">clipboard</option>
                        <option value="close">close</option>
                        <option value="desktop">desktop</option>
                        <option value="download">download</option>
                        <option value="dropdown">dropdown</option>
                        <option value="facebook">facebook</option>
                        <option value="feedback">feedback</option>
                        <option value="google-plus">google-plus</option>
                        <option value="home">home</option>
                        <option value="info">info</option>
                        <option value="linked-in">linked-in</option>
                        <option value="mobile">mobile</option>
                        <option value="modal-close">modal-close</option>
                        <option value="process-checkmark">process-checkmark</option>
                        <option value="remove">remove</option>
                        <option value="search">search</option>
                        <option value="source">source</option>
                        <option value="switch">switch</option>
                        <option value="tablet">tablet</option>
                        <option value="twitter">twitter</option>
                        <option value="upload">upload</option>
                        <option value="youtube">youtube</option>
                    </select>
                </div>
            </div>

            <div class="form-group" >
                <label for="text" >Add a nice injunction for the stubborn user</label>
                <input v-model="BTN_TEXT" type="text" id="text" placeholder="e.g. Buy now !" class="form-control" />
            </div>


            <template v-if="!isButton">
                <div class="form-group" >
                    <label for="url" >And bring him to that URL</label>
                    <input v-model="BTN_HREF" type="text" id="url" placeholder="e.g. https://www.axa.com" class="form-control" />
                </div>
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
                    :split="BTN_SPLIT">{{ BTN_TEXT }}</Btn>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Btn from '@/components/Button/Button';

  export default {
    name: 'ButtonDesigner',
    components: {
      Btn: Btn,
      DesignerDemo: DesignerDemo,
    },
    data() {
      return {
        BTN_TYPE: '',
        BTN_SIZE: '',
        BTN_STYLE: 'axa',
        BTN_ARROW: null,
        BTN_ICON: '',
        BTN_TEXT: 'Get that insurance !',
        BTN_HREF: '#',
        BTN_SPLIT: false,
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
        return this.BTN_ARROW;
      },
      styling() {
        return this.BTN_STYLE;
      },
    },
  };
</script>

