<template>
  <div class="box" :class="falg ? 'da' : 'xiao'">
    <button id="btn" @click="falg = !falg">
      <svg t="1691918468372" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="5855" width="32" height="32">
        <path
          d="M632 163h198.9c17.6 0 32 14.4 32 32v197h64V195c0-52.9-43.1-96-96-96H632v64zM161.1 392V195c0-17.6 14.4-32 32-32H392V99H193.1c-52.9 0-96 43.1-96 96v197h64zM392 861H193.1c-17.6 0-32-14.4-32-32V632h-64v197c0 52.9 43.1 96 96 96H392v-64zM862.9 632v197c0 17.6-14.4 32-32 32H632v64h198.9c52.9 0 96-43.1 96-96V632h-64z"
          fill="#8a8a8a" p-id="5856"></path>
      </svg>
    </button>
    <div class="imgs">
      <img src="./assets/e3be97b73717f0f52f8c318e4dd0007.png" class="img" alt="" />
    </div>
    <div class="box1">
      <span v-for="(item, id) in arr" :key="id">
        <button :class="item.flag ? 'true' : 'false'" @click="fun(id)">
          <div>{{ item.title }}</div>
        </button>
        <b v-show="item.flag"></b>
      </span>
    </div>
    <hr />
    <div class="di">
      <transition name="fade">
        <components :is="flag"></components>
      </transition>
    </div>
  </div>
</template>
<script>
import shuju from './components/list_data.js'
import one from './components/One.vue'
import tow from './components/Tow.vue'
import three from './components/Three.vue'
import four from './components/Four.vue'
import five from './components/Five.vue'

export default {
  name: 'App',
  mixins: [shuju],
  shuju: 'shuju',

  data() {
    return {
      flag: 'tow',
      num: 0,
      show3: true,
      falg: false
    }
  },
  components: {
    one,
    tow,
    three,
    four,
    five


  },
  created() {
    return this.arr
  },
  methods: {
    fun(num) {
      this.arr.forEach((item, id) => {
        if (id == num) {
          item.flag = true
        } else {
          item.flag = false
        }
      })
      if (num + 1 == 1) {
        this.flag = 'tow'
      } else if (num + 1 == 2) {
        this.flag = 'five'
      } else if (num + 1 == 3) {
        this.flag = 'one'
      } else if (num + 1 == 4) {
        this.flag = 'four'
      } else if (num + 1 == 5) {
        this.flag = 'three'
      }
    }
  }
}
</script>
<style>
#btn {
  float: right;
  position: relative;
  top: 10px;
  left: -7px;
}

.da {
  margin: auto;
  width: 80% !important;
  height: 200px !important;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

.true {
  color: #1890ff !important;
}

.false {
  color: white !important;
}

.di {
  margin-top: 1%;
}

.imgs {
  width: 120px;
  margin: auto;
}

.box {
  width: 100%;
  height: 95vh;
  background: #1c1c1e;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

button {
  background: #1c1c1e;
  color: #fff;
  margin-left: 5%;
  border: none;
  border-radius: 0;
}

b {
  display: block;
  height: 3px;
  background: #1890ff;
}

span {
  text-align: center;
  width: 80px;
}

.box1 {
  width: 80%;
  height: 5vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}</style>
