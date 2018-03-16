<template>
    <div id="app">
        Count : {{$store.state.count}}
        <br>
        <br>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
        <br>
        <br>
        调用计算属性： {{add}}
    </div>
</template>

<script type="text/ecmascript-6">

    import {mapGetters,mapActions} from 'vuex'

    export default {
        methods:mapActions([
            "increment",
            "decrement"
        ]),
        computed:mapGetters([
            "add"
        ])
    }

</script>
