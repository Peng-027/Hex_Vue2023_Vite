<template>
  這是登入畫面
  <form id="form" class="form-signin" v-on:submit.prevent="checkLogin">
    <!-- submit 會讓頁面跳轉，需要取消預設行為 -->
    <div class="form-floating mb-3">
      <input v-model="user.username" type="email" class="form-control" id="username"
        placeholder="name@example.com" required autofocus>
      <label for="username">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="user.password" type="password" class="form-control" id="password"
        placeholder="Password" required>
      <label for="password">Password</label>
    </div>
    <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
      登入
    </button>
  </form>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    checkLogin () {
      this.$http.post(`${VITE_APP_URL}/v2/admin/signin`, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `hex_token=${token}; expires=${new Date(expired)}; path=/`
          // console.log(new Date(expired), token)
          // window.location = 'products.html'
          this.$router.push('/admin/products')
        })
        .catch(err => {
          alert(err.data.message)
        })
    }
  }
}
</script>
