<template>
    <div>
        <label for="document">
            Тип документа
            <sup class="required">
                &#10059; <!-- Звездочка -->
            </sup>
        </label>
        <select 
            name="document" 
            id="document"
        >
            <option 
                v-for="(document, index) in doctype"
                :key="index"
            >
                {{ document.docName }}
            </option>
        </select>
        <div 
            v-for="input in inputs"
            :key="inputs[input]"
        >   
            <label :for="input.label">
                {{ input.label }}
            </label>
            <input 
                :type="input.type"
                :name="input.name"
                :id="input.label"
                :required="input.required" 
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Documents',

        props: {
            doctype: {
                type: Array,
                required: true,
            },
            inputs: {
                type: Array,
                required: true,
            },
        }
    }
</script>