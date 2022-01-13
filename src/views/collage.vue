<template>
  <div class="collage-container">
    <app-navbar rootClassName="rootClassName"></app-navbar>
    <div class="collage-container1">
      <img
        alt="image"
        src="/playground_assets/collage-1-600w.png"
        loading="eager"
        class="collage-image"
      />
      <div class="collage-container2">
        <span class="collage-text">Spirit Night Collage</span>
        <span class="collage-text1">
          <span>
            For this project, I created a collage to be hung up as an
            advertisement for Spirit Week. While this poster could be seen as
            <span v-html="raw7j7f"></span>
          </span>
          <span class="collage-text3">semi</span>
          <span>
            -appealing to look at, I do not think that I was successful. As an ad,
            the poster is easy to overlook and I don&apos;t think that many people
            were encouraged to go to Spirit Night because of my collage.
          </span>
        </span>
      </div>
    </div>
    <app-footer rootClassName="rootClassName"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFooter from '../components/footer'

export default {
  name: 'Collage',
  components: {
    AppNavbar,
    AppFooter,
  },

  data() {
    return {
      raw7j7f: ' ',
    }
  },

  metaInfo: {
    title: 'Collage - Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'Collage - Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.collage-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(315deg, rgb(252, 0, 255) 0.00%,rgb(0, 219, 222) 100.00%);
}
.collage-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 900px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
}
.collage-image {
  width: 534px;
  height: 828px;
  margin: var(--dl-space-space-doubleunit);
  object-fit: cover;
}
.collage-container2 {
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
.collage-text {
  font-size: 50px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
}
.collage-text1 {
  align-self: flex-start;
  margin-top: 0px;
  text-align: left;
  padding-top: 0px;
}
.collage-text3 {
  font-style: italic;
}
</style>
