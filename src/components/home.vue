<template>
	<div id="main">
		<div class="bannerBox">
			<div class="bannerBg"><img src="../assets/img/homeBg.png" alt=""></div>
			<div class="bannerContent">
				<h3 v-html="$t('u.homeBannerTitle')"></h3>
				<p v-html="$t('u.homeBannerText')"></p>
				<div class="toLoadAppBtn" @click.stop="AppUpload">
					<span>{{$t('u.nowLoad')}}</span>
					<b></b>
				</div>
			</div>
		</div>
		<div class="homeNav" ref="homeNav">
			<div class="homeNavBox" :style="{position: posiType,top: posiTop}" ref="homeNavBox">
				<div :class="{activeHome: defaultInd == 1}" @click="homeCut(1)">{{$t('u.selfCircle')}}</div>
				<div :class="{activeHome: defaultInd == 2}" @click="homeCut(2)">{{$t('u.selfCarClub')}}</div>
				<div :class="{activeHome: defaultInd == 3}" @click="homeCut(3)">{{$t('u.carClubRecruit')}}</div>
			</div>
		</div>
		
		<transition name="homeSlide">
			<selfCicle v-if="defaultInd == 1"></selfCicle>
			<selfGrounp v-if="defaultInd == 2"></selfGrounp>
			<clubRecuruit v-if="defaultInd == 3"></clubRecuruit>
		</transition>
	</div>
</template>

<script>
	import selfCicle from '../components/home/selfCicle.vue'
	import selfGrounp from '../components/home/selfGroup.vue'
	import clubRecuruit from '../components/home/clubRecruit.vue'
	import { mapGetters , mapActions } from 'vuex';

	export default {
		data() {
			return {
				defaultInd: 1,
				posiType: 'absolute',
				posiTop: 0
			}
		},
		components: {selfCicle, selfGrounp, clubRecuruit},
		computed: {
			...mapGetters([
				'topHeight',
				'scrollTop'
				])
		},
		watch: {
			scrollTop(val) {
				let	navH = this.$refs.homeNav.offsetTop - this.topHeight
				if(navH && navH > 0) {
					if(val > navH) {
						this.posiType = 'fixed'
						this.posiTop = '0.96rem'
						this.toTellTopBg(true)
					}else {
						this.posiType = 'absolute'
						this.posiTop = '0'
						this.toTellTopBg(false)
					}
				}else {
					navH = this.$refs.homeNav.offsetTop - this.topHeight
				}
			}
		},
		methods: {
			...mapActions([
				'toTellTopBg'
				]),
			AppUpload() { //跳App下载
				this.$api.openApp()
			},
			homeCut(status) {
				if(this.posiTop != '0') {
					let	navH = this.$refs.homeNav.offsetTop
					window.scrollTo(0,navH)
				}
				this.defaultInd = status
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	#main {
		position: relative;
	}
	.bannerBox {
		position: relative;
		height: auto;
		width: 100%;
	}
	.bannerBg {
		width: 100%;
		height: auto;
		position: relative;
		z-index: 1;
	}
	.bannerBg>img {
		width: 100%;
		height: auto;
	}
	.bannerContent {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 40;
		width: 100%;
		height: 100%;
		padding:0 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.bannerContent>h3 {
		font-size: 0.4rem;
		color: #FFFFFF;
		font-weight: 500;
		margin-bottom: 0.2rem;
	}
	.bannerContent>p {
		font-size: 0.2rem;
		color: #D7D9E1;
		margin-bottom: 0.4rem;
		line-height: 0.4rem;
	}
	.toLoadAppBtn {
		height: 0.66rem;
		width: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.2rem;
		background-image: linear-gradient(-180deg, #FFDF00 0%, #FEA200 100%);
		border-radius: 0.06rem;
	}
	.toLoadAppBtn>span {
		display: block;
		font-size: 0.24rem;
		color: #FFFFFF;
		margin-right: 0.2rem;
	}
	.toLoadAppBtn>b {
		display: block;
		width: 0.32rem;
		height: 0.32rem;
		background: url('../assets/img/qrCodeIcon.png') no-repeat center;
		background-size: 100%;
	}
	.homeNav {
		height: 0.96rem;
		width: 100%;
		position: relative;
	}
	.homeNavBox {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 50;
		height: 0.96rem;
		width: 100%;
		background-color: #000;
		padding: 0 1.12rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.homeNavBox>div {
		height: 100%;
		display: flex;
		align-items: center;
		font-size: 13px;
		color: #AAABAD;
		border-bottom: 0.04rem solid transparent;
		text-align: center;
	}
	.homeNavBox>div.activeHome {
		color: #fff;
		border-bottom-color: #FFD532;
	}
	.homeSlide-enter-active {
	  transition: all .3s ease;
	}
	.homeSlide-enter, .homeSlide-leave-to {
		transform: translateX(7.5rem);
	}
</style>