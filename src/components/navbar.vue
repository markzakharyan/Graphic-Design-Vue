<template>
  <nav data-role="Header" class="navbar-navbar" v-bind:class="rootClassName">
    <router-link to="/" class="navbar-navlink">
      <h1 class="navbar-logo">{{ Logo }}</h1>
    </router-link>
    <div class="navbar-right-side">
      <div class="navbar-links-container">
        <router-link to="/" class="navbar-navlink1">{{ text }}</router-link>
        <router-link to="/about" class="navbar-navlink2">{{ text1 }}</router-link>
        <a
          href="mailto:markazakharyan@gmail.com?subject=Graphic Design Portfolio"
          class="navbar-link"
        >
          {{ text3 }}
        </a>
      </div>
      <router-link to="/" class="navbar-navlink3">
        <solid-button
          button="Take a look"
          class="navbar-component"
        ></solid-button>
      </router-link>
    </div>
    <div data-type="BurgerMenu" class="navbar-burger-menu">
      <svg viewBox="0 0 1024 1024" class="navbar-burger-menu">
        <path
          d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
        ></path>
        <path
          d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
        ></path>
        <path
          d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
        ></path>
      </svg>
    </div>
    <div data-type="MobileMenu" class="navbar-mobile-menu">
      <div class="navbar-nav">
        <div class="navbar-top">
          <h1>{{ Logo1 }}</h1>
          <div data-type="CloseMobileMenu" class="navbar-close-menu">
            <svg viewBox="0 0 1024 1024" class="navbar-icon03">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="navbar-right-side1">
          <div class="navbar-links-container1">
            <span class="navbar-text">{{ text5 }}</span>
            <span class="navbar-text1">{{ text6 }}</span>
            <span class="navbar-text2">{{ text7 }}</span>
            <span>{{ text8 }}</span>
          </div>
          <a href="#main-section" class="navbar-link1">
            <solid-button button="Explore places"></solid-button>
          </a>
        </div>
      </div>
      <div class="navbar-follow-container">
        <span class="navbar-text4">{{ text4 }}</span>
        <div class="navbar-icons-container">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            class="navbar-link2"
          >
            <svg viewBox="0 0 877.7142857142857 1024" class="navbar-icon05">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            class="navbar-link3"
          >
            <svg viewBox="0 0 602.2582857142856 1024" class="navbar-icon07">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            class="navbar-link4"
          >
            <svg viewBox="0 0 950.8571428571428 1024" class="navbar-icon09">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SolidButton from './solid-button'

export default {
  name: 'Navbar',
  props: {
    text: {
      type: String,
      default: 'Home',
    },
    rootClassName: String,
    text7: {
      type: String,
      default: 'Tour Packages',
    },
    scroll_to: String,
    text4: {
      type: String,
      default: 'Follow us on ',
    },
    Logo1: {
      type: String,
      default: 'Travel',
    },
    text3: {
      type: String,
      default: 'Contact',
    },
    text8: {
      type: String,
      default: 'Contact',
    },
    text1: {
      type: String,
      default: 'About',
    },
    text5: {
      type: String,
      default: 'Home',
    },
    Logo: {
      type: String,
      default: 'MZ',
    },
    text6: {
      type: String,
      default: 'About',
    },
  },
  components: {
    SolidButton,
  },
}
</script>

<style scoped>
.navbar-navbar {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  max-width: 1000px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-navlink {
  display: contents;
}
.navbar-logo {
  text-decoration: none;
}
.navbar-right-side {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-links-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-navlink1 {
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.navbar-navlink2 {
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.navbar-link {
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.navbar-navlink3 {
  display: contents;
}
.navbar-component {
  text-decoration: none;
}
.navbar-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-burger-menu {
  width: 24px;
  height: 24px;
}
.navbar-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100%;
  display: none;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.navbar-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
  justify-content: space-between;
}
.navbar-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar-icon03 {
  width: 24px;
  height: 24px;
}
.navbar-right-side1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.navbar-links-container1 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-direction: column;
  justify-content: space-between;
}
.navbar-text {
  margin-bottom: 8px;
}
.navbar-text1 {
  margin-bottom: 8px;
}
.navbar-text2 {
  margin-bottom: 8px;
}
.navbar-link1 {
  display: contents;
}
.navbar-follow-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.navbar-text4 {
  padding-bottom: var(--dl-space-space-halfunit);
}
.navbar-icons-container {
  width: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-link2 {
  display: contents;
}
.navbar-icon05 {
  width: 24px;
  height: 24px;
}
.navbar-link3 {
  display: contents;
}
.navbar-icon07 {
  width: 24px;
  height: 24px;
}
.navbar-link4 {
  display: contents;
}
.navbar-icon09 {
  width: 24px;
  height: 24px;
}
.rootClassName {
  align-self: center;
}
.rootClassName1 {
  align-self: center;
}
.rootClassName2 {
  align-self: center;
}
.rootClassName3 {
  align-self: center;
}
.rootClassName4 {
  align-self: center;
}
.rootClassName5 {
  align-self: center;
}

.rootClassName7 {
  align-self: center;
}
@media(max-width: 767px) {
  .navbar-right-side {
    display: none;
  }
  .navbar-burger-menu {
    display: flex;
  }
}
</style>
