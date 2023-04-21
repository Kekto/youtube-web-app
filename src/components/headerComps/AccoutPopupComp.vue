<template>
    <div class="card-popup">
        <div class="notif-popup-content">
            <div class="account-header">
                <div class="account-header-image"></div>
                <div class="account-header-text">
                    <div>Name Surname</div>
                    <div>@Account_ID</div>
                    <div class="link">Manage Google account</div>
                </div>
            </div>
            <el-divider class="divider"/>
            <div class="notif-item-wrapper">
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Your channel</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">YouTube Studio</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Change account</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Log out</div>
                </div>
                <el-divider class="divider-margin"/>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Purchases and subscriptions</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Your data</div>
                </div>
                <el-divider class="divider-margin"/>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Motive: dark</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Language: English</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Protection mode: off</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Location: Unknown</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Key shortcuts</div>
                </div>
                <el-divider class="divider-margin"/>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Settings</div>
                </div>
                <el-divider class="divider-margin"/>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Help</div>
                </div>
                <div class="card-popup-item">
                    <img class="img" src="@/assets/yt_live.svg" />
                    <div class="card-popup-item-text">Send ticket</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AccountPopupComp',
    components: { 
    },
    data() {
        return {
        }
    },
    }
</script>

<style scoped>
.card-popup{
    position: absolute;
    display: block;
    height: auto;
    width: max-content;
    background-color: #313131;
    z-index: 100;
    border-radius: 8px;
    left:50px;
    transform: translate(-100%,0);
}
.account-header{
    display: flex;
    flex-direction: row;
    padding: 10px;
}
.account-header-image{
    height: 40px;
    max-height: 40px;
    width: 40px;
    max-width: 40px;
    background-color: #AAAAAA;
    border-radius: 50%;
}
.account-header-text{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-left: 10px;
}
.link{
    font-size: 14px;
    color: #3EA6FF;
}
.card-popup-item{
    padding-left: 16px;
    padding-right: 12px;
    font-size: 14px;
    height: 40px;
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
.img{
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    margin-right: 12px;
}
.divider{
  border-color: #515151;
  border-width: 1px;
  width: auto;
  margin-top:0px;
  margin-bottom:0px;
}
.divider-margin{
  border-color: #515151;
  border-width: 1px;
  width: auto;
  margin-top:5px;
  margin-bottom:5px;
}

.notif-popup-content{
    display: flex;
    flex-direction: column;
}
.notif-item-wrapper{
    height: auto;
    max-height: calc(100vh - 160px);
    overflow-y: scroll;

}
.notif-item-wrapper::-webkit-scrollbar{
    background-color:#313131;
    width: 0.8em;
    border-radius: 8px;
    z-index: 1;

}
.notif-item-wrapper::-webkit-scrollbar-thumb{
    background-color: #515151;
}
.notif-item-wrapper:not(:hover)::-webkit-scrollbar-thumb{
    background-color:#313131;
}
</style>