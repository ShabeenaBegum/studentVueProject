<template>
    <div class="mt-4 shadow-sm">
        <div class="card">
            <div class="card-header bg-white border-0">
                <div class="d-flex justify-content-between">
                    <div>
                        Submission Due (2)
                    </div>
                    <div>
                        <button class="btn btn-link text-dark"> View all +</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="assignments" v-for="(i, index) in [1,2]">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="text-uppercase mb-0"><span class="badge badge-primary ">07</span> Days left</p>
                            <p class="text-uppercase text-muted">Due Date 24/01/2018</p>
                        </div>
                        <!--TODO check col totals-->
                        <div class="col-md-4">
                            <p class="mb-0"><strong>Assignment (Session -04)</strong></p>
                            <p class="text-muted">Big Data Engineering Hadoop and spark training</p>
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-link text-primary">View Details ></button>
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-link text-primary">Submit Assignment ></button>
                        </div>
                    </div>
                    <hr v-if="index+1 !== [1,2].length">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "submissiondue"
    }
</script>

<style scoped>

</style>