<template>
    <div class="card">
        <div class="card-image">
        </div>
        <div class="row">
            <div class="details">
                <div>
                    <div class="title">Title waaaaaay to long to fit in one line</div>
                    <div class="description">
                        <div>00000 Views</div>
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
    name: 'ShortsCardComp',
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
    width: 170px;
    height: 300px;
    max-width: 170px;
    background-color: #5a5a5a;
    border-radius: 10px;
    cursor: pointer;
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
    max-width: inherit;
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
    margin-top: 5px;
}

.title{
    font-size: 16px;
    font-weight: bold;
    max-width: 130px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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