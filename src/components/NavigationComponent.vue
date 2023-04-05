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
        position: sticky;
        margin-top: 155px;
        margin-left: 4px;

    }
    .not-collapsed{
        position: sticky;
        width: 210px;
    }
</style>