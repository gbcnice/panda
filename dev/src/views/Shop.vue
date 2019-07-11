<template>
    <div class="shop-head">
        <header>
            <a>
                <i class="iconfont">&#xe667;</i>
                <span>卷皮</span>
                <i>搜索</i>
            </a>
            <button class="iconfont">&#xe684;</button>
        </header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                    <img :src="item">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
          
          
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
    data() {
        return {
            banner:[]
        }
    },
    watch: {
        banner() {
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay:{
                        delay:3000,
                        disableOnInteraction:false
                    },
                    //如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
                
                })  
            })//延迟回调函数的执行，直到dom就绪
        }
    },
    created() {
        this.$axios.get("http://localhost:3000/bannerList"
        ).then((res)=>{
            this.banner = res.data;
        })
    },
}
</script>

<style lang="scss">
@import '../assets/extend.scss';
.swiper-container .swiper-wrapper img{
    height: 2.9rem;
}
.shop-head header{
    height: 0.88rem;
    background: white;
    padding-left:0.3rem;
    display: flex;
    align-items: center;
    a{
        border-radius: 10px;
        @include h(0.59rem);
        line-height: 0.59rem;
        background: #f2f2f2;
        flex: 1;
        span{
            color: $active;
        }
        i{
            padding: 0 0.1rem;
        }
    }
    button{
        width: 0.9rem;
        @include h(0.9rem);
        background: none;
        border: none;
        font-size: 20px;
        color: rgb(153,153,153);
    }
}
</style>