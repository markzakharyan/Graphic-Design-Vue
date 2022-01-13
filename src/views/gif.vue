<template>
  <div class="gif-container">
    <app-navbar rootClassName="rootClassName7"></app-navbar>
    <div class="gif-container1">
      <iframe
        src='https://www.youtube.com/embed/52Odri9jimE?autoplay=1&amp;fs=0&amp;iv_load_policy=3&amp;showinfo=0&amp;rel=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=1&amp;frameborder="0"'
        allow="loop autoplay"
        class="gif-iframe"
      ></iframe>
      <div class="gif-container2">
        <span class="gif-text">GIF Project</span>
        <span class="gif-text1">
          <span>
            For this project, I utilized Google Earth Studio&apos;s closed beta to
            create a pretty cool gif. I then used Premier Pro to cut out a green
            overlay that I made with a simple script I wrote. By the way,
            it&apos;s pronounced GIF, not GIF!
          </span>
          <br />
          <span></span>
          <br />
          <span>
            (ps), I&apos;m not making your web browser download a 300mb gif so
            here&apos;s a Youtube video instead
          </span>
        </span>
      </div>
    </div>
    <app-footer rootClassName="rootClassName7"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFooter from '../components/footer'

export default {
  name: 'Gif',
  components: {
    AppNavbar,
    AppFooter,
  },
  metaInfo: {
    title: 'gif - Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'gif - Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.gif-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(315deg, rgb(252, 0, 255) 0.00%,rgb(0, 219, 222) 100.00%);
}
.gif-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
}
.gif-iframe {
  width: 520px;
  height: 307px;
  margin: var(--dl-space-space-doubleunit);
  align-self: flex-start;
}
.gif-container2 {
  flex: 0 0 auto;
  width: 507px;
  height: 900px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.gif-text {
  font-size: 50px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
}
.gif-text1 {
  align-self: flex-start;
  margin-top: 0px;
  text-align: left;
  padding-top: 0px;
}
</style>
