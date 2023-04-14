<template>
    <div class="bar">
        <el-icon v-if="ifLeftArrow" size="25px" class="arrow-left" @click="clickScrollLeft()"><ArrowLeft /></el-icon>
        <div id="tag-bar" class="tag-bar">
            <div id="1" class="tag" @click="selectTag(1)">All</div>
            <div id="2" class="tag" @click="selectTag(2)">Gaming</div>
            <div id="3" class="tag" @click="selectTag(3)">Mixes</div>
            <div id="4" class="tag" @click="selectTag(4)">Music</div>
            <div id="5" class="tag" @click="selectTag(5)">Live</div>
            <div id="6" class="tag" @click="selectTag(6)">Action-adventure games</div>
            <div id="7" class="tag" @click="selectTag(7)">Electronic Music</div>
            <div id="8" class="tag" @click="selectTag(8)">Recently uploaded</div>
            <div id="9" class="tag" @click="selectTag(9)">Watched</div>
            <div id="10" class="tag" @click="selectTag(10)">New to you</div>
        </div>
        <el-icon v-if="ifRightArrow" size="25px" class="arrow-right" @click="clickScrollRight()"><ArrowRight /></el-icon>
    </div>
</template>

<script>
export default {
    name: 'TagListComp',
    components: { 
    },
    data() {
        return {
            selectedTag: 1,
            ifLeftArrow: false,
            ifRightArrow: true,
        }
    },
    mounted() {
        this.selectTag(this.selectedTag);
    },
    methods:{
        clickScrollRight(){
            document.getElementById("tag-bar").scrollLeft = 10000;
            this.ifLeftArrow = true;
            this.ifRightArrow = false;
        },
        clickScrollLeft(){
            document.getElementById("tag-bar").scrollLeft = 0;

            this.ifLeftArrow = false;
            this.ifRightArrow = true;
        },
        selectTag(id){
            let elList = document.getElementsByClassName("tag")
            for(let el of elList){
                el.classList = ["tag"]
            }
            document.getElementById(id).classList.add("selected");
        }
    },
    }
</script>

<style scoped>
.bar{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
}
.arrow-right{
    margin-left: 15px;
}
.arrow-left{
    margin-right: 15px;
}
.tag-bar{
    display: flex;
    flex-direction: row;
    gap: 15px;
    white-space: nowrap;
    max-width: 100%;
    overflow-y: hidden;
}
.tag-bar::-webkit-scrollbar{
    display: none;
}
.tag{
    background-color: #2e2e2e;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
}

.tag:hover{
    background-color: rgb(68, 68, 68);
}

.selected{
    background-color: white;
    color: black;
}
.selected:hover{
    background-color: white;
    color: black;
}
</style>