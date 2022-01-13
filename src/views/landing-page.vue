<template>
  <div class="landing-page-container">
    <div class="landing-page-top-container">
      <nav data-role="Header" class="landing-page-navbar">
        <h1>MZ</h1>
        <div class="landing-page-right-side">
          <div class="landing-page-links-container">
            <router-link to="/" class="landing-page-navlink">Home</router-link>
            <router-link to="/about" class="landing-page-navlink1">
              About
            </router-link>
            <a
              href="mailto:markazakharyan@gmail.com?subject=Graphic Design Portfolio"
              class="landing-page-link"
            >
              Contact
            </a>
          </div>
          <a href="#main-section" class="landing-page-link1">
            <solid-button
              button="Take a look"
              class="landing-page-component"
            ></solid-button>
          </a>
        </div>
        <div data-type="BurgerMenu" class="landing-page-burger-menu">
          <svg viewBox="0 0 1024 1024" class="landing-page-burger-menu">
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
        <div data-type="MobileMenu" class="landing-page-mobile-menu">
          <div class="landing-page-nav">
            <div class="landing-page-top">
              <h1>Travel</h1>
              <div data-type="CloseMobileMenu" class="landing-page-close-menu">
                <svg viewBox="0 0 1024 1024" class="landing-page-icon03">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="landing-page-right-side1">
              <div class="landing-page-links-container1">
                <span class="landing-page-text">Home</span>
                <span class="landing-page-text01">About</span>
                <span class="landing-page-text02">Tour Packages</span>
                <span>Contact</span>
              </div>
              <a href="#main-section" class="landing-page-link2">
                <solid-button button="Explore places"></solid-button>
              </a>
            </div>
          </div>
          <div class="landing-page-follow-container">
            <span class="landing-page-text04">
              Follow us on
              <span v-html="rawh3km"></span>
            </span>
            <div class="landing-page-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                class="landing-page-link3"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  class="landing-page-icon05"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                class="landing-page-link4"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  class="landing-page-icon07"
                >
                  <path
                    d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                class="landing-page-link5"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  class="landing-page-icon09"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="landing-page-hero">
        <div class="landing-page-content-container">
          <h1 class="landing-page-text05 heading">Graphic Design Portfolio</h1>
          <h2 class="landing-page-subheading subheading">Mark Zakharyan</h2>
          <span class="landing-page-text06">
            <span>
              A collection of my best projects that I&apos;ve made throughout the
              year in
            </span>
            <br />
            <span>Mrs. Kramer&apos;s 3rd period Graphic Design</span>
          </span>
          <a href="#main-section" class="landing-page-link6">
            <solid-button
              button="Take a look"
              class="landing-page-component02"
            ></solid-button>
          </a>
        </div>
      </div>
    </div>
    <div id="main-section" class="landing-page-main">
      <h1>Some of my projects</h1>
      <span class="landing-page-text11">Semester 1</span>
      <div class="landing-page-cards-container">
        <router-link to="/collage" class="landing-page-navlink2">
          <place-card
            title="Collage"
            image="/playground_assets/collage-1-300w.png"
            description="For this project, I created a collage to be hung up as an advertisement for Spirit Week"
            class="landing-page-component03"
          ></place-card>
        </router-link>
        <router-link to="/typeface" class="landing-page-navlink3">
          <place-card
            title="Typeface Poster"
            image="/playground_assets/zakharyan_mark_sf_pro-1-300w.png"
            description="This was a poster meant to showcase my favorite typeface, SF Pro"
            class="landing-page-component04"
          ></place-card>
        </router-link>
        <router-link to="/gif" class="landing-page-navlink4">
          <place-card
            title="GIF"
            description="For this project, I utilized Google Earth Studio's closed beta to create a pretty cool gif."
            rootClassName="rootClassName1"
            image="/playground_assets/screen%20shot%202022-01-12%20at%209.07.14%20pm-300w.png"
            class="landing-page-component05"
          ></place-card>
        </router-link>
        <router-link to="/victorian" class="landing-page-navlink5">
          <place-card
            title="Victorian Ad"
            image="/playground_assets/zakharyan_mark_victorian-1-300w.png"
            description='For this project, I went a little out of my comfort zone a little, and did a Victorian ad for fictitious "Barber Zakharyan"'
            class="landing-page-component06"
          ></place-card>
        </router-link>
        <router-link to="/type-name" class="landing-page-navlink6">
          <place-card
            title="Type Name Project"
            image="/playground_assets/zakharyan_mark_type_name-1-300h.png"
            description='A simple project detailing different aspects of typography by using "Magnificent Mark" as an example'
            class="landing-page-component07"
          ></place-card>
        </router-link>
        <router-link to="/abstract-color" class="landing-page-navlink7">
          <place-card
            title="Abstract Color Art"
            image="/playground_assets/zakharyan_mark_color-1-300h.png"
            description="An abstract project showcasing how different color schemes can be used to create different effects"
            class="landing-page-component08"
          ></place-card>
        </router-link>
        <router-link
          to="/repetitionrepetitionrepetitionrepetition"
          class="landing-page-navlink8"
        >
          <place-card
            title="repetitionrepetitionrepetition"
            image="/playground_assets/repetition-1-300h.png"
            description="repetitionrepetitionrepetitionrepetition repetitionrepetitionrepetitionrepetition repetitionrepetitionrepetitionrepetition"
            rootClassName="rootClassName"
            class="landing-page-component09"
          ></place-card>
        </router-link>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import AppFooter from '../components/footer'

