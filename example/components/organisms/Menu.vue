<template>
  <div class="menu">
    <input id="menu-control" v-model="open" type="checkbox" name="menu-control">
    <div class="menu__content" aria-label="Menu">
      <label for="menu-control" />
      <div>
        <div>
          <nav v-for="({headline, links}, index) in lists" :key="index">
            <headline
              v-if="headline"
              tag="span"
              class="menu__headline"
              type="menu"
              :content="headline"
            />
            <link-list :items="links" aria-label="Menu" />
          </nav>
        </div>
      </div>
    </div>
    <label for="menu-control" class="menu__toggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <g id="open">
          <g>
            <path d="M0 10h120v16.67H0z" />
            <path d="M0 93.33h120V110H0z" />
          </g>
        </g>
        <g id="close">
          <path d="M0 51.67h120v16.67H0z" />
          <path d="M0 51.67h120v16.67H0z" />
        </g>
      </svg>
    </label>
  </div>
</template>

<script>
import Headline from '@/components/atoms/Headline';
import LinkList from '@/components/molecules/LinkList';
export default {
  components: {
    Headline,
    LinkList
  },

  props: {
    lists: {
      type: Array,
      default () {
        return [
          {
            headline: 'Preview',
            links: [
              {
                title: 'Item',
                to: '/'
              }
            ]
          }
        ];
      }
    }
  },

  data () {
    return {
      open: false
    };
  },

  watch: {
    open (value) {
      document.documentElement.classList.toggle('js--menu-open', value);
    }
  }
  // mounted () {
  //   this.$router.afterEach((to, from) => {
  //     this.open = false;
  //   });
  // }

};
</script>

<style lang="postcss">
html.js--menu-open {
  overflow: hidden;
}
</style>

<style lang="postcss" scoped>

.menu {
  color: black;

  & .menu__toggle {
    position: absolute;
    top: calc(20 / 16 * 1em);
    left: calc(20 / 16 * 1em);
    cursor: pointer;

    & svg {
      display: block;
      width: calc(30 / 16 * 1em);
    }

    & path {
      transition: opacity 0.2s linear, transform 0.2s linear;
      transform-origin: center;
    }
  }

  & input:checked ~ .menu__toggle {
    & #open {
      & path {
        opacity: 0;
      }

      & path:nth-child(1) {
        transform: translateY(-10%);
      }

      & path:nth-child(2) {
        transform: translateY(10%);
      }
    }

    & #close {
      & path:nth-child(1) {
        transform: rotate(45deg);
      }

      & path:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }

  & .menu__title {
    display: block;
    font-size: calc(18 / 16 * 1em);
    font-weight: normal;
    text-align: right;
    text-transform: uppercase;
    opacity: 0.4;
  }

  & .menu__headline {
    display: block;
    font-size: calc(18 / 16 * 1em);
    color: #333;
  }

  & .menu-button {
    position: absolute;
    top: 0;
    padding: 0;
  }

  & .menu__content {
    position: fixed;
    top: 0;

    & > label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: backdrop-filter 0.2s 0.2s ease-in;
    backdrop-filter: none;

    & > div {
      display: flex;
      height: 100%;

      & > div {
        padding: calc(20 / 16 * 1em);
        padding-top: calc(50 / 16 * 1em);
        overflow: auto;
        text-align: left;
        background: rgba(255, 255, 255, 0.5);
        transition: transform 0.2s  ease-in;
        transform: translateX(-100%);
      }
    }
  }

  & input {
    display: none;
  }

  & input:checked + .menu__content {
    display: block;
    pointer-events: auto;
    transition-delay: 0s;
    backdrop-filter: blur(10px);

    & > div > div {
      transition-delay: 0.2s;
      transform: translateX(0%);
    }
  }
}
</style>