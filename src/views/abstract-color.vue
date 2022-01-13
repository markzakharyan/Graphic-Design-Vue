<template>
  <div class="abstract-color-container">
    <app-navbar rootClassName="rootClassName4"></app-navbar>
    <div class="abstract-color-container1">
      <img
        alt="image"
        src="/playground_assets/zakharyan_mark_color-1-400h.png"
        loading="eager"
        class="abstract-color-image"
      />
      <div class="abstract-color-container2">
        <span class="abstract-color-text">Abstract Color Project</span>
        <span class="abstract-color-text1">
          <span>
            An abstract project showcasing how different color schemes can be used
            to create different effects. I think that I
            <span v-html="raw5cej"></span>
          </span>
          <span class="abstract-color-text3">was</span>
          <span>
            successful with this project, with the caveat that I could&apos;ve
            done a lot better. I could&apos;ve included more colors and chosen
            better colors, especially for the triad color scheme. I think I
            focused too much on the cool shape, and too little on the colors
            (which was the whole point of the project).
          </span>
        </span>
      </div>
    </div>
    <app-footer rootClassName="rootClassName4"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFooter from '../components/footer'

export default {
  name: 'AbstractColor',
  components: {
    AppNavbar,
    AppFooter,
  },

  data() {
    return {
      raw5cej: ' ',
    }
  },

  metaInfo: {
    title: 'Abstract Color - Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'Abstract Color - Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.abstract-color-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(252, 0, 255) 0.00%,rgb(0, 219, 222) 100.00%);
}
.abstract-color-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 900px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
}
.abstract-color-image {
  width: 627px;
  height: 350px;
  margin: var(--dl-space-space-doubleunit);
  object-fit: cover;
}
.abstract-color-container2 {
  flex: 0 0 auto;
  width: 507px;
  height: 812px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.abstract-color-text {
  font-size: 50px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
}
.abstract-color-text1 {
  align-self: flex-start;
  margin-top: 0px;
  text-align: left;
  padding-top: 0px;
}
.abstract-color-text3 {
  font-style: italic;
}
</style>
