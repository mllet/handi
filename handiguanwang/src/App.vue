<template>
    <div id="app">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </div>
</template>

<script>
    import header from '@/components/comm/header';
    import footer from '@/components/comm/footer';
    import home from '@/components/pages/home';
    export default {
        name: 'App',
        components:{
            Header:header,
            Home:home,
            Footer:footer
        }
    }
</script>

<style lang="less">
    @import "../static/css/comm.less";
</style>
