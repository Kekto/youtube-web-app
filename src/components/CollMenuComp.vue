<template>
 <!-- COLLAPSED -->
 <div class="flex justify-center items-center flex-col w-16">
    <div style="position: fixed;" class="ml-2">
        <div class="icon-container">
            <div class="flex justify-center items-center flex-col h-fit" >
                <el-icon size="22px"><HomeFilled /></el-icon>
                <span style="font-size: 10px;" class="pt-2">Home</span>
            </div>
        </div>
        <div class="icon-container">
            <div class="flex justify-center items-center flex-col h-fit">
                <div>
                    <img class="filter-reverse h-5" src="../assets/yt_shorts.png"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Shorts</span>
            </div>
        </div>
        <div class="icon-container">
            <div class="flex justify-center items-center flex-col">
                <div>
                    <img class="filter-reverse h-6" src="../assets/yt_subscriptions.jpg"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Subscriptions</span>
            </div>
        </div>
        <div class="icon-container">
            <div class="flex justify-center items-center flex-col">
                <div>
                    <img class="filter-reverse h-6" src="../assets/yt_library.png"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Library</span>
            </div>
        </div>
    </div>
 </div>

</template>

<script>
export default {
    name: 'CollMenuComp',
    components: {
    },
    data() {
        return {
        }
    },
  }
</script>

<style scoped>
.icon-container{
    @apply hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer
}
.hovered:hover{
    background-color: #1f1f1f;
}
.filter-reverse{
    filter:invert();
}
</style>