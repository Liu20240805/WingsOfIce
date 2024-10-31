<template>
    <div class="nav">
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <div class="header_top"></div>
                <p class="nav_p">头&ensp;像&ensp;设&ensp;置</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">昵&ensp;称&ensp;编&ensp;辑</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">个&ensp;人&ensp;简&ensp;介</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">个&ensp;人&ensp;标&ensp;签</p>
            </div>
        </RouterLink>
        <hr>
        <RouterLink to="/serve" active-class="mine_nav" class="nav_choose">
            <div>
                <p class="nav_p">行&ensp;程&ensp;展&ensp;示</p>
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