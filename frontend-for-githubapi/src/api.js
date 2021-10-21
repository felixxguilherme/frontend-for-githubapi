import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: `${process.env.VUE_APP_GITHUB_API_URL}/`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    }
})