<template>
    <div class="flex flex-row">
        <div class="m-2 ml-6 w-10 h-10 flex items-center justify-center " @click="isCollapse = !isCollapse">
            <el-icon size="24px" class="h-10" v-if="isCollapse==true"><Expand /></el-icon>
            <el-icon size="24px" class="h-10" v-else><Fold /></el-icon>
        </div>
        <div class="m-2 ml-0 h-10 flex items-center">
            <img class="h-5" src="../assets/yt_logo_icon.png"/>
            <img class="ml-1 h-5 filter-reverse" src="../assets/yt_logo_text.png"/>
        </div>
    </div>
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
        <el-icon size="24px"><HomeFilled /></el-icon>
        <template v-if="isCollapse==false" #title>
            <div class=" ml-3">Home</div>
        </template>
    </el-menu-item>
    <el-menu-item index="2">
        <el-icon size="24px"><HomeFilled /></el-icon>
        <template v-if="isCollapse==false" #title>
            <div class=" ml-3"> Shorts</div>
        </template>
    </el-menu-item>
    <el-menu-item index="3">
        <el-icon size="24px"><HomeFilled /></el-icon>
        <template v-if="isCollapse==false" #title>
            <div class=" ml-3"> Subscriptions</div>
        </template>
    </el-menu-item>
    <el-divider class="divider"/>
    <el-menu-item index="4">
        <el-icon size="24px"><HomeFilled /></el-icon>
        <template v-if="isCollapse==false" #title>
            <div class=" ml-3"> Library</div>
        </template>
    </el-menu-item>
    <el-menu-item index="5">
        <el-icon size="24px"><HomeFilled /></el-icon>
        <template v-if="isCollapse==false" #title>
            <div class=" ml-3"> Main Site</div>
        </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'NavigationComponent',
    components: {
    },
    data() {
        return {
            isCollapse: true
        }
    },
  }
</script>
  
<style scoped>
    .el-menu-vertical-demo{
        margin-left: 12px;
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
        filter: brightness(700%);
    }
    .divider{
        margin-top: 5px;
        margin-bottom: 5px;
        opacity: 30%;
    }
</style>