<template>
    <div class="account-bar">
        <div>
            <div class="icon hovered" @click="this.popupCreateToggle = !popupCreateToggle"> 
                <img class="icon-image" style="filter:invert(100%);height:14px" src="@/assets/yt_media_create.svg" />
            </div>
            <!-- CREATOR POPUP -->
            <div v-if="popupCreateToggle" class="card-popup-wrapper">
                <CreateMediaPopup/>
            </div>
        </div>
        <div>
            <div class="icon hovered" @click="this.popupNotifToggle = !popupNotifToggle">
                <img class="icon-image" style="height:24px" src="@/assets/yt_bell_icon.svg"/>
            </div>
            <!-- NOTIFICATION POPUP -->
            <div v-if="popupNotifToggle" class="card-popup-wrapper">
                <NotificationPopupComp/>
            </div>
        </div>
        <div >
            <div class="icon" @click="this.popupAccountToggle = !popupAccountToggle">
                <img class="icon-image" src="@/assets/yt_pfp.svg"/>
            </div>
            <!-- ACCOUNT POPUP -->
            <div v-if="popupAccountToggle" class="card-popup-wrapper">
                <AccoutPopupComp/>
            </div>
        </div>
    </div>

</template>

<script>
import CreateMediaPopup from './headerComps/CreateMediaPopup.vue';
import NotificationPopupComp from './headerComps/NotificationPopupComp.vue'
import AccoutPopupComp from './headerComps/AccoutPopupComp.vue';

export default {
    name: 'AccHeadComp',
    components: { 
        CreateMediaPopup, NotificationPopupComp, AccoutPopupComp
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
.card-popup-wrapper{
    position: relative;
}
</style>