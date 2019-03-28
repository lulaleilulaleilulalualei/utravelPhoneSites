<template>
	<div class="carClub">
		<h3>{{$t('u.selfCircleTitle03')}}</h3>
		<div class="carClubIntro">
			<div class="carClubIntroText">
				<p v-html="$t('u.utravelIntro')"></p>
			</div>
			<div class="carClubIntroImg">
				<img src="../../assets/img/carClubBg.png"alt="">
			</div>
		</div>
		<h3 class="middleTitle">{{$t('u.selfCircleTitle04')}}</h3>
		<div class="carClubMain">
			<div class="itemContentImg"><img src="../../assets/img/Group 27.png" alt=""></div>
			<h4>{{$t('u.selfGourpTitle01')}}</h4>
			<p>{{$t('u.selfGourpSmallTitle01')}}</p>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText01')}}</span></div>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText02')}}</span></div>
		</div>
		<div class="carClubMain">
			<div class="itemContentImg"><img src="../../assets/img/Group 29.png" alt=""></div>
			<h4>{{$t('u.selfGourpTitle02')}}</h4>
			<p>{{$t('u.selfGourpSmallTitle02')}}</p>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText03')}}</span></div>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText04')}}</span></div>
		</div>
		<div class="carClubMain">
			<div class="itemContentImg"><img src="../../assets/img/Group 30.png" alt=""></div>
			<h4>{{$t('u.selfGourpTitle03')}}</h4>
			<p>{{$t('u.selfGourpSmallTitle03')}}</p>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText05')}}</span></div>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText06')}}</span></div>
		</div>
		<div class="carClubMain">
			<div class="itemContentImg"><img src="../../assets/img/Group 18.png" alt=""></div>
			<h4>{{$t('u.selfGourpTitle04')}}</h4>
			<p>{{$t('u.selfGourpSmallTitle04')}}</p>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText07')}}</span></div>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText08')}}</span></div>
		</div>
		<div class="carClubMain">
			<div class="itemContentImg"><img src="../../assets/img/Group 13.png" alt=""></div>
			<h4>{{$t('u.selfGourpTitle05')}}</h4>
			<p>{{$t('u.selfGourpSmallTitle05')}}</p>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText09')}}</span></div>
			<div class="itemMainDesc"><b></b><span>{{$t('u.selfGourpSmallText10')}}</span></div>
		</div>
		<div class="carClubBottomBg">
			<img src="../../assets/img/carClubBottomBg.png" alt="">
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.carClub {
		padding-top: 1.2rem;
	}
	.carClub>h3 {
		font-size: 0.4rem;
		color: #FFFFFF;
		margin-bottom: 0.4rem;
		text-align: center;
		font-weight: 500;
		padding: 0 0.4rem;
	}
	.carClub .middleTitle {
		margin-bottom: 0.6rem;
	}
	.carClubIntro {
		position: relative;
		height: auto;
		width: 100%;
		padding-top: 1rem;
		margin-bottom: 1.2rem;
	}
	.carClubIntroText {
		font-size: 0.32rem;
		color: #D5D6D9;
		line-height: 0.44rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: auto;
		padding: 0 0.4rem;
	}
	.carClubIntroImg {
		position: relative;
		z-index: 1;
	}
	.carClubMain {
		padding: 0 0.8rem;
		margin-bottom: 1.2rem;
	}
	.itemContentImg {
		width: 3rem;
		height: 3rem;
		margin: 0 auto;
		margin-bottom: 0.4rem;
	}
	.carClubMain>h4 {
		font-size: 0.32rem;
		color: #FFFFFF;
		text-align: center;
		margin-bottom: 0.4rem;
		font-weight: 500;
	}
	.carClubMain>p {
		font-size: 0.32rem;
		color: #FFFFFF;
		text-align: center;
		margin-bottom: 0.3rem;
	}
	.itemMainDesc {
		display: flex;
		width: 100%;
		height: auto;
		margin-bottom: 0.08rem;
	}
	.itemMainDesc>b {
		display: block;
		width: 0.28rem;
		height: 0.28rem;
		background-color:  #FFB132;
		border-radius: 50%;
		margin-right: 0.2rem;
		position: relative;
		top: 0.08rem;
	}
	.itemMainDesc>span {
		flex: 1;
		display: block;
		font-size: 0.28rem;
		color: #D5D6D9;
		line-height: 0.44rem;
	}
	.carClubBottomBg {
		width: 100%;
		height: auto;
	}
</style>	