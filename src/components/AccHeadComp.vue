<template>
    <div class="account-bar">
        <div>
            <div class="icon hovered" @click="this.popupCreateToggle = !popupCreateToggle"> 
                <img class="icon-image" style="filter:invert(100%);height:14px" src="@/assets/yt_media_create.svg" />
            </div>
            <!-- CREATOR POPUP -->
            <div v-if="popupCreateToggle" class="card-popup-wrapper">
                <div class="card-popup">
                    <div class="card-popup-content">
                        <div class="card-popup-item">
                            <img class="img inverted" src="@/assets/yt_yourvideos.png" />
                            <div class="card-popup-item-text">Upload video</div>
                        </div>
                        <div class="card-popup-item">
                            <img class="img" src="@/assets/yt_live.svg" />
                            <div class="card-popup-item-text">Go live</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="icon hovered" @click="this.popupNotifToggle = !popupNotifToggle">
                <img class="icon-image" style="height:24px" src="@/assets/yt_bell_icon.svg"/>
            </div>
            <!-- NOTIFICATION POPUP -->
            <div v-if="popupNotifToggle" class="card-popup-wrapper">
                <div class="card-popup">
                    <div class="notif-popup-content">
                        <div class="notif-header">
                            <div class="notif-header-title">Notifications</div>
                            <img class="img" src="@/assets/yt_settings.svg" />
                        </div>
                        <el-divider class="divider"/>
                        <div class="notif-item-wrapper">
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                            <div class="notif-item">
                                <div class="notif-item-blue_dot"></div>
                                <div class="notif-item-profile"></div>
                                <div class="notif-item-texts">
                                    <div class="notif-item-title">
                                        Title Long enough to cover multiple lines for the sake of css styling and height fixing
                                    </div>
                                    <div class="notif-item-timer">
                                        00 hours ago
                                    </div>
                                </div>
                                <div class="notif-item-thumbnail"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div >
            <div class="icon" @click="this.popupAccountToggle = !popupAccountToggle">
                <img class="icon-image" src="@/assets/yt_pfp.svg"/>
            </div>
            <!-- ACCOUNT POPUP -->
            <div v-if="popupAccountToggle" class="card-popup-wrapper">
                <div class="card-popup">
                    <div class="notif-popup-content">
                        <div class="account-header">
                            dasd
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
                                <div class="card-popup-item-text">Go live</div>
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
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'AccHeadComp',
    components: { 
    },
    data() {
        return {
            popupCreateToggle: false,
            popupNotifToggle: false,
            popupAccountToggle: false,
        }
    },
    }
</script>

<style scoped>
.account-bar{
    display: flex;    
    width: auto;
    position: relative;
    justify-content: center;
    align-content: center;
    height: 40px;
    flex-wrap: nowrap;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 10px;
    cursor: pointer;
}
.icon-image{
    width: 28px;
    height: 28px;
}
.hovered:hover{
    border-radius: 50%;
    background-color: #313131;
}
.el-dialog{
    display: flex;
    position: relative;
    --dialog-background-color: #1f1f1f;
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
    border-radius: 8px;
    left:50px;
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
    margin-right: 12px;
}
.inverted{
    filter: invert(100%);
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
    max-height: 600px;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
.notif-header{
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 15px;
}
.notif-header-title{
    padding-left: 12px;
}
.notif-item{
    padding-left: 8px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
    display:flex;
    cursor: pointer;
}
.notif-item:hover{
    background-color: #414141;
}
.notif-item-blue_dot{
    background-color: #3EA6FF;
    border-radius: 50%;
    width: 4px;
    min-width: 4px;
    height: 4px;
    min-height: 4px;
    margin-right: 6px;
    margin-top: 22px;
}
.notif-item-profile{
    min-width: 48px;
    min-height: 48px;
    height: 48px;
    width: 48px;
    background-color: #AAAAAA;
    border-radius: 50%;
}
.notif-item-title{
    width: 240px;
    max-width: 240px;
    margin-left: 8px;
    font-size: 14px;
    font-weight: 500;
}
.notif-item-timer{
    font-size: 12px;
    color: #AAAAAA;
    margin-top: 4px;
    margin-left: 8px;
}
.notif-item-thumbnail{
    width: 86px;
    min-width: 86px;
    height: 52px;
    min-height:52px;
    background-color: #AAAAAA;
    border-radius: 4px;
    margin-left: 8px;
    margin-right: 8px;
}
</style>