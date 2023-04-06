<template>
    <div class="yt-logo">
        <div class="flex flex-row hover:cursor-pointer">
            <div class=" mt-2 w-10 h-10 flex items-center justify-center select-none hover:cursor-pointer hovered rounded-full" @click="this.toggleMenu()">
                <el-icon size="24px" class="h-10" v-if="this.getToggleMenuVal ==true"><Expand /></el-icon>
                <el-icon size="24px" class="h-10" v-else><Fold /></el-icon>
            </div>
            <div class="m-2 ml-5 h-10 flex items-center">
                <img class="h-5" src="../assets/yt_logo_icon.png"/>
                <img class="ml-1 h-5 filter-brightness" src="../assets/yt_logo_text.png"/>
            </div>
        </div>
    </div>
</template>
   
<script>
import { useMainStore } from '@/pinia/mainStore.js';

export default {
    name: 'YTLogoComp',
    components: {
    },
    setup() {
      const mainStore = useMainStore();
      return { mainStore };
    },
    data() {
        return {
        }
    },
    computed:{
        getToggleMenuVal(){
            return this.mainStore.getToggleMenu;
        }
    },
    methods: {
        toggleMenu(){
            this.mainStore.toggleMenu = !this.mainStore.toggleMenu
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
</style>