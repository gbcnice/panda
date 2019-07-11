<template>
    <div class="fenlei">
        <div class="shujv">
        <ul>
            <li v-for="item in list" >
                <img :src="item.url" class="nvzhuang-img">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        } 
    },
     created(){
           this.getData();
           },
    methods:{
        getData(){
            this.$axios.get("http://localhost:3000/nvzhuang").then((res)=>{
                this.list = res.data
                console.log(res)
            })
        }
    },
}
</script>

<style>
    .fenlei{
        margin-left: 1.85rem;
    }
    .shujv .nvzhuang-img{
        width: 1.17rem;
    }
    .shujv ul{
    
    }
    .shujv ul li{
        float: left;
        width: 1.883437rem;
        height:1.875rem;
        text-align: center;
        background: #fff;
        border: none;
    }
    .shujv ul li img{
        margin: 0 auto;    
        
    }
    li{
        list-style: none;
    }
    ul,li,img,body{
        margin: 0;
        padding: 0;
    }
    img{
        display: block;
    }
</style>

