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
                    <div class="title">Title waaaaaay to long to fit in two lines that were given for this component</div>
                    <div class="description">
                        <div>Account_Name</div>
                        <div>00000 Views · 0 Days ago</div>
                    </div>
                </div>
            </div>
            <div class="more-details">
                <el-icon class="profile-picture rotated" @click="popupToggle = !popupToggle"><MoreFilled /></el-icon>
            </div>
        </div>
        <div v-if="popupToggle" class="card-popup-wrapper">
            <div class="card-popup">
                <div class="card-popup-content">
                    <div class="card-popup-item">
                        <div class="card-popup-item-icon" >
                            <img style="padding:4px" src="@/assets/queue.svg" />
                        </div>
                        <div class="card-popup-item-text">Add to queue</div>
                    </div>
                    <div class="card-popup-item">
                        <div class="card-popup-item-icon" >
                            <img class="img inverted" src="@/assets/yt_towatch.svg" />
                        </div>
                        <div class="card-popup-item-text">Add to Watch Later</div>
                    </div>
                    <div class="card-popup-item">
                        <div class="card-popup-item-icon" >
                            <img src="@/assets/playlist_add.svg" />
                        </div>
                        <div class="card-popup-item-text">Add to playlist</div>
                    </div>
                    <div class="card-popup-item">
                        <div class="card-popup-item-icon" >
                            <img class="img" src="@/assets/download.svg" />
                        </div>
                        <div class="card-popup-item-text">Download</div>
                    </div>
                    <div class="card-popup-item">
                        <div class="card-popup-item-icon" >
                            <img class="img" src="@/assets/share.svg" />
                        </div>
                        <div class="card-popup-item-text">Share</div>
                    </div>
                    <el-divider class="divider"/>
                    <div class="card-popup-item">
                        <el-icon size="24px" class="card-popup-item-icon"><CircleClose /></el-icon>
                        <div class="card-popup-item-text">It doesn't interest me</div>
                    </div>
                    <div class="card-popup-item">
                        <el-icon size="24px" class="card-popup-item-icon"><Remove /></el-icon>
                        <div class="card-popup-item-text">Don't promote this channel</div>
                    </div>
                    <div class="card-popup-item">
                        <div class="card-popup-item-icon" >
                            <img class="img" src="@/assets/yt_reportHistory.svg" />
                        </div>
                        <div class="card-popup-item-text">Report</div>
                    </div>
                </div>
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
            popupToggle:0
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
.card:hover > .card-image{
    animation-name: card-hover--card-image;
    animation-duration: 750ms;
    border-radius: 0;
}
.card:hover .timer{
    opacity: 0%;
    animation: card-hover--timer;
    animation-duration: 200ms;
}
.card-image{
    width: 360px;
    height: 200px;
    background-color: #5a5a5a;
    border-radius: 10px;
    cursor: pointer;
}
@keyframes card-hover--card-image{
    from{
    border-radius: 10px;
    }
    to{
    border-radius: 0;
    }
}
@keyframes card-hover--timer{
    from{
    opacity:100%;
    }
    to{
        opacity:0%;
    }
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
.card-popup-wrapper{
    position: relative;
}
.card-popup{
    position: absolute;
    display: block;
    height: auto;
    width: max-content;
    background-color: #313131;
    z-index: 100;
    top:-60px;
    border-radius: 8px;
    left:360px;
    transform: translate(-100%,0);
}
.card-popup-content{
    padding-top:8px;
    padding-bottom:8px;
    display: flex;
    flex-direction: column;
}
.card-popup-item{
    padding-left: 16px;
    padding-right: 12px;
    font-size: 14px;
    height: 36px;
    display:flex;
    align-items: center;
    cursor: pointer;
}
.card-popup-item:hover{
    background-color: #515151;
}
.card-popup-item-text{
    padding-right: 24px;
}
.card-popup-item-icon{
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin-right: 12px;
}
.img{
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
}
.divider{
  border-color: #515151;
  border-width: 1px;
  width: auto;
  margin-top:5px;
  margin-bottom:5px;
}
.inverted{
    filter: invert(100%);
}
</style>