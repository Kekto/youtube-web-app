<template>
  <div class="base-app">
    <el-contained>
      <el-header height="40px">Header</el-header>
        <el-container>
        <el-aside width="auto">
          <navigation-component/>
        </el-aside>
        <el-main>
          <router-view/>
          Main
        </el-main>
      </el-container>
    </el-contained>

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
  height: 99.3vw;
}

</style>
