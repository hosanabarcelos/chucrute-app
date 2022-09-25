<template>
<div>
    <div class="landing-page__container">
        <div class="landing-page__content-left">
            <!-- <img src="@/assets/logo.svg" /> -->
            <h1>{{ title }}</h1>
            <h4>{{ text }}</h4>
        </div>
        <div class="landing-page__content-right">
            <lottie
                :options="defaultOptions"
                :width="350"
                :height="350"
            />
        </div>
    </div>
    <div class="landing-page__information">
        <card-information 
            iconName="star-outline"
            alt="nao sei"
            title="QUALIDADE"
            text=""
        />
        <card-information 
            iconName="heart"
            alt="nao sei"
            title="DESEMPENHO"
            text="VSF"
        />
        <card-information 
            iconName="heart"
            alt="nao sei"
            title="NAO SEI PORRA"
            text="VSF"
        />
        <card-information 
            iconName="heart"
            alt="nao sei"
            title="NAO SEI PORRA"
            text="VSF"
        />
    </div>
</div>
</template>

<script>
import * as animationData from '../assets/animations/painting.json';
import PrimaryButton from '../components/PrimaryButton.vue';
import CardInformation from '../components/CardInformation.vue';

export default {
    name: 'Landing',
    data() {
        return {
            title: 'Não sei o que Pinturas',
            text: 'Tinta de qualidade para casa e negócios.',
            defaultOptions: {
                animationData: animationData
            }
        }
    },
    components: {
        PrimaryButton,
        CardInformation
    }
}
</script>

<style scoped>
.landing-page__container {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.landing-page__content-left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.landing-page__content-right {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #97acfa2b;
     border-radius:  80%  0%  0% 80% ;
}
.landing-page__information {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top: 120px;
    margin-bottom: 120px;
}
h1 {
    font-size: 40px;
    margin: 0;
    color: #6857DB;
}
h4 {
    font-size: 28px;
    font-weight: 400;
    margin: 0;
}
img {
    width: 150px;
}


</style>