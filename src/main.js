/**
 * Created by heimao on 2017/4/26.
 */
//main.js������Ŀ�ĺ����ļ���ȫ�ֵ����ö�������ļ���������
import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import './assets/styles/base.css';
//import './assets/sass/reset.sass'//������ʱ����sass
Vue.config.debug = true;//����������ʾ

new Vue({
        router,
        el: '#appIndex',
        render:h => h(App)
});