<template>
    <form 
        action="#" 
        id="user"
    >
        <BasicInfo  
            :textInput="textInput"
            :anotherInput="anotherInput"
            :sexSelect="sexSelect"
            :clientGroup="clientGroup"
            :doctors="doctors"
            @checked="checked"
        />
    </form>
</template>

<script>
    import common from './kernel/common'
    import BasicInfo from './components/BasicInfo.vue'
    
    export default {
        name: 'App',
        
        data() {
            return {
                //BasicInfo
                textInput: common.dataTextType, //Array 
                anotherInput: common.dataAnotherType, //Array
                sexSelect: common.sex , //Array
                clientGroup: common.clientGroup, //Object
                doctors: common.doctors, //Object
                dontSendSMS: false
            }
        },

        components: {
            BasicInfo,
        },

        methods: {
            checked(checkMark) {
                this.dontSendSMS = checkMark
            }
        }
    }
</script>
