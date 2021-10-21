<template>

    <div class="list__container">
        <div class="search__input">
            <input type="search" placeholder="Filter by name"
            v-model="nameToFilter">
        </div>

        <CardList v-for="(repo, idx) in filteredReps" :key="idx"
            :repName="repo.name"
            :description="repo.description">
            <div class="cardlist__infos_evaluation">
                <div class="cardlist__infos_evaluation--item">
                    <img src="../assets/icons/code-icon.svg" alt="starIcon">
                    {{ repo.language}}
                </div>
                <div class="cardlist__infos_evaluation--item">
                    <img src="../assets/icons/git-icon.svg" alt="gitIcon">
                    {{ repo.forks }}                    
                </div>
            </div>
        </CardList>

    </div>

    
  
</template>

<script>

import CardList from '../components/cards/CardList.vue'
import { filterList } from '../mixins/filterList.js'

export default {

    components: {
        CardList
    },

    mixins: [filterList],
    
    mounted () {
        this.repos = this.$store.getters.userRepos
    }

}
</script>

<style lang="stylus">
</style>