<template>
  <div class="home__container">
        <div class="home__container-content">
            <div class="home__content">
                <lottie
                    :options="defaultOptions"
                    :width="200"
                    :height="200"
                />
                <h2>{{ title }}</h2>
                <p>{{ subtitle }}</p>
                <primary-button
                    path="/chat"
                    text="Iniciar atendimento"
                />
            </div>
        </div>
  </div>
</template>

<script>
import * as animationData from '../assets/animations/robot.json';
import PrimaryButton from '../components/PrimaryButton.vue';

export default {
    name: 'Home',
    data() {
        return {
            title: 'Olá, querido(a) paciente!',
            subtitle: 'Eu sou o Chucrute e vou dar início ao seu atendimento. Preciso de algumas informações importantes para avaliarmos o seu caso. Vamos lá?',
            defaultOptions: {
                animationData: animationData
            }
        }
    },
    components: {
        PrimaryButton,
    }
}
</script>

<style scoped>

.home__container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#97adfa;
}
.home__container-content {
    height: 600px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1rem;
    background-color: #FAF7FD;
    z-index: 5;
}
.home__content {
    margin: 2.5rem;
    text-align: center;
}
h2 {
    font-size: 1.3rem;
    font-weight: 500;
}
p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5rem;
}
</style>
