import Vue from 'vue';
import BaseButton from '@/components/basic/BaseButton';
import IconComponent from '@/components/basic/IconComponent';
import BaseInput from '@/components/basic/BaseInput';

const components = {
    BaseButton,
    IconComponent,
    BaseInput,
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})