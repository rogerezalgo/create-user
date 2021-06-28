<template>
    <div>
        <div 
            v-for="area in dest"
            :key="dest[area]"
        >
            <label :for="area.for">
                {{ area.label }}

                <span
                    v-if="area.required"
                    class="required"
                >
                    <sup>
                        &#10059; <!-- Звездочка -->
                    </sup>
                </span>
            </label>

            <input 
                :type="area.type"
                :name="area.name"
                :id="area.name"
                :required="area.required"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Destination',

        props: {
            dest: {
                type: Array,
                required: true,
            }
        }
    }
</script>