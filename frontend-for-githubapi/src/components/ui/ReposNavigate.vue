<template>
    <div class="section__navigate">
        <div class="section__navigate_item" :class="{ 'active' : clicked.reps }">
            <router-link :to="{ name: 'Repositories'}">
                Repos
            </router-link>
          <div class="section__navigate_item-count">{{ getRepos.length }}</div>
        </div>
        <div class="section__navigate_item" :class="{ 'active' : clicked.starred }">
            <router-link :to="{ name: 'Starred'}">
                Starred
            </router-link>
          <div class="section__navigate_item-count">{{ getRepos.length }}</div>
        </div> 
    </div>
</template>

<script>
export default {

    data () {
        return {
            clicked: {
                reps: false,
                starred: false
            }
        }
    },

    computed: {
        getRepos () {
            return this.$store.getters.userRepos
        },
        getStarred () {
            return this.$store.getters.starredRepos
        }
    }
}
</script>

<style>

</style>