<template>
    <div>
        <agheader></agheader>

        <div class="container">
            <submissiondue></submissiondue>
            <ticketresponse></ticketresponse>
            <course></course>
            <referearn></referearn>
            <h1>Welcome</h1>
        </div>
    </div>

</template>

<script>
    import agheader from '@/components/home/header'
    import submissiondue from '@/components/home/submissiondue'
    import ticketresponse from '@/components/home/ticketresponse'
    import course from '@/components/home/course'
    import referearn from '@/components/home/referearn'
    export default {
        name: "home",
        components:{
            agheader,
            submissiondue,
            ticketresponse,
            course,
            referearn
        }
    }
</script>

<style scoped>

</style>