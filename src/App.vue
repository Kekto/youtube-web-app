<template>
  <div class="base-app">
    <el-container>
      <el-aside width="auto">
        <navigation-component/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';

export default {
  components: {
      NavigationComponent
    },
}
</script>

<style>
.base-app{
  background-color: #0f0f0f;
  font-family: Roboto, Arial, sans-serif;
  color: #f1f1f1;
  height: 100vw;
}
</style>
