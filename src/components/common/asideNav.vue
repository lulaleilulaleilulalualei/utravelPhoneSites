<template>
	<div id="asideNav" :style="{height: navH, transform: pageMove}">
		<div class="closeBox" @click="closeNavBox"><img src="../../assets/img/close.png" alt=""></div>
		<div class="navList">
			<div class="itemNav" @click="jumpToRoute('home', 1)">
				<span>{{$t('u.home')}}</span>
			</div>
			<div class="itemNav" @click="jumpToRoute('about', 1)">
				<span>{{$t('u.aboutUs')}}</span>
			</div>
			<div class="itemNav" @click="jumpToRoute('about', 2)">
				<span>{{$t('u.contactUs')}}</span>
			</div>
			<div class="itemNav" @click="AppUpload">
				<span>{{$t('u.downloadApp')}}</span>
			</div>
		</div>
		<div class="langSelect">
			<div class="langBox" :style="{height: defatultH}">
				<div class="langText" @click.stop="selectLang(item.langType,index)" v-for="(item, index) in langSelect"><span>{{item.name}}</span><b :style="{transform: iconRotate}" v-if="item.isActive"></b></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters , mapActions } from 'vuex';
	
	export default {
		data() {
			return {
				langSelect: [
					{
						name: '中文',
						langType: 'zh-CN',
						isActive: true
					},
					{
						name: 'English',
						langType: 'en',
						isActive: false
					}
				],
				defatulType: 'zh-CN',
				isOpenSelect: false,
				defatultH: '0.6rem',
				iconRotate: 'rotate(45deg)',
				navH: 'auto',
				pageMove: 'translate3d(0,0,0)',
			}
		},
		props: {
			isShowBox: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			isShowBox(val) {
				if(val) {
					this.pageMove = 'translate3d(2.9rem,0,0)'
				}else {
					this.pageMove = 'translate3d(0,0,0)'
				}
			}
		},
		methods: {
			...mapActions([
				'toAboutBottom'
				]),
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
				this.$emit('closeBox', false)
				this.defatultH = '0.6rem'
				this.isOpenSelect = false
				this.iconRotate = 'rotate(45deg)'
				if(action == 1) {
					window.scrollTo(0,0)
				}else if(action == 2) {
					this.toAboutBottom(true)
				}
				
			},
			AppUpload() { //跳App下载
				this.$api.openApp()
			},
			selectLang(type,index) {
				if(this.isOpenSelect) {
					if(type == this.defatulType) {
						this.defatultH = '0.6rem'
						this.isOpenSelect = false
						this.iconRotate = 'rotate(45deg)'
					}else {
						this.langSelect.map((v, i) => {
							if(index == i) {
								v.isActive = true
							}else {
								v.isActive = false
							}
						})
						this.langSelect.reverse()
						this.defatultH = '0.6rem'
						this.isOpenSelect = false
						this.iconRotate = 'rotate(45deg)'
						this.defatulType = type
						this.$i18n.locale = type
					}
					this.$emit('closeBox', false)
				}else {
					this.defatultH = '1.2rem'
					this.isOpenSelect = true
					this.iconRotate = 'rotate(-135deg)'
				}
			},
			closeNavBox() {
				this.$emit('closeBox', false)
				this.defatultH = '0.6rem'
				this.isOpenSelect = false
				this.iconRotate = 'rotate(45deg)'
			},
		},
		created() {
			this.navH = window.innerHeight + 'px'
		}
	}
</script>

<style scoped>
	#asideNav {
		position: fixed;
		z-index: 100;
		left: -2.9rem;
		width: 2.9rem;
		background-color: #000;
		padding-top: 1.6rem;
		transition-duration: 300ms;
	}
	.closeBox {
		position: absolute;
		top: 0.32rem;
		left: 0.48rem;
		width: 0.28rem;
		height: 0.28rem;
	}
	.itemNav {
		width: 100%;
		padding: 0.36rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.3rem;
		color: #FFFFFF;
	}
	.itemNav:not(:last-child) {
		border-bottom: 1px solid #292929;
	}
	.langSelect {
		position: absolute;
		bottom: 3rem;
		left: 0;
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.langBox {
		width: 1.6rem;
		position: relative;
		border: 1px solid #FFFFFF;
		border-radius: 0.04rem;
		overflow: hidden;
	}
	.langText {
		width: 100%;
		height: 0.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.2rem;
		font-size: 0.22rem;
		color: #fff;
	}
	.langText>span {
		display: block;
	}
	.langText>b {
		display: block;
		border: 0.06rem solid #fff;
		border-left-color: transparent;
		border-top-color: transparent;
		position: relative;
		top: -0.03rem;
		transition: all 0.3s;
	}
	.langList {
		position: absolute;
		top: 0.36rem;
		left: 0;
		/* border: 1px solid #fff; */
		border-radius: 0.04rem;
		width: 100%;
		height: auto;
	}
	.langList>a {
		width: 100%;
		padding: 0.1rem 0.2rem;
		display: block;
		color: #fff;
		font-size: 0.22rem;
	}
	.langList>a{
		border-bottom: 1px solid #fff;
	}
</style>