<template>
    <div class="card-popup">
        <div class="notif-popup-content">
            <div class="notif-header">
                <div class="notif-header-title">Notifications</div>
                <img class="img" src="@/assets/yt_settings.svg" />
            </div>
            <el-divider class="divider"/>
            <div class="notif-item-wrapper">
                <div v-for="n in 10" :key="n" class="notif-item">
                    <NotificationPopupItemComp/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NotificationPopupItemComp from '@/components/headerComps/NotificationPopupItemComp.vue'

export default {
    name: 'NotificationPopupComp',
    components: { NotificationPopupItemComp
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
    padding-bottom: 12px;
    padding-top: 12px;
}
.notif-header-title{
    padding-left: 12px;
}
.notif-item{
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
    display:flex;
    cursor: pointer;
}
.notif-item:hover{
    background-color: #414141;
}
.notif-item:hover > .icon{
    opacity: 100%;
}
</style>