<template>
    <!-- COLLAPSED -->
    <CollMenuComp v-if="this.getToggleMenuVal == true" class="collapsed"/>
    <!-- UNCOLLAPSED -->
    <NotCollMenuComp v-if="this.getToggleMenuVal == false" class="not-collapsed"/>
</template>

<script>
import { useMainStore } from '@/pinia/mainStore';
import CollMenuComp from './CollMenuComp.vue';
import NotCollMenuComp from './NotCollMenuComp.vue'

export default {
    name: 'NavigationComponent',
    components: { 
        CollMenuComp, NotCollMenuComp
    },
    setup() {
      const mainStore = useMainStore();
      return { mainStore };
    }, 
    computed:{
        getToggleMenuVal(){
            return this.mainStore.getToggleMenu;
        }
    },
    data() {
        return {
        }
    },
}
</script>
  
<style scoped>
    .collapsed{
        margin-left: 8px;
        height: 94vh;
        justify-content: start;
        overflow-y: hidden;
    }
    .not-collapsed{
        margin-left: 8px;
        margin-top: 7px;
        width: 220px;
        padding-right: 10px;

        background-color: #0f0f0f;
    }
</style>