<template>
<div>
    <ul id="promotion_box">
      <li v-for="item in promotion_list" :key="item.goods_id">
        <div style="text-align:center">
          <img v-bind:src="item.mobile_url" alt />
        </div>

        <el-switch
          v-model="item.online"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="已上线"
          inactive-text="下线"
          @change="publish(item)"
        ></el-switch>
      </li>
    </ul>
    <div class style="text-align:center">
      <el-pagination @current-change="handle_current" layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promotion",
  data() {
    return {
      promotion_list: [],
    };
  },
  methods: {
    getAll: function (current_page,current_page_size) {
      this.$http({
        method: "get",
        url:
          "/promotion/get?pageNum=" +
          current_page +
          "&pageSize=" +
          current_page_size,
      }).then((response) => {
        console.log(response.data);
        this.promotion_list = response.data;
      });
    },
    handle_current:function(current){
        this.getAll(current,12);
    }
  },
  mounted: function () {
      this.getAll(1,12);
  },
};
</script>

<style>
#promotion_box {
  display: flex;
  flex-wrap: wrap;
}
#promotion_box li {
  padding: 3px;
  list-style: none;
  border: 1px solid #eee;
  width: 250px;
  height: 260px;
  margin: 20px;
}
#promotion_box img {
  width: 150px;
  height: 150px;
}
#prommotion_box p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>