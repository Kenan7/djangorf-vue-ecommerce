<template>
    <div></div>
</template>

<script>
import storeproducts from "../store/storeproducts";
export default {
    computed: {
        storeproducts() {
            return storeproducts.state.storeproducts;
        },
    },
};
</script>
