<template>
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
    <el-icon class="icon" @click="this.toggleOptions = !this.toggleOptions">
        <MoreFilled class="rotated"/>
    </el-icon>
    <div v-if="this.toggleOptions" class="card-popup-wrapper">
        <NotificationPopupOptionsComp/>
    </div>
</template>

<script>
import NotificationPopupOptionsComp from '@/components/headerComps/NotificationPopupOptionsComp.vue'

export default {
    name: 'NotificationPopupItemComp',
    components: { NotificationPopupOptionsComp
    },
    data() {
        return {
            toggleOptions:false,
        }
    },
    }
</script>

<style scoped>
.card-popup-wrapper{
    position: relative;
}
.notif-item:hover{
    background-color: #414141;
}
.notif-item:hover > .icon{
    opacity: 100%;
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
.icon{
    height: 28px;
    width: 28px;
    min-height: 28px;
    min-width: 28px;
    opacity: 0%;
}
.rotated{
    transform: rotate(90deg);
}
</style>