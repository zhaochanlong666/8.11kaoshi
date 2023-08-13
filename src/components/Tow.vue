<template>
  <div class="box2">
    <div class="div1">
      <el-input confirm-type="search" v-model="that" placeholder="请输入名字"></el-input>
      <div>
        <div class="tabs">
          <vuedraggable class="wrapper">
            <transition-group>
              <div v-for="(tab, index1) in search(that)" :key="index1" :class="{ active: activeTab === index1 }"
                @click="changeTab(index1)">
                <img class="id" :src="tab.imgs" alt="" />
                <span class="ziti"> {{ tab.name }} </span>
                <el-button @click="del(index1)" class="shancu" type="danger" size="mini" icon="el-icon-delete"
                  circle></el-button>
              </div>
            </transition-group>
          </vuedraggable>
        </div>
      </div>
    </div>
    <div class="zhongku"></div>
    <transition name="fade">
      <div class="div2">
        <div>
          <div class="aop" v-for="(tab, index) in list1" v-show="activeTab === index" :key="index">
            <span class="appsj"> {{ tab.content }} </span>

            <img class="id" :src="tab.imgs" alt="" />
            <img class="biao" src="../assets/d2b5d9f33e5364762bd63c529bd7cc6.png" alt="" />
          </div>
          <hr />

          <div class="komj">
            <ul v-for="(item, inde) in list" :key="inde">
              <li>
                <div class="diyi" :style="{ backgroundColor: getBoxColor(inde) }">{{ item.id }}</div>
                <span class="zhong">{{ item.xiangqing }}</span>
                <span class="pian">{{ item.dian }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable'
import shuju from '../components/list_data.js'
export default {
  name: 'BawetxKdbfn',
  mixins: [shuju],
  components: { vuedraggable },

  data() {
    return {
      activeTab: 0,
      isShow: false,
      list1: [
        {
          id: 1,
          name: '微信',
          imgs: 'https://files.codelife.cc/topsearch/WnBe01o371.png',
          content: '微信·24h热文榜'
        },
        {
          id: 2,
          name: 'it之家',
          imgs: 'https://files.codelife.cc/topsearch/Y2KeDGQdNP.png',
          content: '少数派·热门文章'
        },
        {
          id: 3,
          name: '百度',
          imgs: '	https://files.codelife.cc/topsearch/Jb0vmloB1G.png',
          content: '百度贴吧·热议榜'
        }
      ],
      shuju: 'shuju',
      that: ''
    }
  },

  created() {
    return this.list
  },
  methods: {
    search(that) {
      return this.list1.filter(item => {
        if (item.name.includes(that)) {
          return item
        }
      })
    },
    del(index1) {
      if (confirm(`确定要删除的吗 `)) {
        this.list1.splice(index1, 1)
      }
    },
    changeTab(index1) {
      this.isShow = !this.isShow
      this.activeTab = index1
    },
    getBoxColor(inde) {
      if (inde === 0) {
        return '#fe2d46'
      } else if (inde === 1) {
        return '#ff6600'
      } else if (inde === 2) {
        return '#faa90e'
      }
    }
  }
}
</script>

<style scoped>
.hovered {
  color: red;
}

.appsj {
  color: #fff;
  font-size: 20px;
  margin-left: 2%;
  margin-top: 7%;
}

.biao {
  float: right;
  width: 3%;
}

.shancu {
  float: right;
}

.aop {
  margin-left: 4%;
  margin-bottom: 2%;
}

.zisd {
  width: 100%;
  margin: auto;
  height: 34px;
  color: #c6c6c7;
  margin-top: 20px;
}

.ziti {
  float: left;
  margin-left: 5%;
  margin-top: 3%;
}

.id {
  width: 35px;
  height: 35px;
  float: left;
}

.pian {
  float: right;
  font-size: 12px;
}

.tabs {
  margin-top: -10%;
  width: 100%;
  color: #fff;
}

.tabs div {
  float: left;
  width: 85%;
  margin-top: 30px;
  padding: 10px 20px;
  cursor: pointer;
}

.tabs div.active {
  background-color: #1890ff;
  color: #fff;
}

.tab-content div {
  display: none;
}

.tab-content div.show {
  display: block;
}

ul li {
  list-style: none;
  color: #c6c6c7;
  font-weight: 100;
}

.diyi {
  width: 2%;
  height: 6%;
  text-align: center;
  float: left;
}

.zhong {
  margin-left: 3%;
}

.komj {
  width: 100%;
  overflow-y: scroll;
  height: 70vh;
}

.box2 {
  width: 100%;
  height: 80vh;
  background: #1c1c1e;
  margin: auto;
}

hr {
  width: 100%;
}

.div1 {
  width: 20%;
  height: 80vh;
  float: left;
  margin-left: 1%;
}

.div2 {
  width: 75%;
  float: left;
  height: 80vh;
}

.div2 :hover {
  color: #1890ff;
}

.zhongku {
  width: 1px;
  height: 100vh;
  float: left;
  margin-left: 2%;
  margin-top: -1%;
  background: #fff;
}
</style>
