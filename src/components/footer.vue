<template>
  <div class="footer-footer" v-bind:class="rootClassName">
    <div class="footer-menu">
      <router-link to="/" class="footer-navlink">
        <h1 class="footer-logo">{{ Logo }}</h1>
      </router-link>
      <div class="footer-container">
        <router-link to="/about" class="footer-navlink1">{{ text4 }}</router-link>
        <a
          :href="link_text5"
          target="_blank"
          rel="noreferrer noopener"
          class="footer-link"
        >
          {{ text6 }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    link_text3: {
      type: String,
      default: 'https://example.com',
    },
    rootClassName: String,
    text6: {
      type: String,
      default: 'Terms and conditions',
    },
    link_text5: {
      type: String,
      default: 'https://example.com',
    },
    text4: {
      type: String,
      default: 'About',
    },
    Logo: {
      type: String,
      default: 'MZ',
    },
  },
}
</script>

<style scoped>
.footer-footer {
  color: var(--dl-color-gray-white);
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-black);
}
.footer-menu {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1000px;
  align-items: center;
  margin-left: var(--dl-space-space-quadruple);
  flex-direction: row;
  justify-content: space-between;
}
.footer-navlink {
  display: contents;
}
.footer-logo {
  text-decoration: none;
}
.footer-container {
  width: 917px;
  height: 52px;
  display: flex;
  align-self: center;
  align-items: flex-end;
  margin-left: 100px;
  flex-direction: row;
  justify-content: flex-start;
}
.footer-navlink1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.footer-link {
  margin-left: var(--dl-space-space-doubleunit);
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.rootClassName {
  flex: 1;
}
.rootClassName1 {
  flex: 1;
}
.rootClassName2 {
  flex: 1;
}

.rootClassName4 {
  flex: 1;
}
.rootClassName5 {
  flex: 1;
}
.rootClassName6 {
  flex: 1;
  height: 100%;
  align-self: center;
}
.rootClassName7 {
  flex: 1;
}
@media(max-width: 767px) {
  .footer-menu {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .footer-container {
    height: 100%;
    align-items: flex-start;
    margin-left: 50px;
  }
  .footer-navlink1 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .footer-link {
    margin-bottom: var(--dl-space-space-halfunit);
  }
}
</style>
