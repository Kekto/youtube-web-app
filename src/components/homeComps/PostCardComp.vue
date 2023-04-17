<template>
    <div class="card">
        <div class="card-image">
            <div class="info">
                <div class="header">
                    <div class="picture"></div>
                    Account_Name · 0 Days ago
                </div>
                <div class="body">
                    <div class="text">
                        text text text text text text text text text text text text text text text text text text text text text text text text text text text text text  text text text text 
                    </div>
                    <div class="thumbnail" style="align-self: center;">
                    </div>
                </div>
                <div class="footer">
                    <div class="likes">
                        <img class="icon" src="@/assets/thumbs_up.svg"/>
                        000
                        <img class="icon mirrored" src="@/assets/thumbs_down.svg"/>
                    </div>
                    <div class="socials">
                        <img class="icon" src="@/assets/share.svg"/>
                        <div class="comments">
                            <img class="icon" src="@/assets/comment.svg"/>
                            000
                        </div>
                        <el-icon class="icon rotated"><MoreFilled /></el-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostCardComp',
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
    border-color: #5f5f5f;
    border-width: 1px;
    border-radius: 10px;
}
.card-image{
    width: 360px;
    height: 200px;
    background-color: #212121;
    border-radius: 10px;
}
.info{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 5px;
}
.header{
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 12px;
    align-items: center;
    color: #AAAAAA;
}
.picture{
    width: 24px;
    height: 24px;
    min-height: 24px;
    min-width: 24px;
    background-color: #5f5f5f;
    border-radius: 50%;
}
.body{
    height:-webkit-fill-available;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    cursor: pointer;
}
.text{
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.thumbnail{
    width: 116px;
    height: 116px;
    min-height: 116px;
    min-width: 116px;
    background-color: #5f5f5f;
    border-radius: 15px;
}
.footer{
    height: 28px;
    min-height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.likes{
    display: flex;
    flex-direction: row;
    gap: 5px;
    font-size: 14px;
}
.socials{
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-size: 14px;
}
.comments{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.icon{
    height: 20px;
    width: 20px;
    min-height: 20px;
    min-width: 20px;
}
.mirrored{
    transform: rotateY(180deg);
}
.rotated{
    transform: rotate(90deg);
}

</style>