<template>
  <div>

    <header class="header">
      <div class="header__logo">
        <img src="./assets/icons/github-icon.svg" alt="github-icon">
      </div>
      <div class="header__text">
        <span><strong>Github</strong> profiles</span>
      </div>
    </header>

    <main>
      <div class="main__container">
        <section class="section__infos">
          <div class="section__infos_container">
            <div class="section__infos_img">
              <img :src="getUserInfos.avatar_url" alt="avatar">
            </div>
            <div class="section__infos_text">
              <p><strong>{{ getUserInfos.name }}</strong></p>
              <span>{{ getUserInfos.bio }}</span>
            </div>
          </div>
        </section>

        <section class="section__content">
          <NavigateRepos />          
          <router-view />          
        </section>
      </div>
    </main>

  </div>
</template>

<script>

import NavigateRepos from '@/components/ui/RepsNavigate.vue'

export default {

  components: {
    NavigateRepos
  },

  data () {
    return {
      user: ''
    }    
  },

  mounted () {
    
    const initialUser = this.user || "felixxguilherme"
    this.$store.dispatch('loadUserInfos', initialUser)
    this.$store.dispatch('loadStarredUserRepos', initialUser)
    this.$store.dispatch('loadUserRepos', initialUser)
  },

  computed: {
    getUserInfos () {
      return this.$store.getters.userInfos
    }
  }

}

</script>
