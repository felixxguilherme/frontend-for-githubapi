<template>
    <div class="cardlist__container">
        <div class="cardlist__infos">
            <div class="cardlist__infos_name">
                {{ ownerName }} <strong>{{ repName }}</strong>
            </div>
            <div class="cardlist__infos_description">
                {{ description }}
            </div>
            <div>
                <slot></slot>
            </div>
        </div> 
    </div>
</template>

<script>
export default {

    props: {
        ownerName: {
            type: String,
            default: ''
        },
        repName: {
            type: String,
            default: 'estudos em vuejs'
        },
        description: {
            type: String,
            default: 'a personal website using vueJs'
        }
    }

}
</script>

<style>

</style>