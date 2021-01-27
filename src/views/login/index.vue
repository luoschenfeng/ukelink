<template>
  <div class="login">
    <div class="login-wrapper">
      <el-form
        ref="loginForm"
        class="login-form"
        :model="LoginForm"
        :rules="LoginFormRules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="LoginForm.username"
            :placeholder="$t('login.placeholder.username')"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>
        <el-form-item
          prop="password"
        >
          <el-input
            v-model="LoginForm.password"
            :placeholder="$t('login.placeholder.password')"
            name="password"
            type="text"
            tabindex="2"
            autocomplete="on"
            show-password
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
        <el-form-item class="form-item-submit">
          <el-button
            type="primary"
            :loading="!enableSubmit"
            :disabled="!enableSubmit"
            @click="handleLogin"
          >
            {{ $t('login.text.login') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {
  usernameRegExp,
  passwordRegExp,
} from '@/utils/regexp'

export default {
  name: 'Login',
  data() {
    let vm = this

    let validate = {
      username(rule, val, callback) {
        if (val.length < 3 || val.trim().length > 15) {
          callback(new Error(vm.$t('login.prompt.usernameLength')));
        } else if (!usernameRegExp.test(val)) {
          callback(new Error(vm.$t('login.prompt.usernameFormat')));
        } else {
          callback()
        }
      },
      password(rule, val, callback) {
        if (val.length < 8 || val.trim().length > 30) {
          callback(new Error(vm.$t('login.prompt.passwordLength')));
        } else if (!passwordRegExp.test(val)) {
          callback(new Error(vm.$t('login.prompt.passwordFormat')));
        } else {
          callback()
        }
      },
    }

    return {
      LoginForm: {
        username: 'luoschenfeng',
        password: '1@abcABC',
      },
      LoginFormRules: {
        username: {
          validator: validate.username,
          trigger: 'blur',
        },
        password: {
          validator: validate.password,
          trigger: 'blur',
        },
      },
      loading: false,
      enableSubmit: true,
    }
  },
  computed: {
    next() {
      return this.$route.query.next || '/'
    },
  },
  methods: {
    handleLogin() {
      this.enableSubmit = false
      let params = {
        username: this.LoginForm.username,
        password: this.LoginForm.password,
      }

      this.$store.dispatch('user/login', params)
        .then(() => {
          this.enableSubmit = true
          this.$router.push(this.next)
        })
        .catch(err => {
          this.enableSubmit = true
          throw new Error(err)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  height: 100%;

  .login-wrapper {
    height: 100%;
    text-align: center;

    @include genThemeStyle('background', $background-color-base);
    @include vertical-center;

    &-form {
      display: inline-block;
      vertical-align: middle;

      >>> .form-item-submit {
        margin-bottom: 0;

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
