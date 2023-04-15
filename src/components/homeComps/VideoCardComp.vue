<template>
    <div class="card">
        <div class="card-image">
            <div class="timer">
                00:00
            </div>
        </div>
        <div class="row">
            <div class="details">
                <div class="profile-picture">
                </div>
                <div>
                    <div class="title">Title waaaaaay to long to fit in one line</div>
                    <div class="description">
                        <div>Account_Name</div>
                        <div>00000 Views · 0 Days ago</div>
                    </div>
                </div>
            </div>
            <div class="more-details">
                <el-icon class="profile-picture rotated"><MoreFilled /></el-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoCardComp',
    components: { 
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods:{
    },
    }
</script>

<style scoped>
.card{
    margin-bottom: 10px;
}
.card-image{
    width: 360px;
    height: 200px;
    background-color: #5a5a5a;
    border-radius: 10px;
    cursor: pointer;
}
.timer{
    display: flex;
    position: relative;
    font-size: 12px;
    top: 85%;
    left: 98%;
    background-color: #000000;
    padding:1px;
    padding-left: 5px;
    padding-right: 5px;
    transform: translate(-100%,0%);
    width: min-content;
    border-radius: 3px;
}
.row{
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
.details{
    display: flex;
    flex-direction: row;
    height: 100px;
    padding-top: 10px;
    padding-left: 10px;
}
.profile-picture{
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    background-color: #313131;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 5px;
}

.title{
    font-size: 16px;
    font-weight: bold;
    max-width: 250px;
    max-height:60px;
}
.description{
    font-size: 14px;
    color: #919191;
}
.more-details{
    opacity: 0%;
}
.row:hover .more-details{
    opacity: 100%;
}
.rotated{
    transform: rotate(-90deg);
    background: none;
    margin-top: 5px;
}

</style>