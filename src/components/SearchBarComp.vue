<template>
    <div class="search-bar">
        <el-input v-model="input" placeholder="Search" >
            <template #suffix>
                <img class="input-icon" :src="require(`@/assets/yt_keyboard_icon.svg`)"/>
            </template>
        </el-input>
        <el-button class="button">
            <el-icon size="20px" style="opacity:50%"><Search/></el-icon>
        </el-button>
        <el-button class="button-round">
            <el-icon size="20px" style="opacity:50%"><Search/></el-icon>
        </el-button>
    </div>
  </template>

<script>

export default {
    name: 'SearchBarComp',
    components: { 
    },
    data() {
        return {
            input: "",
        }
    },
    }
</script>

<style scoped>
.search-bar{
    position: relative;
    top: 10px;
    height: 40px;
}
.el-input{
    width: 350px;
    height: inherit;
    font-size: 16px;
    --el-input-background-color: #0f0f0f ;
    --el-input-border-color: #1f1f1f ;
    --el-input-text-color: white;
    --el-input-bg-color: #0f0f0f;
    --el-input-hover-border-color:#1f1f1f ;
    --el-input-border-radius: 25px 0px 0px 25px;
}
.input-icon{
    width: 24px;
    opacity: 50%;
}
.button{
    height: inherit;
    width: 60px;
    background-color: #1f1f1f ;
    border-color: #1f1f1f;
    border-radius: 0px 25px 25px 0px;
    color: white;
}
.button-round{
    height: inherit;
    width: 40px;
    background-color: #1f1f1f ;
    border-color: #1f1f1f;
    border-radius: 50%;
    color: white;
}

.button:hover{
    background-color: #1f1f1f ;
    border-color: #1f1f1f;
    color: white
}
.button-round:hover{
    background-color: #1f1f1f ;
    border-color: #1f1f1f;
    color: white
}
</style>