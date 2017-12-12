<template>
    <div class="banner">
        <div class="banner-bg">
            <img v-if="!isMultiImage() && isImage()" class="banner-bg-media" :src="this.getImage()[0]" :alt="alt" />
            <picture v-if="isMultiImage() && isImage()" :src="getImage()[0]" :alt="alt">
                <source v-if="hasImageIndex(3)" :srcset="getImage()[3]" media="(min-width: 1200px)">
                <source v-if="hasImageIndex(2)" :srcset="getImage()[2]" media="(min-width: 992px)">
                <source v-if="hasImageIndex(1)" :srcset="getImage()[1]" media="(min-width: 768px)">
                <source :srcset="getImage()[0]">
                <img class="banner-bg-media" :src="getImage()[0]" :alt="alt" />
            </picture>
            <video v-if="isVideo()" class="banner-bg-media" :autoplay="this.autoplay">
                <source v-for="(data, index) in getImage()" :src="data" :type="getVideoType(data)">
            </video>
        </div>
        <div :class="overlayClass"></div>
        <div class="banner-content">
            <div class="container">
                <p v-if="title" class="banner-title">{{title}}</p>
                <p v-if="text" class="banner-lead">{{text}}</p>
                <div v-if="button" class="banner-actions">
                    <a :href="link" class="banner-action btn btn-ghost btn-ghost-white btn-lg">{{button}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import ClassNames from 'classnames';
  import { getExtension, isImage, isVideo } from '@/components/Basics/Utils';

  export default {
    name: 'Banner',
    props: {
      image: {
        required: true,
      },
      alt: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: false,
      },
      text: {
        type: String,
        required: false,
      },
      button: {
        type: String,
        required: false,
      },
      link: {
        type: String,
        required: false,
      },
      gradientOverlay: {
        type: Boolean,
        required: false,
      },
      autoplay: {
        type: Boolean,
        required: false,
      },
    },
    computed: {
      overlayClass() {
        return ClassNames('banner-overlay', { gradient: this.gradientOverlay, semi: !this.gradientOverlay });
      },
    },
    methods: {
      getImage() {
        return (typeof this.image === 'string') ? [this.image] : this.image;
      },
      isImage() {
        return isImage(this.getImage()[0]);
      },
      isVideo() {
        return isVideo(this.getImage()[0]);
      },
      isMultiImage() {
        return this.getImage().length > 1;
      },
      getFirstMedia() {
        return this.getImage()[0];
      },
      getNextMedia() {
        const tmp = JSON.parse(JSON.stringify(this.getImage())); // clone data
        tmp.shift();
        return tmp;
      },
      hasImageIndex(index) {
        const img = this.getImage();
        return (typeof img[index] !== 'undefined' && img[index] !== '' && img[index] !== null && img[index] !== false && img[index] !== 'null' && img[index] !== 'false');
      },
      getVideoType(name) {
        return `video/${getExtension(name)}`;
      },
    },
  };
</script>
