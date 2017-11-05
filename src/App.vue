<template>
  <div id="app">
    <div class="header">
      <div class="left-wrapper">
        <h4 class="title">实时监测平台</h4>
      </div>
      <div class="right-wrapper">
        
      </div>
    </div>
    <div class="main">
        <div class="sidebar" ref="sidebar">
          <ul class="menu-list">
            <li 
              v-for="(item,index) in menuList" 
              :key="item.id" 
              @click="showSecondMenu(index)"
              :class="{active: index==currentIndex}">
              <icon :name="item.icon" class="preIcon"></icon> {{item.title}}<icon name="angle-right" class="afterIcon"></icon>
              <transition
                name="slide"
                >
                <ul ref="secMenu"
                    v-if="index == currentIndex"
                    class="menu-second-list">
                    <router-link
                        v-for="child in item.children" 
                        :to="child.path"
                        tag="li" 
                        :key="child.id">
                      <i></i>{{ child.title }}<i></i>
                    </router-link>
                </ul>
              </transition>
            </li>
          </ul>
        </div>
        <div class="content" ref="content">
          <h5 class='title'><icon name="home" scale="1.5"></icon>{{menuTitle}}</h5>
          <router-view style="padding: 20px;"></router-view>
        </div>
    </div>
    <div class="footer">
        Copyright &copy; 2017 北京卡达克数据技术中心
    </div>
  </div>
</template>

<script>
import Menu from './common/Menu'

export default {
  name: 'app',
  data () {
    return {
      currentIndex: -1,
      menuList: Menu,
      menuTitle: '车辆总览'
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      this.$refs.sidebar.style.height = window.innerHeight - 58 - 24 + 'px';
      // this.$refs.content.style.height = window.innerHeight - 58 - 44 + 'px';
    },
    showSecondMenu (ind) {
      /*if(this.currentIndex == ind) {
        this.currentIndex = -1;
        return;
      }*/
      this.currentIndex = ind; 
    },
    beforeEnter (el) {
      
    },
    enter(el){
      
    }
  },
  watch: {
    $route(e) {
      let currentPath = e.path
      let data = this.menuList
      for(var i in data){
        for(var index in data[i].children){
          if(data[i].children[index].path == currentPath){
            this.menuTitle = data[i].children[index].title;
            break;
          }
        }
      }
    }
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
li{ list-style: none; }
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.header{
    height: 58px;
    background-color: #1f304c;
}
.header .title{
  font-size: 26px;
  color: #fff;
  font-weight: normal;
  float: left;
  margin-left: 42px;
  line-height: 58px;
  letter-spacing: 2px;
}
.footer{
  width: 100%;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  background-color: #1A273D;
  position: fixed;
  bottom: 0;
  color: #fff;
}
.main{
  background-color: #fafafa;
  padding-left: 256px;
}
.main .sidebar{
  width: 256px;
  min-height: 250px;
  float: left;
  margin-left: -256px;
  background-color: #1f304c;
}
.main .menu-list{
  cursor: pointer;
}
.main .menu-list > li {
  line-height: 52px;
  padding-left: 40px;
  padding-right: 18px;
  border-top: 1px solid #17213c;
  color: #ddd;
  overflow-y: hidden;
  font-size: 16px;
}
.main .menu-list > li:last-child{
  border-bottom: 1px solid #17213c;
}
.main .menu-list > li.active{
  border-left: 4px solid #17b4d5;
  color: #14b8d1;
  background-color: #19203a;
}
.main .menu-second-list{

}
.main .menu-second-list li {
  padding-left: 80px;
  background-color: #1f304c;
  border-top: 1px solid #17213c;
  margin-left: -40px;
  margin-right: -18px;
  color: #ddd;
  font-size: 14px;
}
.main .content{
  width: 100%;
  float: left;
}
.slideDown-enter-active{
  transition: all .35s ease;
}
.slideDown-enter{
  height: 0;
}
.slideDown-enter-to{
  height: 104px;
}
.preIcon{
  line-height: 52px;
  padding-right: 54px;
}
.afterIcon{
  line-height: 52px;
  height: 52px;
  float: right;
  transition: rotate 0.5s ease;
}
.main .menu-second-list li.router-link-active{
  background-color: #1f2942;
}
.slide-enter-active{
  transition: all 1s ease;
}
.slide-enter, .slide-leave-active{
  height: 0;
  opacity: 0
}
.slide-enter-to, .slide-leave{
  height: 100px;
}
.content{
  background-color: #f3f3f3;
}
.content > .title{
    height: 52px;
    line-height: 52px;
    font-weight: normal;
    font-size: 18px;
    padding-left: 26px;
    background-color: #fff;
    color: #333;
    border-bottom: 1px solid #d8d9db;
 }
.content > .title > svg {
    padding-right: 28px;
    color: #dadada;
    vertical-align: middle;
 }
</style>
