<template>
    <div class="card-information__container">
        <ion-icon :name="iconName" />
        <h5>{{ title }}</h5>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>

.card-information__container {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background-color: #FFF;
    transition: 200ms;
}
.card-information__container:hover {
    box-shadow: #4247835d 0px 7px 29px 0px;
    transform: translateY(-18px);
}
h5 {
    margin: 0;
    padding-top: 16px;
}
p {
    margin: 0;
}
ion-icon {
    font-size: 65px;
    color: #8ac119;
}
</style>