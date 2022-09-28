<template>
<div>
    <div class="landing-page__container">
        <div class="landing-page__content-left">
            <img src="@/assets/images/logo.png" />
            <h1>{{ title }}</h1>
            <h4>{{ text }}</h4>
                <primary-button
                    path="/home"
                    text="Falar com o Frank"
                />
        </div>
        <div class="landing-page__content-right">
            <img 
                class="landing-page__banner"
                src="@/assets/images/banner.png" 
            />
        </div>
    </div>
    <div class="landing-page__information">
        <card-information 
            iconName="time-outline"
            alt="time"
            title="AGILIDADE"
            text="Para atender você"
        />
        <card-information 
            iconName="bar-chart-outline"
            alt="bar-chart"
            title="DESEMPENHO"
            text="Máximo"
        />
        <card-information 
            iconName="rocket-outline"
            alt="rocket"
            title="MISSÃO"
            text="Surpreender você"
        />
        <card-information 
            iconName="analytics-outline"
            alt="analytics"
            title="VISÃO"
            text="Futuro"
        />
        <card-information 
            iconName="heart-outline"
            alt="heart"
            title="VALORES"
            text="Sua satisfação"
        />
    </div>
    <div class="landing-page__banner03">
        <h1>Atendimento Inteligente</h1>
        <div class="landing-page__banner03-content">
            <img 
                class="landing-page__banner"
                src="@/assets/images/banner03.png" 
            />
            <div class="landing-page__banner03-content-items">
                <p><ion-icon name="caret-forward-outline" />Nos adequamos ao avanço da tecnologia e procuramos métodos ágeis para te atender melhor.</p>
                <p><ion-icon name="caret-forward-outline" />Oferecemos ao cliente soluções no tratamento de superfícies com qualidade, agilidade e otimização de custos.</p>
                <p><ion-icon name="caret-forward-outline" />Prezamos por ética nos relacionamentos e negócios, valorização das pessoas e colaboradores, respeito ao ser humano, comprometimento e transparência.</p>
                <p><ion-icon name="caret-forward-outline" />Garantimos qualidade preservando o meio ambiente.</p>
            </div>
        </div>
    </div>
    <div class="landing-page__container">
        <div class="landing-page__content-left-secondary">
            <lottie
                :options="defaultOptions"
                :width="450"
                :height="450"
            />
        </div>
        <div class="landing-page__content-right-secondary">
            <h1>Contate-nos!</h1>
            <p><ion-icon name="mail-outline" /> altapint@altapint.com.br</p>
            <p><ion-icon name="logo-whatsapp" /> (21) 99694-5796</p>
        </div>
    </div>
</div>
</template>

<script>
import * as animationData from '../assets/animations/message.json';
import PrimaryButton from '../components/PrimaryButton.vue';
import CardInformation from '../components/CardInformation.vue';

export default {
    name: 'Landing',
    data() {
        return {
            title: 'Frank Atendimentos',
            text: 'Além de um atendimento, uma experiência!',
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
    background-color: #424783;
    border-radius:  80%  0%  0% 80% ;
}
.landing-page__informations {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}
.landing-page__banner03 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.landing-page__banner03-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    gap: 100px;
    margin-bottom: 200px;
}
.landing-page__banner03-content-items ion-icon {
    margin-right: 15px;
}
.landing-page__banner03-content p {
    font-size: 20px;
}
.landing-page__content-left-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #424783;
    border-radius:  0% 80% 80% 0%;
}
.landing-page__content-right-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.landing-page__content-right-secondary p {
    font-size: 22px;
    margin: 8px;
}
.landing-page__content-right-secondary ion-icon {
    font-size: 16px;
    color: #8ac119;
}
.landing-page__information {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top: 200px;
    margin-bottom: 200px;
}
.landing-page__banner {
    width: 500px;
    height: 500px;
}
a {
    text-decoration: none;
}
h1 {
    font-size: 42px;
    margin: 0;
    color: #424783;
}
h4 {
    font-size: 28px;
    font-weight: 400;
    margin: 0;
}
img {
    width: 230px;
}


</style>