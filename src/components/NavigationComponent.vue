<template>
    <div class="fixed">
        <div class="flex flex-row hover:cursor-pointer">
            <div class="m-2 mr-3 ml-5 w-10 h-10 flex items-center justify-center select-none hover:cursor-pointer hovered rounded-full" @click="isCollapse = !isCollapse">
                <el-icon size="24px" class="h-10" v-if="isCollapse==true"><Expand /></el-icon>
                <el-icon size="24px" class="h-10" v-else><Fold /></el-icon>
            </div>
            <div class="m-2 ml-0 h-10 flex items-center">
                <img class="h-5" src="../assets/yt_logo_icon.png"/>
                <img class="ml-1 h-5 filter-brightness" src="../assets/yt_logo_text.png"/>
            </div>
        </div>
    </div>
    <!-- COLLAPSED -->
    <div v-if="isCollapse == true" class="flex justify-center items-center flex-col ml-2 w-16 mt-11">
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col h-fit" >
                <el-icon size="22px"><HomeFilled /></el-icon>
                <span style="font-size: 10px;" class="pt-2">Home</span>
            </div>
        </div>
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col h-fit">
                <div>
                    <img class="filter-reverse h-5" src="../assets/yt_shorts.png"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Shorts</span>
            </div>
        </div>
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col">
                <div>
                    <img class="filter-reverse h-6" src="../assets/yt_subscriptions.jpg"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Subscriptions</span>
            </div>
        </div>
        <div class="hovered p-5 pt-4 pb-4 w-16 rounded-xl hover:cursor-pointer">
            <div class="flex justify-center items-center flex-col">
                <div>
                    <img class="filter-reverse h-6" src="../assets/yt_library.png"/>
                </div>
                <span style="font-size: 10px;" class="pt-2">Library</span>
            </div>
        </div>
    </div>
    <!-- UNCOLLAPSED -->
  <el-menu v-if="isCollapse == false"
    default-active="0"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
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
            <img class="image filter-reverse" src="../assets/yt_shorts.png"/>
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
  </el-menu>
</template>

<script>
  export default {
    name: 'NavigationComponent',
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
        margin-top: 7px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        margin-top: 48px;
        background-color: #0f0f0f;
        border: none;
        width: 200px;
        overflow-x: hidden;
        height: 100%;
        overflow-y: auto;
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
    .filter-brightness{
        filter: brightness(700%);
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
    .fixed{
        display: flex;
        position: fixed;
        background-color:#0f0f0f;
        z-index: 1;
        width: 208px;
    }
</style>