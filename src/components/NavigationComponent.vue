<template>
    <div class="yt-logo">
        <div class="fixed flex flex-row hover:cursor-pointer">
            <div class="m-2 mr-3 ml-5 w-10 h-10 flex items-center justify-center select-none hover:cursor-pointer hovered rounded-full" @click="isCollapse = !isCollapse">
                <el-icon size="24px" class="h-10" v-if="isCollapse==true"><Expand /></el-icon>
                <el-icon size="24px" class="h-10" v-else><Fold /></el-icon>
            </div>
            <div class="m-2 ml-0 h-10 flex items-center">
                <img class="h-5" src="../assets/yt_logo_icon.png"/>
                <img class="ml-1 h-5 filter-brightness" src="../assets/yt_logo_text.png"/>
            </div>
        </div>
    </div>
    <!-- COLLAPSED -->
    <CollMenuComp v-if="isCollapse == true"/>
    <!-- UNCOLLAPSED -->
    <NotCollMenuComp v-if="isCollapse == false" class="not-collapsed"/>
    
</template>

<script>
import CollMenuComp from './CollMenuComp.vue';
import NotCollMenuComp from './NotCollMenuComp.vue'

export default {
    name: 'NavigationComponent',
    components: { 
        CollMenuComp, NotCollMenuComp
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
    .hovered:hover{
        background-color: #1f1f1f;
    }

    .filter-brightness{
        filter: brightness(700%);
    }
    .yt-logo{
        display: flex;
        background-color:#0f0f0f;
        height: 48px;
        width: 218px;
    }
    .not-collapsed{
        max-height: 93vw;
        @apply fixed
    }
    .not-collapsed::-webkit-scrollbar{
        background-color:#0f0f0f;
        width: 0.4em;
    }
    .not-collapsed:not(:hover){
        overflow-y: hidden;
    }
    .not-collapsed::-webkit-scrollbar-thumb{
        border-color: #0f0f0f;
        border-width: 10px;
        background-color:#5f5f5f;
        border-radius: 10px;
    }
</style>