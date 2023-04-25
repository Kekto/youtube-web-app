<template>
    <div class="card-popup" style="left: -10px; top: 25px; padding-top: 8px;padding-bottom: 8px;">
        <div class="card-popup-item">
            <el-icon size="24px" class="card-popup-item-icon"><CircleClose /></el-icon>
            <div class="card-popup-item-text">Hide this notification</div>
        </div>
        <div class="card-popup-item">
            <el-icon size="24px" class="card-popup-item-icon"><Remove /></el-icon>
            <div class="card-popup-item-text">Turn off all notifications from Channel_Name</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotificationPopupOptionsComp',
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
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    margin-right: 12px;
}

</style>