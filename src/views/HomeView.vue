<template>
  <div class="home">
    <div>
      <TagListComp class="tags"/>
    </div>
    <div class="view">
      <div class="cards">
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
      </div>
      <el-divider class="divider"/>
      <div class="cards">
        <ShortsCardComp/>
        <ShortsCardComp/>
        <ShortsCardComp/>
        <ShortsCardComp/>
      </div>
    </div>
  </div>
</template>

<script>
import TagListComp from '@/components/homeComps/TagListComp.vue';
import VideoCardComp from '@/components/homeComps/VideoCardComp.vue';
import ShortsCardComp from '@/components/homeComps/ShortsCardComp.vue'

export default {
  name: 'HomeView',
  components: { TagListComp, VideoCardComp, ShortsCardComp}
}
</script>
<style scoped>
.tags{
  position: fixed;
  padding-top: 12px;
  background-color: #0f0f0f;
  z-index: 2;
  width: -webkit-fill-available;
}
.view{
  justify-content: center;
  display: grid;
  height: calc(100vh - 120px);
  padding-top: 24px;
}
.cards{
  margin-top: 42px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.divider{
  border-color: #3f3f3f;
  border-width: 2px;
  width: auto;
  border-radius: 10px;
  margin-left: 25px;
  margin-right:25px;
}
.view::-webkit-scrollbar{
  display:none;
}
</style>
