<template>
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
</template>

<script>

export default {
    name: 'NotificationPopupComp',
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

.notif-popup-content{
    display: flex;
    flex-direction: column;
}
.notif-item-wrapper{
    height: auto;
    max-height: 600px;
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