<template>
<el-menu
    default-active="1"
  >
  <div style="width: 210px;" class="el-menu-vertical-demo">
    <!-- DEFAULT MENU -->
        <DefaultMenuComp/>
    <!-- DIVIDER -->
    <el-divider class="divider"/>
    <!-- PERSONAL MENU -->
        <PersonalMenuComp/>
    <!-- DIVIDER -->
    <el-divider class="divider"/>
        <SubsMenuComp/>
    <!-- DIVIDER -->
    <el-divider class="divider"/>
        <DiscoverMenuComp/>
    <!-- DIVIDER -->
    <el-divider class="divider"/>
        <MoreYTComp/>
    <!-- DIVIDER -->
    <el-divider class="divider"/>
    SETTINGS
    <!-- DIVIDER -->
    <el-divider class="divider"/>
    INFO
</div>
</el-menu>


</template>

<script>
import DefaultMenuComp from './menuComps/DefaultMenuComp.vue'
import PersonalMenuComp from './menuComps/PersonalMenuComp.vue'
import SubsMenuComp from './menuComps/SubsMenuComp.vue';
import DiscoverMenuComp from './menuComps/DiscoverMenuComp.vue';
import MoreYTComp from './menuComps/MoreYTComp.vue'

export default {
    name: 'NotCollMenuComp',
    components: { 
        SubsMenuComp, PersonalMenuComp, DefaultMenuComp, DiscoverMenuComp, MoreYTComp
    },
    data() {
        return {
            isCollapse: false,
            playlistToggle: false,
            subToggle: false
        }
    },
  }
</script>

<style scoped>

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        background-color: #0f0f0f;
        border: none;
        width: 220px;
        overflow-x: hidden;
        max-height: 93vh;
    }
    .el-menu-vertical-demo::-webkit-scrollbar{
        background-color:#0f0f0f;
        width: 0.4em;
    }
    .el-menu-vertical-demo:not(:hover){
        overflow-y: hidden;
    }
    .el-menu-vertical-demo::-webkit-scrollbar-thumb{
        border-color: #0f0f0f;
        border-width: 10px;
        background-color:#5f5f5f;
        border-radius: 10px;
    }
    .divider{
        opacity: 30%;
        @apply m-2 right-2
    }
</style>