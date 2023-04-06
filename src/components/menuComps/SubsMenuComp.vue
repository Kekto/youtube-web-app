<template>
<div class="ml-4 mt-4 m-2">
    <div class="ml-2">
        Subscriptions
    </div>
    </div>
    <div class="el-menu-item">
        <div class="min-image">
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
            <img class="h-5 w-5 m-1" src="@/assets/yt_pfp.svg"/>
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
</template>
   
<script>
    export default {
        name: 'SubsMenuComp',
        components: {
        },
        data() {
            return {
                subToggle: false
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