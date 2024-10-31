<template>
    <div class="body">
        <div class="search">
            <input type="text" class="search_input" placeholder="请输入关键词">
        </div>
        
        <div class="history">
            <p>搜索历史</p>
        </div>
        
        <div class="found">
            <p>搜索发现</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.body{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column-reverse;
}

.search {
    width: 100%;
    height: 10%;
    position: relative;
    bottom: 5%;
}

.search_input {
    width: 70%;
    height: 60%;
    position: relative;
    left: 10%;
    text-align: center;
    border: 2px solid;
    border-radius: 10px;
}

.history{
    position: relative;
    bottom: 10%;
}

.found{
    position: relative;
    bottom: 10%;
}
</style>