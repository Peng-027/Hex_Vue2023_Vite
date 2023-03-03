<template>
  這是產品列表頁面
  <p>{{ product.title }}</p>
  <img :src="product.imageUrl" width="200" alt="">
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route.params)
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          // console.log(res)
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
