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
    align-items: center;
    background-color: #424783;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-weight: 600;
    justify-content: center;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 12px;
    text-align: center;
    transition: 200ms;
    margin-top: 24px;
}
.button:hover {
    opacity: .9;
}

</style>

