<template>
  <div class="about-container">
    <app-navbar rootClassName="rootClassName6"></app-navbar>
    <div class="about-container1">
      <div class="about-container2">
        <h1 class="about-text">
          <span>Mark</span>
          <br />
          <span>Zakharyan</span>
          <span></span>
        </h1>
        <div class="about-container3">
          <span class="about-text5">
            <span class="about-text6"></span>
            <span>
              I&apos;m a junior attending University High School in Irvine CA.
              This is my graphic design portfolio for Mrs. Kramer&apos;s 3rd
              period Graphic Design. Hi Mrs. Kramer!
            </span>
          </span>
        </div>
      </div>
    </div>
    <app-footer rootClassName="rootClassName6"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFooter from '../components/footer'

export default {
  name: 'About',
  components: {
    AppNavbar,
    AppFooter,
  },
  metaInfo: {
    title: 'About - Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'About - Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(252, 0, 255) 0.00%,rgb(0, 219, 222) 100.00%);
}
.about-container1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.about-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 876px;
  display: flex;
  padding: var(--dl-space-space-quadruple);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.about-text {
  font-size: 130px;
  align-self: flex-start;
  margin-top: var(--dl-space-space-halfunit);
  margin-left: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-doubleunit);
}
.about-container3 {
  flex: 0 0 auto;
  width: 579px;
  height: 100px;
  display: flex;
  align-self: flex-end;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  margin-right: var(--dl-space-space-quadruple);
  margin-bottom: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-quadruple);
  justify-content: flex-end;
}
.about-text5 {
  text-align: right;
  padding-right: var(--dl-space-space-quadruple);
}
.about-text6 {
  text-align: right;
}
</style>
