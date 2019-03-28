<template>
	<div class="clubRecruit">
		<div class="recruitBox">
			<div class="recruitBoxIntro">
				<h3>{{$t('u.recruitClubTitle01')}}</h3>
				<p>{{$t('u.recruitClubText01')}}</p>
				<p>{{$t('u.recruitClubText02')}}</p>
				<p>{{$t('u.recruitClubText03')}}</p>
				<p>{{$t('u.recruitClubText04')}}</p>
			</div>
			<div class="recruitBoxBg"><img src="../../assets/img/carRecruit2.png" alt=""></div>
			<div class="toApply" @click.stop="AppUpload"><span>{{$t('u.applyClub')}}</span></div>
		</div>
		<div class="recruitBox">
			<div class="recruitBoxIntro">
				<h3>{{$t('u.recruitClubTitle02')}}</h3>
				<p>{{$t('u.recruitClubText05')}}</p>
				<p>{{$t('u.recruitClubText06')}}</p>
				<p>{{$t('u.recruitClubText07')}}</p>
				<p>{{$t('u.recruitClubText08')}}</p>
			</div>
			<div class="recruitBoxBg"><img src="../../assets/img/carRecruit1.png" alt=""></div>
			<div class="toApply" @click.stop="AppUpload"><span>{{$t('u.applyClub')}}</span></div>
		</div>
		<div class="recruitBox">
			<div class="recruitBoxIntro">
				<h3>{{$t('u.recruitClubTitle03')}}</h3>
				<p>{{$t('u.recruitClubText09')}}</p>
				<p>{{$t('u.recruitClubText10')}}</p>
				<p>{{$t('u.recruitClubText11')}}</p>
			</div>
			<div class="recruitBoxBg"><img src="../../assets/img/carRecruit3.png" alt=""></div>
			<div class="toApply" @click.stop="AppUpload"><span>{{$t('u.applyClub')}}</span></div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {

			}
		},
		methods: {
			AppUpload() { //跳App下载
				this.$api.openApp()
			},
		}
	}
</script>

<style scoped>
	.clubRecruit {
		padding-top: 1.2rem;
	}
	.recruitBox {
		width: 100%;
		position: relative;
		margin-bottom: 1.2rem;
		min-height: 8rem;
	}
	.recruitBoxIntro {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		padding: 0 0.4rem;
		width: 100%;
		height: auto;
	}
	.recruitBoxIntro>h3 {
		font-size: 0.4rem;
		color: #FFFFFF;
		margin-bottom: 0.4rem;
		text-align: center;
		font-weight: 500;
	}
	.recruitBoxIntro>p {
		font-size: 0.32rem;
		color: #D5D6D9;
		line-height: 0.44rem;
		margin-bottom: 0.4rem;
	}
	.recruitBoxBg {
		position: relative;
		z-index: 1;
		width: 100%;
		height: auto;
	}
	.toApply {
		position: absolute;
		left: 0;
		bottom: 0.6rem;
		z-index: 5;
		width: 100%;
		height: 0.9rem;
	}
	.toApply>span {
		display: block;
		width: 4rem;
		margin: 0 auto;
		height: 100%;
		background-image: linear-gradient(90deg, #FFDF00 0%, #FEA200 100%);
		font-size: 0.36rem;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>