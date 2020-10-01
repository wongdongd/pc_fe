<template>
  <div>
    <el-menu
      default-active="'Top'"
      class="el-menu-vertical-demo"
      mode="horizontal"
      @select="hadleSelect"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>拼多多</span>
        </template>
        <el-menu-item :index="'Top'">今日爆款</el-menu-item>
        <el-menu-item :index="'Recommend'">今日推荐</el-menu-item>
        <el-menu-item index="1-3">所有商品</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">我的多多</template>
          <el-menu-item :index="'Label'">筛选商品</el-menu-item>
          <el-menu-item :index="'Promotion'">推广链接</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">淘宝</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">京东</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">配置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "NavMenu",
  data() {
    return {
      msg:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods:{
    hadleSelect(key,path){
      console.log(key+path);
    }
  }
};
</script>
<style scoped>
</style>