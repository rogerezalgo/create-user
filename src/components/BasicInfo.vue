<template>
    <div>
        <div 
            class="initials"
            v-for="parameter in textInput" 
            :key="parameter.id"
        >
            <label :for="parameter.for">
                <div>
                    {{ parameter.label }}
                    <span
                        v-if="parameter.required"
                        class="required"
                    >
                        <sup>
                            &#10059; <!-- Звездочка -->
                        </sup>
                    </span>
                </div>
            </label>
            
            <input
                type="text"
                :name="parameter.name" 
                :id="parameter.id" 
            />
        </div>

        <div 
            class="digitalInfo"
            v-for="parameter in anotherInput"
            :key="parameter.id"
        >
            <label :for="parameter.for">
                {{ parameter.label }}
                    <span
                        v-if="parameter.required"
                        class="required"
                    >
                        <sup>
                            &#10059; <!-- Звездочка -->
                        </sup>
                    </span>
            </label>
            
            <input 
                :type="parameter.type" 
                :name="parameter.name" 
                :id="parameter.id"
            >
        </div>
        
        <div 
            class="sex"
            v-for="sex in sexSelect"
            :key="sex.id"
        >   
            <input 
                type="radio" 
                :name="sex.name" 
                :id="sex.id"
            >
            <label 
                class="pointer"
                :for="sex.id"
            >
                {{ sex.label }}
            </label>
        </div>

        <!-- Группа клиента -->
        <label 
            :for="clientGroup.name_id"
        >
            Группа клиентов
            <sup class="required">
                &#10059; <!-- Звездочка -->
            </sup>
        </label>

        <select 
            :name="clientGroup.name_id" 
            :id="clientGroup.name_id"
            :multiple="clientGroup.multiple"
        >
            <option
                v-for="option in clientGroup.options"
                :key="clientGroup.options[option]"
            >
                {{ option }}
            </option>
        </select>

        <!-- Выбор врача -->
        <label :for="doctors.name_id">
            Лечащий врач
        </label>

        <select 
            :name="doctors.name_id" 
            :id="doctors.name_id"
        >
            <option
                v-for="option in doctors.options"
                :key="doctors.options[option]" 
            >
                {{ option }}
            </option>
        </select>
        
        <input 
            type="checkbox" 
            name="sms" 
            id="sms"
            v-model="dontSendSMS"
            @change="checked"
        >

        <label for="sms">
            Не отправлять SMS
        </label>
    </div>
</template>

<script>   
    export default {
        name: 'BasicInfo',

        props: {
            textInput: {
                type: Array,
                required: true,
            },
            anotherInput: {
                type: Array,
                required: true,
            },
            sexSelect: {
                type: Array,
                required: true,
            },
            clientGroup: {
                type: Object,
                required: true,
            },
            doctors: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {
                dontSendSMS: false
            }
        },

        methods: {
            checked() {
                this.$emit('checked', this.dontSendSMS)
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