<template>
    <div>
        <p>{{testValue}}</p>
        <input ref="test" id="test" />
        <button @click="myTest">click</button>
    </div>
</template>

<script>
    import {myObj} from '../assets/js/test.js';
    export default{
        data(){
            return {
                testValue:'你好！'
            }
        },
        methods:{
            myTest(){
                myObj.getValue();
            }
        }
    }
</script>