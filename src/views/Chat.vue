<template>
  <div class="home__container">
        <div class="home__container-content">
            <div class="home__content">
                <lottie
                    :options="defaultOptions"
                    :width="100"
                    :height="100"
                />
                <iframe 
                    src="https://web.powerva.microsoft.com/environments/Default-a70b6cf1-294d-4251-9456-c01e5624032b/bots/new_bot_8088a2608a50494e8d2c31c4bb2d2c1f/webchat" 
                    frameborder="0" 
                    id="header"
                    style="width: 500px; height: 600px;"
                />
            </div>
        </div>
  </div>
</template>

<script>
import * as animationData from '../assets/animations/robot.json';
import PrimaryButton from '../components/PrimaryButton.vue';

export default {
    name: 'Chat',
    data() {
        return {
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
    background-color: #424783;
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
.header .header-123 {
    display: none;
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
a {
    text-decoration: none;
}
</style>
