<template>
  <div class="type-name-container">
    <app-navbar rootClassName="rootClassName3"></app-navbar>
    <div class="type-name-container1">
      <img
        alt="image"
        src="/playground_assets/zakharyan_mark_type_name-1-500h.png"
        loading="eager"
        class="type-name-image"
      />
      <div class="type-name-container2">
        <span class="type-name-text">Type Name Project</span>
        <span class="type-name-text1">
          <span>
            A simple project detailing different aspects of typography by using
            &quot;Magnificent Mark&quot; as an example. For the first project that
            I&apos;ve done in this class, I&apos;m very proud of my work. I think
            that I effectively communicated a lot of information in a relatively
            elegant manner.
          </span>
        </span>
      </div>
    </div>
    <app-footer rootClassName="rootClassName3"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFooter from '../components/footer'

export default {
  name: 'TypeName',
  components: {
    AppNavbar,
    AppFooter,
  },
  metaInfo: {
    title: 'Type Name - Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'Type Name - Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.type-name-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(45deg, rgb(252, 0, 255) 0.00%,rgb(0, 219, 222) 100.00%);
}
.type-name-container1 {
  flex: 1;
  width: 100%;
  height: 900px;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
}
.type-name-image {
  width: 547px;
  height: 402px;
  margin: var(--dl-space-space-doubleunit);
  object-fit: cover;
}
.type-name-container2 {
  flex: 0 0 auto;
  width: 537px;
  height: 216px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.type-name-text {
  font-size: 50px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
}
.type-name-text1 {
  align-self: flex-start;
  margin-top: 0px;
  text-align: left;
  padding-top: 0px;
}
</style>
