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

        <Destination
            :dest="dest"
        />
    </form>
</template>

<script>
    //data
    import common from './kernel/common'
    import destination from './kernel/destination'

    //components
    import BasicInfo from './components/BasicInfo.vue'
    import Destination from './components/Destination.vue'
    
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
                dontSendSMS: false,

                //Destination
                dest: destination.getDestination
            }
        },

        components: {
            BasicInfo,
            Destination,
        },

        methods: {
            checked(checkMark) {
                this.dontSendSMS = checkMark
            }
        }
    }
</script>

<style lang="scss">
    .required {
        color: #f00;
        font-size: 10px;
    }

    .pointer {
        cursor: pointer
    }

    label {
        cursor: pointer
    }
</style>
