<template>
    <div class="ml-4 mt-4 m-2">
        <div class="ml-2">
            More with YouTube
        </div>
        </div>
        <div class="el-menu-item">
            <div class="min-image">
                <img class="w-5 m-1" src="@/assets/yt_logo_icon.png"/>
            </div>
            <div class="title">
                <div class="wrap-hide-text">YouTube Premium</div>
            </div>
        </div>
        <div class="el-menu-item">
            <div class="min-image">
                <img class="image" src="@/assets/yt_studio_icon.jpg"/>
            </div>
            <div class="title">
                <div class="wrap-hide-text">YouTube Studio</div>
            </div>
        </div>
        <div class="el-menu-item">
            <div class="min-image">
                <img class="image" src="@/assets/yt_music_icon.png"/>
            </div>
            <div class="title">
                <div class="wrap-hide-text">YouTube Music</div>
            </div>
        </div>
        <div class="el-menu-item">
            <div class="min-image">
                <img class="image" src="@/assets/yt_kids_icon.svg"/>
            </div>
            <div class="title">
                <div class="wrap-hide-text">YouTube Kids</div>
            </div>
        </div>
    </template>
    
    <script>
    export default {
        name: 'MoreYTComp',
        components: { 
        },
        data() {
            return {
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