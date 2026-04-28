<template>
  <div class="digital-human-page">
    <div class="video-box">
      <h2>数字人视频</h2>
    </div>
    <div class="text-wrap">
      <h3>学校介绍</h3>
      <p>华南师范大学是国家“双一流”建设高校、“211工程”重点建设大学，由广东省人民政府与教育部共建，是一所师范特色鲜明、多学科协调发展的综合性研究型大学。学校始建于1933年，前身为广东省立勷勤大学师范学院，历经九十余年办学传承，积淀了深厚的教育底蕴。</p>
      <p>学校坐拥广州石牌、广州大学城、佛山南海、汕尾滨海四大校区，办学布局完善，教学科研设施齐全，育人环境优良。学校坚持人才强校，汇聚了院士、国家级教学名师等高层次人才，打造了一支教学水平精湛、科研能力突出的师资队伍，为人才培养筑牢根基。</p>
      <p>学科建设方面，学校实力雄厚。物理学入选国家“双一流”建设学科，心理学、马克思主义理论、教育学、体育学等学科跻身全国A类行列，多个学科进入ESI全球排名前1%，形成了优势学科引领、多学科协同发展的良好格局。学校构建了本硕博完整的人才培养体系，专业覆盖门类广泛，始终坚守师范教育初心，是华南地区基础教育优质师资的重要培养基地。</p>
      <p>学校秉承“艰苦奋斗、严谨治学、求实创新、为人师表”的校训，坚守立德树人根本任务，既深耕师范教育，培育了大批优秀教育人才，又立足粤港澳大湾区发展需求，积极推进科研创新与社会服务，在学术研究、教育赋能、区域发展等方面成果显著。</p>
    </div>
    <button class="back-btn" @click="goBack">返回首页</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.digital-human-page {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f0e8ff 0%, #ffffff 80%);
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(22, 93, 255, 0.12);
}

.video-box {
  width: 90%;
  padding: 150px 20px;
  text-align: center;
  margin-bottom: 30px;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.text-wrap {
  width: 90%;
}

h2 {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}

h3 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
  margin-top: 30px;
}

p {
  width: 100%;
  color: #666;
  font-size: 18px;
  line-height: 2.0;
  margin-bottom: 10px;
}

.back-btn {
  width: 90%;
  margin-top: 30px;
  padding: 15px 0;
  background: #1677ff;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(22, 93, 255, 0.2);
}
</style>