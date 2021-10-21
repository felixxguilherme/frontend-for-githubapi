import { clone, cloneDeep } from 'lodash'

import axios from 'axios'
const url = `${process.env.VUE_APP_GITHUB_API_URL}`

const githubModule = {
    state: {
        userInfos: [],
        userRepos: [],
        starredRepos: []
    },

    mutations: {
        LOAD_USER_INFOS (state, infos) {
            state.userInfos = infos
        },
        LOAD_USER_REPOS (state, repos) {
            state.userRepos = repos
        },
        LOAD_USER_STARRED (state, starred) {
            state.starredRepos = starred
        }
    },

    actions: {

        async loadUserInfos ({ commit }, user) {
            try {
                axios.get(url+`/users/${user}`)
                    .then(response => {
                        commit('LOAD_USER_INFOS', response.data)
                    })              
            } catch (error) {
                
            }
        },

        async loadUserRepos ({ commit }, user) {
            try {
                axios.get(url+`/users/${user}/repos`)
                    .then(response => {
                        commit('LOAD_USER_REPOS', response.data)
                    })
            }
            catch (error) {
                console.log(error)
            }
        },

        async loadStarredUserRepos ({ commit }, user) {
            try {
                axios.get(url+`/users/${user}/starred`)
                    .then(response => {
                        commit('LOAD_USER_STARRED', response.data)
                    })
                
            } catch (error) {
                console.log(error)                
            }
        }
    },

    getters: {
        userInfos: (state) => cloneDeep(state.userInfos),
        userRepos: (state) => cloneDeep(state.userRepos),
        starredRepos: (state) => cloneDeep(state.starredRepos)
    }
}

export default githubModule