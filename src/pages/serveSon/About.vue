<template>
    <div class="nav">
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <div class="header_top"></div>
                <p class="nav_p">哈尔滨冰雪体育文化中心</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">联系电话:111666000</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">冰雪活动日期:2024-10.1-10.7 7:30~24:00营业</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">检测更新</p>
            </div>
        </RouterLink>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.mine_nav {
    text-align: center;
    color: #000;
}

.nav {
    width: 80%;
    left: 10%;
    position: relative;
    top: -10%;
    background-color: rgb(255, 255, 255, 0.9);
    text-align: left;
}

.nav_img {
    width: 7%;
    display: inline-block;
}

.nav_p {
    display: inline-block;
    margin: 10%;
}

.nav_choose {
    text-align: center;
    color: #000;
}
</style>