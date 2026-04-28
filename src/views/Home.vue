<template>
  <div class="home-page">
    <div class="content">
      <h1>华师国商<br>AI智媒云</h1>
      <div class="button-group">
        <button class="btn btn-blue" @click="goToDigitalHuman">
          AI数字人
        </button>
        <button class="btn btn-red">
          AI美拍
        </button>
        <button class="btn btn-gray" disabled>
          AR导览
        </button>
        <button class="btn btn-gray" disabled>
          AI疗愈
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToDigitalHuman = () => {
  router.push('/ai-digital-human')
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 45%),
              url('/src/assets/IBC_icon.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
}

.content {
  width: 95%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

h1 {
  text-align: center;
  font-size: 39px;
  font-weight: bold;
  line-height: 1.3;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

.btn {
  width: 100%;
  padding: 60px 0;
  border: none;
  border-radius: 20px;
  font-size: 33px;
  color: white;

  /* 按钮下方阴影 */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.btn-blue { background-color: #1677ff; }
.btn-red  { background-color: #ff2020; }
.btn-gray { background-color: #aaaaaa; }
</style>