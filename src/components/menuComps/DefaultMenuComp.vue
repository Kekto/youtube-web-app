<template>
    <!-- DEFAULT MENU -->
    <el-menu-item index="1">
        <div class="min-image">
            <el-icon size="22px"><HomeFilled /></el-icon>
        </div>
        <template #title>
            <div class="title wrap-hide-text">Home</div>
        </template>
    </el-menu-item>
    <el-menu-item index="2">
        <div class="min-image">
            <img class="image filter-reverse" style="width: 18px;" src="@/assets/yt_shorts.png"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text"> Shorts</div>
        </template>
    </el-menu-item>
    <el-menu-item index="3">
        <div class="min-image">
            <img class="image filter-reverse" src="@/assets/yt_subscriptions.jpg"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text"> Subscriptions</div>
        </template>
    </el-menu-item>
</template>

<script>
export default {
    name: 'DefaultMenuComp',
    components: { 
    },
    data() {
        return {
            playlistToggle: false,
        }
    },
    }
</script>

<style scoped>
    .el-menu-item{
        color: #f1f1f1;
        border-radius: 10px;
        height: 40px;
        font-weight: 500;
        width: 200px;
        padding: 0;
    }
    .el-menu-item:hover{
        background-color: #1f1f1f;
    }
    .el-menu-item.is-active{
        color: #f1f1f1;    
        background-color: #1f1f1f;
    }
    .el-menu-item.is-active:hover{
        background-color: #313131;
    }
    .filter-reverse{
        filter:invert();
    }
    .min-image{
        min-width: 28px;
    }
    .image{
        @apply
        h-5 
        w-5 
        m-1
    }
    .title{
        @apply
        ml-3 
        flex 
        flex-row 
        items-center 
        justify-between
    }
    .wrap-hide-text {
        width: 120px;
        max-width: fit-content;
        @apply 
        inline-block 
        overflow-hidden 
        text-ellipsis 
        whitespace-nowrap
    }
</style>