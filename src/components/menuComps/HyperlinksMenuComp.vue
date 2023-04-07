<template>
    <div class="info">
        <div class="text">About</div>
        <div class="text">Press</div>
        <div class="text">Copyright</div>
        <div class="text">Contact us</div>
        <div class="text">Creator</div>
        <div class="text">Advertise </div>
        <div class="text">Developers</div>
    </div>
    <div class="info">
        <div class="text">Terms</div>
        <div class="text">Privacy</div>
        <div class="text">Policy & Safety</div>
        <div class="text">How YouTube works</div>
        <div class="text">Test new features</div>
    </div>
    <div class="info">
        <div class="copyright">© 2023 Google LLC</div>
    </div>
</template>
    
<script>
export default {
    name: 'HyperlinkMenuComp',
    components: { 
    },
    data() {
        return {
        }
    },
    }
</script>

<style scoped>
.info {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    color: rgb(153, 153, 153);
    margin: 16px;
    margin-left: 20px;
    width: 200px;
    font-weight: 700;
}
.text{
    margin-right: 8px;
    wrap: none;
}
.text:hover{
    cursor: pointer;
}
.copyright{
    color: rgb(73, 73, 73);
}
</style>