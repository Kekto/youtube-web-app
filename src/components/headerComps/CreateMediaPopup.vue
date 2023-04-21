<template>
    <div class="card-popup">
        <div class="card-popup-content">
            <div class="card-popup-item">
                <img class="img inverted" src="@/assets/yt_yourvideos.png" />
                <div class="card-popup-item-text">Upload video</div>
            </div>
            <div class="card-popup-item">
                <img class="img" src="@/assets/yt_live.svg" />
                <div class="card-popup-item-text">Go live</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateMediaPopup',
    components: { 
    },
    props:{
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods:{
    },
    }
</script>

<style scoped>
.card-popup{
    position: absolute;
    display: block;
    height: auto;
    width: max-content;
    background-color: #313131;
    z-index: 100;
    border-radius: 8px;
    left:50px;
    transform: translate(-100%,0);
}
.card-popup-content{
    padding-top:8px;
    padding-bottom:8px;
    display: flex;
    flex-direction: column;
}
.card-popup-item{
    padding-left: 16px;
    padding-right: 12px;
    font-size: 14px;
    height: 40px;
    display:flex;
    align-items: center;
    cursor: pointer;
}
.card-popup-item:hover{
    background-color: #515151;
}
.card-popup-item-text{
    padding-right: 24px;
}
.img{
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    margin-right: 12px;
}
.inverted{
    filter: invert(100%);
}
</style>