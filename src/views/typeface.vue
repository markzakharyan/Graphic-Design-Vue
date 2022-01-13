<template>
  <div class="typeface-container">
    <app-navbar rootClassName="rootClassName1"></app-navbar>
    <div class="typeface-container1">
      <img
        alt="image"
        src="/playground_assets/zakharyan_mark_sf_pro-1-400w.png"
        loading="eager"
        class="typeface-image"
      />
      <div class="typeface-container2">
        <span class="typeface-text">Typeface Project</span>
        <span class="typeface-text1">
          This was a poster meant to showcase my favorite Typeface, SF Pro. I
          really like how I did this project because the gradient is very nice to
          look at and I think that I effectively demonstrate the aesthetic of SF
          Pro.
        </span>
      </div>
    </div>
    <app-footer rootClassName="rootClassName1"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFooter from '../components/footer'

export default {
  name: 'Typeface',
  components: {
    AppNavbar,
    AppFooter,
  },
  metaInfo: {
    title: 'Typeface - Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'Typeface - Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.typeface-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(to right, #fc00ff 0%, #00dbde 100%);
}
.typeface-container1 {
  width: 100%;
  height: 900px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
}
.typeface-image {
  width: 318px;
  height: 495px;
  margin: var(--dl-space-space-doubleunit);
  object-fit: cover;
}
.typeface-container2 {
  flex: 0 0 auto;
  width: 503px;
  height: 210px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.typeface-text {
  font-size: 50px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
}
.typeface-text1 {
  align-self: flex-start;
  margin-top: 0px;
  text-align: left;
  padding-top: 0px;
}
</style>
