<template>
  這是產品列表頁面
  <table class="table">
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td><img :src="product.imageUrl" width="200" alt=""></td>
        <td>
          <RouterLink class="btn btn-outline-primary mb-2 me-2" :to="`/product/${product.id}`">產品細節</RouterLink>
          <button class="btn btn-outline-secondary mb-2" @click="addToCart(product.id)">加入購物車</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProduct () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then(res => {
          // console.log(res.data.products)
          this.products = res.data.products
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
