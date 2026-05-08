<template>
  <div class="home-page">
    <div class="content">
      <div class="button-group">
        <button class="btn btn-blue" @click="goToDigitalHuman">
          AI数字人
        </button>
        <button class="btn btn-red">
          AI美拍
        </button>
        <button class="btn btn-pupple">
          AR导览
        </button>
        <button class="btn btn-green">
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
  background: url('/src/assets/IBC_icon.png');
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
  gap: 30px;
  padding-top: 150px;
}


.button-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  /* 鼠标悬停效果 */
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover:not(:disabled) {
  transform: translateY(-3px);
}

.btn-blue { background-color: #a9d0fd; }
.btn-red  { background-color: #fb8b93; }
.btn-green { background-color: #b2e496; }
.btn-pupple { background-color: #da99e6; }

.btn-blue:hover { background-color: #98c4f7; }

.btn-red:hover { background-color: #e67680; }

.btn-pupple:hover { background-color: #d290de; }

.btn-green:hover { background-color: #adda93; }
</style>
