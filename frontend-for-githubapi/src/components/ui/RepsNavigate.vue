<template>
    <div class="section__navigate">
        <div class="section__navigate_item" :class="{ 'active' : userRepsActive }"
            @click="pushRoute('Repositories')">
                <span>Repos</span>
            <div class="section__navigate_item-count">{{ getRepos.length }}</div>
        </div>
        <div class="section__navigate_item" :class="{ 'active' : starredRepsActive }"
            @click="pushRoute('Starred')">            
                <span>Starred</span>
            <div class="section__navigate_item-count">{{ getStarred.length }}</div>
        </div>
    </div>
</template>

<script>
export default {

    data () {
        return {            
            userRepsActive: false,
            starredRepsActive: false            
        }
    },

    watch: {
        '$route' (to, from) {
            if (to.name == 'Starred') {
                this.starredRepsActive = true
                this.userRepsActive = false
            } else if (to.name == 'Repositories') {
                this.userRepsActive = true
                this.starredRepsActive = false
            }
        }
    },

    methods: {
        pushRoute (name) {
            this.$router.push({ name: name})
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