<template>
    <div class="flex flex-row hover:cursor-pointer">
        <div class="m-2 mr-3 ml-5 w-10 h-10 flex items-center justify-center select-none hover:cursor-pointer hovered rounded-full" @click="isCollapse = !isCollapse">
            <el-icon size="24px" class="h-10" v-if="isCollapse==true"><Expand /></el-icon>
            <el-icon size="24px" class="h-10" v-else><Fold /></el-icon>
        </div>
        <div class="m-2 ml-0 h-10 flex items-center">
            <img class="h-5" src="../assets/yt_logo_icon.png"/>
            <img class="ml-1 h-5 filter-brightness" src="../assets/yt_logo_text.png"/>
        </div>
    </div>
    <!-- COLLAPSED -->
    <div v-if="isCollapse == true" class="flex justify-center items-center flex-col ml-2 w-16">
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col h-fit" >
                <el-icon size="22px"><HomeFilled /></el-icon>
                <span style="font-size: 10px;" class="pt-2">Home</span>
            </div>
        </div>
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col h-fit">
                <div>
                    <img class="filter-reverse h-6" src="../assets/yt_shorts.png"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Shorts</span>
            </div>
        </div>
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col">
                <div>
                    <img class="filter-reverse h-6" src="../assets/yt_subscriptions.jpg"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Subscriptions</span>
            </div>
        </div>
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col">
                <div>
                    <img class="filter-reverse h-6" src="../assets/yt_library.png"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Library</span>
            </div>
        </div>
    </div>
    <!-- UNCOLLAPSED -->
  <el-menu v-if="isCollapse == false"
    default-active="0"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
        <div class="w-6">
            <el-icon size="22px"><HomeFilled /></el-icon>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4">Home</div>
        </template>
    </el-menu-item>
    <el-menu-item index="2">
        <div class="w-6">
            <img class="filter-reverse h-5 w-4 m-1" src="../assets/yt_shorts.png"/>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4"> Shorts</div>
        </template>
    </el-menu-item>
    <el-menu-item index="3">
        <div class="w-6">
            <img class="filter-reverse h-5 w-5 m-1" src="../assets/yt_subscriptions.jpg"/>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4"> Subscriptions</div>
        </template>
    </el-menu-item>
        <!-- DIVIDER -->
    <el-divider class="divider"/>
    <el-menu-item index="4">
        <div class="w-6">
            <img class="filter-reverse h-5 w-5 m-1" src="../assets/yt_library.png"/>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4">Library</div>
        </template>
    </el-menu-item>
    <el-menu-item index="5">
        <div class="w-6">
            <img class="filter-reverse h-5 w-5 m-1" src="../assets/yt_library.png"/>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4">History</div>
        </template>
    </el-menu-item>
    <el-menu-item index="6">
        <div class="w-6">
            <img class="filter-reverse h-5 w-5 m-1" src="../assets/yt_library.png"/>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4">Your videos</div>
        </template>
    </el-menu-item>
    <el-menu-item index="7">
        <div class="w-6">
            <img class="filter-reverse h-5 w-5 m-1" src="../assets/yt_library.png"/>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4">To watch</div>
        </template>
    </el-menu-item>
    <el-menu-item index="8">
        <div class="w-6">
            <img class="filter-reverse h-5 w-5 m-1" src="../assets/yt_library.png"/>
        </div>
        <template #title>
            <div class="wrap-hide-text ml-4">You don't have to know</div>
        </template>
    </el-menu-item>
    SHOW MORE
    <!-- DIVIDER -->
    <el-divider class="divider"/>
    SUBSCRIPTIONS
    <!-- DIVIDER -->
    <el-divider class="divider"/>
    DISCOVER
  </el-menu>
</template>

<script>
  export default {
    name: 'NavigationComponent',
    components: {
    },
    data() {
        return {
            isCollapse: false
        }
    },
  }
</script>
  
<style scoped>
    .hovered:hover{
        background-color: #1f1f1f;
    }

    .el-menu-vertical-demo{
        margin-left: 8px;
        margin-top: 7px;
    }
    .el-menu--collapse{
        background-color: #0f0f0f;
        border: none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        background-color: #0f0f0f;
        border: none;
        width: 200px;
        min-height: 400px;
    }
    .el-menu-item{
        color: #f1f1f1;
        border-radius: 10px;
        height: 40px;
        font-weight: 500;
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
    .filter-brightness{
        filter: brightness(700%);
    }
    .filter-reverse{
        filter:invert();
    }
    .divider{
        margin-top: 5px;
        margin-bottom: 5px;
        opacity: 30%;
    }
    .wrap-hide-text {
        @apply inline-block overflow-hidden text-ellipsis w-36 whitespace-nowrap
    }
</style>