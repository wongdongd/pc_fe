<template>
  <div>
    <ul id="label_box">
      <li v-for="item in label_list" :key="item.goods_id">
        <div style="text-align:center">
          <img v-bind:src="item.goods_pic" alt />
        </div>
        <p>{{ item.goods_name }}</p>

        <el-button size="mini" type="primary">优惠券：{{ item.coupon_discount / 100 }}</el-button>
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
  name: "Label",
  data() {
    return {
      label_list: [],
    };
  },
  methods: {
    getAll: function (current_page, current_page_size) {
      this.$http({
        method: "get",
        url:
          "/label/get?pageNum=" +
          current_page +
          "&pageSize=" +
          current_page_size,
      }).then((response) => {
        this.label_list = response.data;
      });
    },
    handle_current: function (current) {
      console.log("第" + current + "页");
      this.getAll(current, 12);
    },
    publish: function (label) {},
  },
  mounted: function () {
    this.getAll(1, 12);
  },
};
</script>

<style>
#label_box {
  display: flex;
  flex-wrap: wrap;
}
#label_box li {
  padding: 3px;
  list-style: none;
  border: 1px solid #eee;
  width: 250px;
  height: 260px;
  margin: 20px;
}
#label_box img {
  width: 150px;
  height: 150px;
}
#label_box p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>