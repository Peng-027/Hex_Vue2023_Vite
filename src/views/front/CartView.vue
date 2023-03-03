<template>
  這是購物車頁面
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)" :disabled="loadingItem === item.id">
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success">
              已套用優惠券
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <select name="" id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)" :disabled="loadingItem === item.id">
                <option :value="i" v-for="i in 20" :key="`${i}個購物車商品`">{{ i }}</option>
              </select>
            </div>
          </td>
          <td class="text-end">
            {{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      loadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }

    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then(res => {
        // console.log('購物車', res.data);
          this.cart = res.data.data
        })
    },
    updateCartItem (item) {
      const data = {
        data: {
          product_id: item.id,
          qty: item.qty
        }
      }
      this.loadingItem = item.id
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, data)
        .then(res => {
        // console.log('更新購物車', res.data);
          this.getCarts()
          this.loadingItem = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteItem (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then(res => {
        // console.log('刪除購物車', res.data);
          this.getCarts()
          this.loadingItem = ''
        })
    },
    deleteAll (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then(res => {
          this.getCarts()
          this.loadingItem = ''
        })
    },
    onSubmit () {
      const order = this.form
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, { data: order })
        .then((res) => {
          alert(res.data.message)

          this.getCarts()
          this.$refs.form.resetForm()
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
