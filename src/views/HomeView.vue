<template>
  <div class="home">
    <div>
      <TagListComp class="tags"/>
    </div>
    <div class="view">
      <div class="cards">
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp :is-playlist="true"/>
        <VideoCardComp/>
      </div>
      <el-divider class="divider"/>
      <div class="title-bar">
        <img class="icon" src="@/assets/yt_shorts_color.png"/>
        <div class="title">Shorts</div>
      </div>
      <div class="cards">
        <ShortsCardComp/>
        <ShortsCardComp/>
        <ShortsCardComp/>
        <ShortsCardComp/>
      </div>
      <el-divider class="divider"/>
      <div class="cards">
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
      </div>
      <el-divider class="divider"/>
      <div class="title-bar">
        <div class="title">Latest YouTube posts</div>
      </div>
      <div class="cards">
        <PostCardComp/>
        <PostCardComp/>
      </div>
      <el-divider class="divider"/>
      <div class="cards">
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
        <VideoCardComp/>
      </div>
    </div>
  </div>
</template>

<script>
import TagListComp from '@/components/homeComps/TagListComp.vue';
import VideoCardComp from '@/components/homeComps/VideoCardComp.vue';
import ShortsCardComp from '@/components/homeComps/ShortsCardComp.vue'
import PostCardComp from '@/components/homeComps/PostCardComp.vue';

export default {
  name: 'HomeView',
  components: { TagListComp, VideoCardComp, ShortsCardComp, PostCardComp}
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
  padding-top: 42px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding-bottom: 42px;
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
.title-bar{
  margin-left: 80px;
  padding: 10px;
  height:24px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.icon{
  height: 20px;
  width: 16px;
  min-height: 20px;
  min-width: 16px;
}
.title{
  font-size: 20px;
}
</style>
