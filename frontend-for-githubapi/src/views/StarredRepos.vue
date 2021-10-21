<template>
    <div class="list__container">
        <div class="search__input">
            <input type="search" placeholder="Filter by name"
            v-model="nameToFilter">
        </div>

        <CardList v-for="(rep, idx) in filteredReps" :key="idx"
            :repName="rep.name"
            :description="rep.description"
            :ownerName="rep.owner.login+' /'">
            <div class="cardlist__infos_evaluation">
                <div class="cardlist__infos_evaluation--item">
                    <img src="../assets/icons/star-icon.svg" alt="starIcon">
                    {{ rep.stargazers_count}}
                </div>
                <div class="cardlist__infos_evaluation--item">
                    <img src="../assets/icons/git-icon.svg" alt="gitIcon">
                    {{ rep.forks }}                    
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
        this.repos = this.$store.getters.starredRepos
    }

}
</script>

<style>

</style>