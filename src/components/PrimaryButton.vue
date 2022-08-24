<template>
    <router-link :to="path">
        <button class="button">{{ text }}</button>
    </router-link>
</template>

<script>

export default {
    name: 'PrimaryButton',
    data() {
        return {

        }
    },
    props: {
        path: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        }
    }
}
</script>

<style scoped>

.button {
    font-size: .9rem;
    border-radius: .3rem;
    padding: .8rem 1.2rem;
    border: none;
    font-weight: 500;
    color: #FFF;
    background-color: #6857db;
    cursor: pointer;
    transition-duration: 0.4s;
}
.button:hover {
    opacity: .9;
}

</style>

