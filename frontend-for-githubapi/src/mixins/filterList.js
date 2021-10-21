export const filterList = {
    data: function () {
        return {
            nameToFilter: '',
            repos: [],
            filtered: []
        }
    },

    computed: {
        filteredReps () {
            if (!this.nameToFilter) {
                return this.repos                
            } else {
                let exp = new RegExp(this.nameToFilter.trim(), 'i')
                const result = this.repos.filter(rep => exp.test(rep.name))
                this.filtered = result
                return this.filtered              
            }
        }
    }
}