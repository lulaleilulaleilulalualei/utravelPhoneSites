<template>
	<div class="selfCicle">
		<h3>{{$t('u.selfCircleTitle01')}}</h3>
		<div class="cicleContentShow">
			<div class="topText">
				<p>{{$t('u.selfCircleSmall01')}}  / {{$t('u.selfCircleSmall02')}} / {{$t('u.selfCircleSmall03')}}</p>
				<p>{{$t('u.selfCircleSmallText01')}}</p>
			</div>
			<div class="imgShowBox">
				<swiper :options="swiperOption1" ref="swiper1">
				    <swiper-slide v-for="(item,index) in group1Arr" :key="index">
				    	<div class="swiperImg">
							<img alt="" :src="item">
				    	</div>
				    </swiper-slide>
			  </swiper>
			</div>
		</div>
		<div class="cicleContentShow">
			<div class="topText">
				<p>{{$t('u.selfCircleSmall04')}}  / {{$t('u.selfCircleSmall05')}} / {{$t('u.selfCircleSmall06')}}</p>
				<p>{{$t('u.selfCircleSmallText04')}}</p>
			</div>
			<div class="imgShowBox">
				<swiper :options="swiperOption2" ref="swiper2">
			    <!-- slides -->
				    <swiper-slide v-for="(item,index) in grounp2Arr" :key="index">
				    	<div class="swiperImg">
							<img alt="" :src="item">
				    	</div>
				    </swiper-slide>
			  </swiper>
			</div>
		</div>
		<h3>{{$t('u.selfCircleTitle02')}}</h3>
		<div class="allUserWorld">
			<img src="../../assets/img/world_img.jpg" alt="">
		</div>
		<div class="cicleBottomImg">
			<img src="../../assets/img/cicleBottom.png" alt="">
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	export default {
		data() {
			return {
				group1Arr:[
					require('../../assets/img/hot_1.png'),
					require('../../assets/img/attention_1.png'),
					require('../../assets/img/video_1.png'),
				],
				grounp2Arr: [
					require('../../assets/img/recommend_2.png'),
					require('../../assets/img/selfDirving_2.png'),
					require('../../assets/img/carClub_2.png')
				],
				swiperOption1: {
		          effect: 'fade',
		          loop: true,
				  observer:true,
            	  observeParents:true,
				  autoplayDisableOnInteraction : false,
            	  autoplay: true,
				  speed:500
		        },
		        swiperOption2: {
		          effect: 'fade',
		          loop: true,
				  observer:true,
            	  observeParents:true,
				  autoplayDisableOnInteraction : false,
            	  autoplay: true,
				  speed:500
		        },
			}
		},
		components: { swiper,swiperSlide},
		methods: {

		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	.selfCicle {
		padding-top: 1.2rem;
	}
	.selfCicle>h3 {
		font-size: 0.4rem;
		color: #FFFFFF;
		font-weight: 500;
		margin-bottom: 0.6rem;
		text-align: center;
	}
	.cicleContentShow {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1.2rem;
	}
	.topText {
		width: 100%;
		height: auto;
		margin-bottom: 0.6rem;
		font-size: 0.32rem;
		color: #D5D6D9;
		text-align: center;
		line-height: 0.44rem;
	}
	.imgShowBox {
		width: 5.4rem;
		height: 10.8rem;
		background: url('../../assets/img/phoneBg.png') no-repeat center;
		background-size: 100%;
		overflow: hidden;
		position: relative;
	}
	.swiperImg {
		width: 100%;
		height: 100%;
		padding: 0.36rem 0.34rem;
	}
	.allUserWorld {
		width: 100%;
		height: auto;
		margin-bottom: 1.2rem;
	}
	.cicleBottomImg {
		width: 100%;
		height: auto;
	}
	.swiper-container {
		width: 100%;
		height: 100%;
	}
</style>