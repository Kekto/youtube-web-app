<template>
    <!-- PERSONAL MENU -->
    <el-menu-item index="4">
        <div class="min-image">
            <img class="image filter-reverse" src="@/assets/yt_library.png"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">Library</div>
        </template>
    </el-menu-item>
    <el-menu-item index="5">
        <div class="min-image">
            <img class="image filter-reverse" src="@/assets/yt_history.svg"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">History</div>
        </template>
    </el-menu-item>
    <el-menu-item index="6">
        <div class="min-image">
            <img class="image filter-reverse" src="@/assets/yt_yourvideos.png"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">Your videos</div>
        </template>
    </el-menu-item>
    <el-menu-item index="7">
        <div class="min-image">
            <img class="image filter-reverse" src="@/assets/yt_towatch.svg"/>
        </div>
        <template #title>
            <div class="title wrap-hide-text">To watch</div>
        </template>
    </el-menu-item>
    <el-menu-item index="8">
        <div class="min-image">
            <img class="image filter-reverse" src="@/assets/yt_playlist.svg"/>
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
                <img class="image filter-reverse" src="@/assets/yt_playlist.svg"/>
            </div>
            <template #title>
                <div class="title wrap-hide-text">Playlist #2</div>
            </template>
        </el-menu-item>
        <el-menu-item index="10">
            <div class="min-image">
                <img class="image filter-reverse" src="@/assets/yt_playlist.svg"/>
            </div>
            <template #title>
                <div class="title wrap-hide-text">Random Playlist</div>
            </template>
        </el-menu-item>
        <el-menu-item index="11">
            <div class="min-image">
                <img class="image filter-reverse" src="@/assets/yt_playlist.svg"/>
            </div>
            <template #title>
                <div class="w-36 title wrap-hide-text">Playlist with a name too long to fit</div>
            </template>
        </el-menu-item>
        <el-menu-item index="12">
            <div class="min-image">
                <img class="image filter-reverse" src="@/assets/yt_playlist.svg"/>
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
</template>

<script>
export default {
    name: 'PersonalMenuComp',
    components: { 
    },
    data() {
        return {
            playlistToggle: false,
        }
    },
    }
</script>

<style scoped>
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