<template>
<el-menu
    default-active="1"
  >
  <div style="width: 210px; margin-top: 7px; position: fixed;" class="el-menu-vertical-demo">
    <el-menu-item index="1">
        <div class="min-image">
            <el-icon size="22px"><HomeFilled /></el-icon>
        </div>
        <template #title>
            <div class="title wrap-hide-text">Home</div>
        </template>
    </el-menu-item>
    <el-menu-item index="2">
        <div class="min-image">
            <img class="image filter-reverse" style="width: 18px;" src="../assets/yt_shorts.png"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text"> Shorts</div>
        </template>
    </el-menu-item>
    <el-menu-item index="3">
        <div class="min-image">
            <img class="image filter-reverse" src="../assets/yt_subscriptions.jpg"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text"> Subscriptions</div>
        </template>
    </el-menu-item>

    <!-- DIVIDER -->
    <el-divider class="divider"/>
    <el-menu-item index="4">
        <div class="min-image">
            <img class="image filter-reverse" src="../assets/yt_library.png"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">Library</div>
        </template>
    </el-menu-item>
    <el-menu-item index="5">
        <div class="min-image">
            <img class="image filter-reverse" src="../assets/yt_history.svg"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">History</div>
        </template>
    </el-menu-item>
    <el-menu-item index="6">
        <div class="min-image">
            <img class="image filter-reverse" src="../assets/yt_yourvideos.png"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">Your videos</div>
        </template>
    </el-menu-item>
    <el-menu-item index="7">
        <div class="min-image">
            <img class="image filter-reverse" src="../assets/yt_towatch.svg"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">To watch</div>
        </template>
    </el-menu-item>
    <el-menu-item index="8">
        <div class="min-image">
            <img class="image filter-reverse" src="../assets/yt_playlist.svg"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">Playlist #1</div>
        </template>
    </el-menu-item>
    <div v-if="playlistToggle == false">
        <div class="el-menu-item" @click="playlistToggle = !playlistToggle">
            <div class="min-image">
                <el-icon size="22px"><ArrowDown /></el-icon>
            </div>
            <div class="title wrap-hide-text">Show more</div>
        </div>
    </div>
    <div v-if="playlistToggle == true">
        <el-menu-item index="9">
            <div class="min-image">
                <img class="image filter-reverse" src="../assets/yt_playlist.svg"/>
            </div>
            <template #title>
                <div class="title wrap-hide-text">Playlist #2</div>
            </template>
        </el-menu-item>
        <el-menu-item index="10">
            <div class="min-image">
                <img class="image filter-reverse" src="../assets/yt_playlist.svg"/>
            </div>
            <template #title>
                <div class="title wrap-hide-text">Random Playlist</div>
            </template>
        </el-menu-item>
        <el-menu-item index="11">
            <div class="min-image">
                <img class="image filter-reverse" src="../assets/yt_playlist.svg"/>
            </div>
            <template #title>
                <div class="w-36 title wrap-hide-text">Playlist with a name too long to fit</div>
            </template>
        </el-menu-item>
        <el-menu-item index="12">
            <div class="min-image">
                <img class="image filter-reverse" src="../assets/yt_playlist.svg"/>
            </div>
            <template #title>
                <div class="title wrap-hide-text">Playlist #3</div>
            </template>
        </el-menu-item>
        <div class="el-menu-item" @click="playlistToggle = !playlistToggle">
            <div class="min-image">
                <el-icon size="22px"><ArrowUp /></el-icon>
            </div>
            <div class="title wrap-hide-text">Show Less</div>
        </div>
    </div>
    <!-- DIVIDER -->
    <el-divider class="divider"/>
    <div class="ml-4 mt-4 m-2">
        Subscriptions
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User with a name too long to fit</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User #4asdasdasd</div>
            <div v-if="true" class="right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User asdasdasdas</div>
            
        </div>
    </div>
    <div v-if="!subToggle" class="el-menu-item" @click="subToggle = !subToggle">
        <div class="min-image">
            <el-icon size="22px"><ArrowDown/></el-icon>
        </div>
        <div class="title wrap-hide-text">Show More</div>
    </div>
    <div v-if="subToggle">
        <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="../assets/yt_pfp.svg"/>
        </div>
        <div class="title">
            <div class="wrap-hide-text">Random User</div>
            <div class="relative right ml-3 m-2">
                <div class="blue-dot"></div>
            </div>
        </div>
    </div>
        <div class="el-menu-item" @click="subToggle = !subToggle">
            <div class="min-image">
                <el-icon size="22px"><ArrowUp /></el-icon>
            </div>
            <div class="title wrap-hide-text">Show Less</div>
        </div>
    </div>
    <!-- DIVIDER -->
    <el-divider class="divider"/>
    DISCOVER
</div>
</el-menu>


</template>

<script>
export default {
    name: 'NotCollMenuComp',
    components: {
    },
    data() {
        return {
            isCollapse: false,
            playlistToggle: false,
            subToggle: false
        }
    },
  }
</script>

<style scoped>
.hovered:hover{
        background-color: #1f1f1f;
    }
    .el-menu-vertical-demo{
        margin-left: 8px;

    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        background-color: #0f0f0f;
        border: none;
        width: 220px;
        overflow-x: hidden;
        max-height: 90vh;
        padding-bottom: 6vh;
        overflow-y: auto;
    }
    .el-menu-vertical-demo::-webkit-scrollbar{
        background-color:#0f0f0f;
        width: 0.4em;
    }
    .el-menu-vertical-demo:not(:hover){
        overflow-y: hidden;
    }
    .el-menu-vertical-demo::-webkit-scrollbar-thumb{
        border-color: #0f0f0f;
        border-width: 10px;
        background-color:#5f5f5f;
        border-radius: 10px;
    }
    .el-menu-item{
        color: #f1f1f1;
        border-radius: 10px;
        height: 40px;
        font-weight: 500;
        width: 200px;
        padding: 0;
    }
    .el-menu-item:hover{
        background-color: #1f1f1f;
    }
    .el-menu-item.is-active{
        color: #f1f1f1;    
        background-color: #1f1f1f;
    }
    .el-menu-item.is-active:hover{
        background-color: #313131;
    }
    .filter-reverse{
        filter:invert();
    }
    .divider{
        margin-top: 5px;
        margin-bottom: 5px;
        opacity: 30%;
    }
    .blue-dot{
        background-color: rgb(27, 152, 255);
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
    }
    .min-image{
        min-width: 28px;
    }
    .image{
        @apply
        h-5 
        w-5 
        m-1
    }
    .title{
        @apply
        ml-3 
        flex 
        flex-row 
        items-center 
        justify-between
    }
    .wrap-hide-text {
        width: 120px;
        max-width: fit-content;
        @apply 
        inline-block 
        overflow-hidden 
        text-ellipsis 
        whitespace-nowrap
    }
</style>