<template>
  <div id="box">
    <ul>
      <li v-for="item in top_list" :key="item.goods_id">
        <div style="text-align:center">
          <img v-bind:src="item.goods_image_url" alt />
        </div>
        <p>{{ item.goods_name }}</p>

        <el-button size="mini" type="primary">优惠券：{{ item.coupon_discount / 100 }}</el-button>
        <el-button
          size="mini"
          type="success"
          style="float:right;right:10px"
          @click.native="add(item)"
        >收藏</el-button>
      </li>
    </ul>
    <div class="block" style="text-align:center">
      <el-pagination @current-change="handle_current" layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "Top",
  data() {
    return {
      top_list: [],
    };
  },
  methods: {
    add: function (item) {
      console.log(item);
      this.$http({
        method: "post",
        url: "/label/add",
        data: {
          type: 1,
          goods_id: item.goods_id,
          pid: "11388600_149484704",
          search_id: item.search_id,
          goods_pic: item.goods_image_url,
          goods_name: item.goods_name,
          coupon_discount: item.coupon_discount,
          promotion_rate: item.promotion_rate,
          online: false,
          status: 0
        },
      }).then((response)=>{
          console.log(response);
      });
    },
    handle_current: function (current) {
      this.get_top((current - 1) * 12, 12);
    },

    get_top: function (current_page, current_size) {
      this.$http({
        method: "post",
        url: "/top/list",
        data: {
          limit: current_size,
          list_id: "",
          offset: current_page,
          p_id: "11388600_150051332",
          sort_type: 1,
          custom_parameters: "",
        },
      }).then((res) => {
        this.top_list = res.data.list;
      });
    },
  },
  mounted: function () {
    this.get_top(0, 12);
  },
};
</script>
<style scoped>
#box ul {
  display: flex;
  flex-wrap: wrap;
}
#box li {
  padding: 3px;
  list-style: none;
  border: 1px solid #eee;
  width: 250px;
  height: 260px;
  margin: 20px;
}
#box img {
  width: 150px;
  height: 150px;
}
#box p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>