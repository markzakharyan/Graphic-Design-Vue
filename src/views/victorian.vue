<template>
  <div class="victorian-container">
    <app-navbar rootClassName="rootClassName2"></app-navbar>
    <div class="victorian-container1">
      <img
        alt="image"
        src="/playground_assets/zakharyan_mark_victorian-1-600w.png"
        loading="eager"
        class="victorian-image"
      />
      <div class="victorian-container2">
        <span class="victorian-text">Victorian Poster</span>
        <span class="victorian-text1">
          For this project, I went a little out of my comfort zone and did a
          Victorian ad for fictitious &quot;Barber Zakharyan&quot;. Personally, I
          don&apos;t like how I did this project and wish I had chosen better
          fonts and background color.
        </span>
      </div>
    </div>
    <app-footer rootClassName="rootClassName2"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFooter from '../components/footer'

export default {
  name: 'Victorian',
  components: {
    AppNavbar,
    AppFooter,
  },
  metaInfo: {
    title: 'Victorian - Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'Victorian - Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.victorian-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(252, 0, 255) 0.00%,rgb(0, 219, 222) 100.00%);
}
.victorian-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 900px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
}
.victorian-image {
  width: 533px;
  height: 802px;
  margin: var(--dl-space-space-doubleunit);
  object-fit: cover;
}
.victorian-container2 {
  flex: 0 0 auto;
  width: 562px;
  height: 812px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.victorian-text {
  font-size: 50px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
}
.victorian-text1 {
  align-self: flex-start;
  margin-top: 0px;
  text-align: left;
  padding-top: 0px;
}
</style>
