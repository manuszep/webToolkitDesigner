<template>
    <div class="designer">
        <form class="form">
            <h1 class="form-title">Make a banner</h1>

            <Row
                type="radio"
                label="As media, I want..."
                v-model="IMG_TYPE"
                :options="[{value: 'image', label: 'Single image'}, {value: 'imageResp', label:'Responsive images'}, {value: 'movie', label:'Single video'}, {value: 'movieResp', label:'Multiformat video'}]"></Row>

            <Row
                type="radio"
                label="Autoplay video ?"
                v-model="AUTOPLAY"
                :options="[{value: true, label: 'Yes'}, {value: false, label:'No'}]"></Row>

            <Row
                type="radio"
                label="Overlay type"
                v-model="GRADIENT"
                :options="[{value: true, label: 'Gradient'}, {value: false, label:'Semi-transparent'}]"></Row>

            <Row
                type="text"
                label="Title"
                v-model="TITLE"
                id="title"
                placeholder="Banner title"></Row>

            <Row
                type="text"
                label="Text"
                v-model="TEXT"
                id="text"
                placeholder="I'm a banner and I want your attention"></Row>

            <Row
                type="text"
                label="Image alternate text"
                v-model="ALT"
                id="alt"
                placeholder="Text description of the visual"></Row>

            <Row
                type="text"
                label="Button text"
                v-model="BUTTON"
                id="button"
                placeholder="Click me"></Row>

            <Row
                type="text"
                label="Button link"
                v-model="LINK"
                id="link"
                placeholder="www.axa.com"></Row>
        </form>

        <DesignerDemo fullWidth>
            <Banner
                :image="getImage()"
                :alt="ALT"
                :title="TITLE"
                :text="TEXT"
                :button="BUTTON"
                :link="LINK"
                :gradientOverlay="GRADIENT"
                :autoplay="AUTOPLAY"/>
        </DesignerDemo>
    </div>
</template>

<script>
  import DesignerDemo from '@/components/DesignerDemo/DesignerDemo';
  import Row from '@/components/Form/Row/Row';
  import Banner from '@/components/Banner/Banner';

  export default {
    name: 'BannerDesigner',
    components: {
      Row: Row,
      Banner: Banner,
      DesignerDemo: DesignerDemo,
    },
    data() {
      return {
        IMG_TYPE: 'imageResp',
        ALT: 'Text description of the visual',
        TITLE: 'Banner title',
        TEXT: 'I\'m a banner and I want your attention',
        BUTTON: 'Click me',
        LINK: 'www.axa.com',
        GRADIENT: true,
        AUTOPLAY: false,
      };
    },
    methods: {
      getImage() {
        switch (this.IMG_TYPE) {
          case 'imageResp':
            return ['/static/banner@767.jpg', '/static/banner@991.jpg', '/static/banner@1199.jpg', '/static/banner@1984.jpg'];
          case 'movie':
            return '/static/big_buck_bunny.mp4';
          case 'movieResp':
            return ['/static/big_buck_bunny.mp4', '/static/big_buck_bunny.webm'];
          default:
            return '/static/banner@1984.jpg';
        }
      },
    },
  };
</script>
