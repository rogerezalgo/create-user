<template>
    <form 
        action="#" 
        id="user"
    >
        <div class="container">
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

            <Documents
                :doctype="docType"
                :inputs="inputs" 
            />
        </div>
    </form>
</template>

<script>
    //data
    import common from './kernel/common'
    import destination from './kernel/destination'
    import documents from './kernel/docs'

    //components
    import BasicInfo from './components/BasicInfo.vue'
    import Destination from './components/Destination.vue'
    import Documents from './components/Document.vue'
    
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
                dest: destination.getDestination,

                //Documents
                docType: documents.docType,
                inputs: documents.inputs,
            }
        },

        components: {
            BasicInfo,
            Destination,
            Documents,
        },

        methods: {
            checked(checkMark) {
                this.dontSendSMS = checkMark
            }
        }
    }
</script>

<style lang="scss">
    form {
        display: flex;
        margin: 0 auto;
        width: 60%;

        padding: 20px;
        justify-content: center;

        border: solid 1px #333;
        border-radius: 10px;
    }
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
