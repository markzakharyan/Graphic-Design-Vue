<template>
  <div class="place-card-container" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image" loading="eager" class="place-card-image" />
    <div class="place-card-container1">
      <span class="place-card-text">{{ Title }}</span>
      <span class="place-card-text1">{{ description }}</span>
      <outline-button button1="Learn More"></outline-button>
    </div>
  </div>
</template>

<script>
import OutlineButton from './outline-button'

export default {
  name: 'PlaceCard',
  props: {
    image: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=300',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    Title: {
      type: String,
      default: 'City Name',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    link: String,
    rootClassName: String,
  },
  components: {
    OutlineButton,
  },
}
</script>

<style scoped>
.place-card-container {
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.place-card-image {
  flex: 1;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius4);
  border-top-left-radius: var(--dl-radius-radius-radius8);
  border-top-right-radius: var(--dl-radius-radius-radius8);
}
.place-card-container1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
}
.place-card-text {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  padding-bottom: var(--dl-space-space-halfunit);
}
.place-card-text1 {
  font-size: 12px;
  max-width: 250px;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.rootClassName {
  align-self: stretch;
}

@media(max-width: 767px) {
  .place-card-container {
    width: 200px;
  }
}
@media(max-width: 479px) {
  .place-card-container {
    width: 300px;
  }
}
</style>
