<template>
    <div class="nav">
        <RouterLink to="/login" active-class="mine_nav" class="nav_choose">
            <div>
                <div class="header_top"></div>
                <p class="nav_p">登&emsp;录&emsp;与&emsp;注&emsp;册</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">个&ensp;人&ensp;信&ensp;息&ensp;管&ensp;理</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">收&emsp;藏&emsp;管&emsp;理</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <p class="nav_p">清&emsp;除&emsp;缓&emsp;存</p>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">在&emsp;线&emsp;客&emsp;服</p>
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
    /* position: absolute; */
    /* top: 20%; */
    position: relative;
    top: -10%;
    background-color: rgb(255, 255, 255, 0.9);
    text-align: center;
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