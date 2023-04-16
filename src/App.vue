<template>
  <div class="base-app">
    <el-container>
      <el-header class="header">
        <YTLogoComp/>
        <SearchBarComp/>
        <AccHeadComp/>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <navigation-component/>
        </el-aside>
        <el-main class="main">
          <div>
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import YTLogoComp from './components/YTLogoComp.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import SearchBarComp from './components/SearchBarComp.vue';
import AccHeadComp from './components/AccHeadComp.vue'
import { useMainStore } from './pinia/mainStore';


export default {
  components: {
      NavigationComponent, YTLogoComp, SearchBarComp, AccHeadComp
    },
    setup() {
      const mainStore = useMainStore();
      return { mainStore };
    },
    mounted() {
        this.setToggles();
    },
    methods: {
      setToggles(){
        this.mainStore.toggleMenu = false;
      }
    },
}
</script>

<style scoped>
#app{
  background-color: #0f0f0f;
}
.base-app{
  background-color: #0f0f0f;
  font-family: Roboto, Arial, sans-serif;
  color: #f1f1f1;
  height: 100vh;
  overflow-y: hidden;

}
.base-app::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background-color: #0f0f0f;
  @apply mb-4
}
.main{
  position: sticky;
  padding: 0;
}
.main::-webkit-scrollbar{
  display: none;
}

</style>
