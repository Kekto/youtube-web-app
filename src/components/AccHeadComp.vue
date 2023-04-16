<template>
    <div class="account-bar">
        <div class="icon hover">
            <img class="icon-image" style="filter:invert(100%);height:14px" src="@/assets/yt_media_create.svg"/>
        </div>
        <div class="icon hover">
            <img class="icon-image" style="height:24px" src="@/assets/yt_bell_icon.svg"/>
        </div>
        <div class="icon">
            <img class="icon-image" src="@/assets/yt_pfp.svg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccHeadComp',
    components: { 
    },
    data() {
        return {
        }
    },
    }
</script>

<style scoped>
.account-bar{
    display: flex;    
    width: auto;
    position: relative;
    justify-content: center;
    align-content: center;
    height: 40px;
    flex-wrap: nowrap;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 10px;
    cursor: pointer;
}
.icon-image{
    width: 28px;
    height: 28px;
}
.hover:hover{
    border-radius: 50%;
    background-color: #313131;
}
.el-dialog{
    display: flex;
    position: relative;
    --dialog-background-color: #1f1f1f;
}
</style>