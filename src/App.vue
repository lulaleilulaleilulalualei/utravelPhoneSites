<template>
  <div id="app">
    <div id="mainBox">
      <asideNav @closeBox="closeBox"
              :isShowBox="isShowNav"></asideNav>
      <div id="contentBox" :style="defaultStyle">
        <div :class="[{changeBg: isTopColor},'boxTop']" ref="boxTop">
          <div class="boxTopLeftBtn" @click="showNavBox"><div><img title="优旅家" src="./assets/img/bread_icon.png" alt=""></div></div>
          <div class="botTopLogin"><img src="./assets/img/logo.png" alt=""></div>
        </div>
        <router-view/>
        <footerBox></footerBox>
        <template>
          <div v-if="isShowNav" @click="closeNavBox" class="pageShade"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import footerBox from './components/common/footerBox.vue'
  import asideNav from './components/common/asideNav.vue'
  import { mapGetters , mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      defaultStyle: {
        width: 'auto',
        height: 'auto'
      },
      isShowNav: false
    }
  },
  components: {asideNav, footerBox},
  computed: {
    ...mapGetters([
      'isTopColor'
      ])
  },
  methods: {
    ...mapActions([
      'getToBoxH',
      'getScrollTop'
      ]),
    showNavBox() {
      this.isShowNav = true
    },
    closeNavBox() {
      this.isShowNav = false
    },
    closeBox(val) {
      this.isShowNav = val
    },
    scrollEvent() {
      document.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        this.getScrollTop(scrollTop)
      })
    }
  },
  created() {
    this.$api.rem()
  },
  mounted() {
    this.defaultStyle = {
      width: window.innerWidth + 'px',
      minHeight: window.innerHeight + 'px'
    }
    this.getToBoxH(parseFloat(getComputedStyle(this.$refs.boxTop).height))
    this.scrollEvent()
  }
}
</script>

<style>
  .boxTop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 0.96rem;
    padding: 0 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    transition-duration: 300ms;
  }
  .boxTop.changeBg {
    background-color: #000;
  }
  #mainBox {
    transition-duration: 300ms;
  }
  .boxTopLeftBtn {
    width: auto;
    height: auto;
    padding: 0.2rem;
  }
  .boxTopLeftBtn>div {
    width: 0.4rem;
    height: 0.28rem;
  }
  .botTopLogin {
    height: 0.28rem;
    width: 1.24rem;
  }
  .pageShade {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 80;
    background-color: rgba(0,0,0,0.4);
  }
</style>
