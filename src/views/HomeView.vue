<template>
  <div class="home">
    <TagListComp/>
    <div class="cards">
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
      <VideoCardComp/>
    </div>
  </div>
</template>

<script>
import TagListComp from '@/components/homeComps/TagListComp.vue';
import VideoCardComp from '@/components/homeComps/VideoCardComp.vue';

export default {
  name: 'HomeView',
  components: { TagListComp, VideoCardComp}
}
</script>
<style scoped>
.cards{
  margin-top: 42px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 50px;
  justify-content: center;
  overflow-x: hidden;
  max-height: 84.5vh;
}
.cards::-webkit-scrollbar{
  display: none;
}
</style>
