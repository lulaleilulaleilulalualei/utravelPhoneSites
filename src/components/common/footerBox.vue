<template>
	<div id="footerBox">
		<div class="smallIconBox">
			<div class="wxIcon" @click="showQrCode('wx')"><img src="../../assets/img/wx_icon.png" alt=""></div>
			<div class="smallWxIcon" @click="showQrCode('small')"><img src="../../assets/img/smallWx_icon.png" alt=""></div>
		</div>
		<div class="footerLinkText">
			<div @click="jumpToRoute('about', 1)">{{$t('u.aboutUs')}}</div>
			<div @click="jumpToRoute('about', 2)">{{$t('u.contactUs')}}</div>
			<div @click="AppUpload">{{$t('u.nowLoad')}}</div>
		</div>
		<p class="companyRecords">湘ICP备 15011900号-3 &copy;-2020 湖南犇车网络科技有限公司</p>

		<transition name="fade">
			<template v-if="isShowCode">
				<div class="showQrcode" @click="closeBox">
					<div class="qrCodeBox">
						<img :src="codeType == 'wx'? wxImg: smallImg" alt="">
					</div>
				</div>
			</template>
		</transition>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				isShowCode: false,
				codeType: 'wx',
				wxImg: require('../../assets/img/Official_code.jpg'),
				smallImg: require('../../assets/img/small_App_code.jpg')
			}
		},
		methods: {
			jumpToRoute(type, action) {//1是不做操作，2跳到指定位置
				if(type == 'home') {
					this.$router.push({
						path: '/',
					})
				}else if(type == 'about') {
					this.$router.push({
						path: '/aboutUs',
					})
				}
				if(action == 1) {
					document.documentElement.scrollTop = 0
					window.pageYOffset = 0
					document.body.scrollTop = 0
				}
				
			},
			AppUpload() { //跳App下载
				this.$api.openApp()
			},
			showQrCode(type) {
				this.codeType = type
				this.isShowCode = true
			},
			closeBox(e) {
				if(e.target.className.indexOf('showQrcode') != -1) {
					this.isShowCode = false
				}
			}
		}
	}
</script>

<style scoped>
	#footerBox {
		width: 100%;
		padding: 0.6rem 0;
		background-color: #000;
	}
	.smallIconBox {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 0.4rem;
	}
	.smallIconBox>div {
		width: 0.44rem;
		height: 0.44rem;
	}
	.wxIcon {
		margin-right: 0.4rem;
	}
	.footerLinkText {
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-bottom: 0.4rem;
		padding: 0 0.4rem;
	}
	.footerLinkText>div {
		flex: 1;
		text-align: center;
	}
	.companyRecords {
		font-size: 0.18rem;
		color: #FFFFFF;
		width: 100%;
		text-align: center;
	}
	.showQrcode {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 200;
		background-color: rgba(0,0,0,0.4);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.qrCodeBox {
		width: 3rem;
		height: auto;
	}
</style>