export default {
  name: 'LandingPage',
  components: {
    SolidButton,
    PlaceCard,
    AppFooter,
  },

  data() {
    return {
      rawh3km: ' ',
    }
  },

  metaInfo: {
    title: 'Graphic Design',
    meta: [
      {
        property: 'og:title',
        content: 'Graphic Design',
      },
    ],
  },
}
</script>

<style scoped>
.landing-page-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.landing-page-top-container {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(45deg, rgb(252, 0, 255) 0.00%,rgb(0, 219, 222) 94.00%,rgb(0, 219, 222) 100.00%);
}
.landing-page-navbar {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  max-width: 1000px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.landing-page-right-side {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.landing-page-links-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.landing-page-navlink {
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.landing-page-navlink1 {
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.landing-page-link {
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.landing-page-link1 {
  display: contents;
}
.landing-page-component {
  text-decoration: none;
}
.landing-page-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.landing-page-burger-menu {
  width: 24px;
  height: 24px;
}
.landing-page-mobile-menu {
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
.landing-page-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
  justify-content: space-between;
}
.landing-page-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-icon03 {
  width: 24px;
  height: 24px;
}
.landing-page-right-side1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.landing-page-links-container1 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-direction: column;
  justify-content: space-between;
}
.landing-page-text {
  margin-bottom: 8px;
}
.landing-page-text01 {
  margin-bottom: 8px;
}
.landing-page-text02 {
  margin-bottom: 8px;
}
.landing-page-link2 {
  display: contents;
}
.landing-page-follow-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.landing-page-text04 {
  padding-bottom: var(--dl-space-space-halfunit);
}
.landing-page-icons-container {
  width: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.landing-page-link3 {
  display: contents;
}
.landing-page-icon05 {
  width: 24px;
  height: 24px;
}
.landing-page-link4 {
  display: contents;
}
.landing-page-icon07 {
  width: 24px;
  height: 24px;
}
.landing-page-link5 {
  display: contents;
}
.landing-page-icon09 {
  width: 24px;
  height: 24px;
}
.landing-page-hero {
  flex: 1;
  width: 100%;
  display: flex;
  max-width: 1000px;
  align-items: center;
  padding-top: var(--dl-space-space-tripleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-tripleunit);
  justify-content: space-between;
}
.landing-page-content-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.landing-page-text05 {
  color: #000000;
}
.landing-page-subheading {
  color: #000000;
}
.landing-page-text06 {
  padding-top: var(--dl-space-space-doubleunit);
  padding-bottom: var(--dl-space-space-doubleunit);
}
.landing-page-link6 {
  display: contents;
}
.landing-page-component02 {
  text-decoration: none;
}
.landing-page-main {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-quadruple);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-quadruple);
  justify-content: flex-start;
}
.landing-page-text11 {
  color: var(--dl-color-gray-500);
}
.landing-page-cards-container {
  width: 100%;
  height: 1894px;
  display: flex;
  grid-gap: var(--dl-space-space-doubleunit);
  flex-wrap: wrap;
  max-width: 1000px;
  align-self: center;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
  justify-content: space-between;
}
.landing-page-navlink2 {
  display: contents;
}
.landing-page-component03 {
  text-decoration: none;
}
.landing-page-navlink3 {
  display: contents;
}
.landing-page-component04 {
  text-decoration: none;
}
.landing-page-navlink4 {
  display: contents;
}
.landing-page-component05 {
  text-decoration: none;
}
.landing-page-navlink5 {
  display: contents;
}
.landing-page-component06 {
  text-decoration: none;
}
.landing-page-navlink6 {
  display: contents;
}
.landing-page-component07 {
  text-decoration: none;
}
.landing-page-navlink7 {
  display: contents;
}
.landing-page-component08 {
  text-decoration: none;
}
.landing-page-navlink8 {
  display: contents;
}
.landing-page-component09 {
  text-decoration: none;
}
@media(max-width: 991px) {
  .landing-page-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .landing-page-cards-container {
    justify-content: center;
  }
}
@media(max-width: 767px) {
  .landing-page-right-side {
    display: none;
  }
  .landing-page-burger-menu {
    display: flex;
  }
  .landing-page-hero {
    justify-content: center;
  }
  .landing-page-content-container {
    align-items: center;
  }
  .landing-page-text05 {
    font-size: 2.5rem;
  }
  .landing-page-text06 {
    text-align: center;
  }
  .landing-page-main {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .landing-page-text05 {
    font-size: 2rem;
    text-align: center;
  }
  .landing-page-subheading {
    font-size: 1.3rem;
    text-align: center;
  }
}
</style>
