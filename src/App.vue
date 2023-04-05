<template>
  <div class="base-app">
    <el-container>
      <el-header class="header">
        <YTLogoComp/>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <navigation-component/>
        </el-aside>
        <el-main class="main">
          <div style="position: fixed;">
            <router-view/>
            MAIN
          </div>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import YTLogoComp from './components/YTLogoComp.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import { useMainStore } from './pinia/mainStore';

export default {
  components: {
      NavigationComponent, YTLogoComp
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
.base-app{
  background-color: #0f0f0f;
  font-family: Roboto, Arial, sans-serif;
  color: #f1f1f1;
  height: 99.3vw;

}
.base-app::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}
.header{
  height: 44px;
  background-color: #0f0f0f;
  width: 100%;
}
.main{
  position: sticky;
}

</style>
