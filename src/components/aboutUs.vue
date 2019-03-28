<template>
	<div id="aboutUs">
		<div class="aboutBanner"><img src="../assets/img/aboutBanner.png" alt=""></div>
		<div class="aboutContent" ref="aboutContent">
			<div class="itemContent">
				<h3>{{$t('u.aboutUtravelTitle01')}}</h3>
				<p>{{$t('u.utravelIntroText01')}}</p>
			</div>
			<div class="itemContent">
				<h3>{{$t('u.aboutUtravelTitle03')}}</h3>
				<p v-html="$t('u.utravelIntroText03')"></p>
			</div>
			<div class="itemContent">
				<h3>{{$t('u.aboutUtravelTitle04')}}</h3>
				<p v-html="$t('u.utravelIntroText04')"></p>
			</div>
			<div class="itemContent">
				<h3>{{$t('u.aboutUtravelTitle05')}}</h3>
				<p v-html="$t('u.utravelIntroText05')"></p>
			</div>
		</div>
		<div class="contactUs" ref="contactUs">
			<div class="contactUsBox">
				<div class="contactUsContent">
					<h3>{{$t('u.aboutContactUs')}}</h3>
					<div class="contactType">
						<div class="itemContactType">
							<span>{{$t('u.serviceHot')}}</span>
							<div><span class="left">400-0770-8755</span></div>
						</div>
						<div class="itemContactType">
							<span>{{$t('u.companyEmail')}}</span>
							<div><span class="left">qiyeyouxiang@163com</span></div>
						</div>
						<div class="itemContactType">
							<span>{{$t('u.officalWx')}}</span>
							<div><span class="left">Ulvjia</span></div>
						</div>
						<div class="itemContactType">
							<span>{{$t('u.officalQQ')}}</span>
							<div><span class="left">3386339106</span></div>
						</div>
					</div>
				</div>
			</div>
			<div class="contactUsBg"><img src="../assets/img/cantactUs.png" alt=""></div>
		</div>
	</div>
</template>

<script>
	import { mapGetters , mapActions } from 'vuex';
	
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapGetters([
				'topHeight',
				'scrollTop',
				'isAboutBottom'
				])
		},
		watch: {
			scrollTop(val) {
				let	navH = this.$refs.aboutContent.offsetTop - this.topHeight
				if(navH && navH > 0) {
					if(val > navH) {
						this.toTellTopBg(true)
					}else {
						this.toTellTopBg(false)
					}
				}else {
					navH = this.$refs.aboutContent.offsetTop - this.topHeight
				}
			},
			isAboutBottom(val) {
				let	contactH = this.$refs.contactUs.offsetTop
				if(val) {
					this.$nextTick(() => {
						window.scrollTo(0,contactH)
						this.toAboutBottom(false)
					})
				}
			}
		},
		methods: {
			...mapActions([
				'toTellTopBg',
				'toAboutBottom'
				]),
		},
		mounted() {
			if(this.isAboutBottom) {
				this.$nextTick(() => {
					setTimeout(() => {
						let	contactH = this.$refs.contactUs.offsetTop
						window.scrollTo(0,contactH)
						this.toAboutBottom(false)
					}, 200)
				})
			}
		}
	}
</script>

<style scoped>
	#aboutUs {
		width: 100%;
		height: auto;
	}
	.aboutBanner {
		width: 100%;
		height: auto;
	}
	.aboutContent {
		padding: 1.2rem 0.4rem 0;
	}
	.itemContent {
		margin-bottom: 1.2rem;
	}
	.itemContent>h3 {
		font-size: 0.4rem;
		color: #FFFFFF;
		margin-bottom: 0.4rem;
		font-weight: 500;
		text-align: center;
	}
	.itemContent>p {
		font-size: 16px;
		color: #D5D6D9;
		line-height: 0.44rem;
		margin-bottom: 0.3rem;
	}
	.contactUs {
		width: 100%;
		position: relative;
		height: auto;
	}
	.contactUsBg {
		position: relative;
		z-index: 1;
		width: 100%;
		height: auto;
	}
	.contactUsBox {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.contactUsContent {
		width: 6.7rem;
		height: auto;
		padding: 0.3rem 0 0.6rem;
		background-color: #FFFFFF;
		border-radius: 0.08rem;
	}
	.contactUsContent>h3 {
		font-size: 0.32rem;
		color: #000000;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid #CCCCCC;
		text-align: center;
	}
	.contactType {
		padding: 0 0.6rem;
	}
	.itemContactType {
		margin-top: 0.3rem;
	}
	.itemContactType>span {
		display: block;
		font-size: 0.28rem;
		color: #B3B3B3;
		margin-bottom: 0.2rem;
	}
	.itemContactType>div {
		font-size: 0.4rem;
		color: #000000;
		overflow: hidden;
	}
	.itemContactType>div>span {
		padding-bottom: 0.2rem;
		display: flex;
		border-bottom:  1px solid #979797;
	}
	.itemContactType>div>span::after {
		content: '';
		display: block;
		width: 0.8rem;
	}
</style>