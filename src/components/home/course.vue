<template>
    <div class="card shadow-sm">
        <div class="card-header bg-white">
            <i class="fa fa-clock-o text-primary" aria-hidden="true"></i>&nbsp;ONGOING
            <div class="justify-content-md-between d-md-flex">
                <div >
                    <h3>Big Data Engineering Hadoop and spark training</h3>
                </div>
                <div >
                    <button class="btn btn-primary text-uppercase"> Continue to course</button>
                </div>
            </div>
        </div>
        <ul class="nav bg-light">
            <li class="nav-item border-right">
                <a class="nav-link text-black-50 active" href="#">Report</a>
            </li>
            <li class="nav-item border-right">
                <a class="nav-link text-black-50" href="#">Performance Analytics</a>
            </li>
            <li class="nav-item border-right">
                <a class="nav-link text-black-50" href="#">Batch Performance</a>
            </li>
        </ul>
        <div class="card-body">

            <div class="row">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="text-center">
                                <div class="progress" data-percentage="50">
                                       <span class="progress-left">
                                       <span class="progress-bar"></span>
                                       </span>
                                    <span class="progress-right">
                                       <span class="progress-bar"></span>
                                       </span>
                                    <div class="progress-value">
                                        <div>
                                            <p class="valueprgs">60%<br>
                                                <span>completed</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p>Session Attended</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center">
                                <div class="progress" data-percentage="50">
                                       <span class="progress-left">
                                       <span class="progress-bar"></span>
                                       </span>
                                    <span class="progress-right">
                                       <span class="progress-bar"></span>
                                       </span>
                                    <div class="progress-value">
                                        <div>
                                            <p class="valueprgs">1400<br>
                                                <span>of 1500</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p>Points</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center mt-3">
                                <img src="/static/images/rank.png" alt="" style="width: 62px" class="mb-4">
                                <p class="mb-0"><strong>12</strong></p>
                                <p class="mb-0 text-muted">of 18</p>
                                <p class="mb-0 text-muted">Rank</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="text-center mt-3">
                                <img src="/static/images/clock.png" alt="" style="width: 62px" class="mb-4">
                                <p class="mb-0"><strong>06</strong><small class="text-muted">Hrs</small></p>
                                <p class="mb-0 text-muted">21 mins</p>
                                <p class="mb-0 text-muted">Time Spent</p>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <div class="col-md-6">
                            <div class="alert alert-dark" role="alert" style="margin-left: -20px;border-radius: 0px">
                                <h6><strong>Next Up: 2 Hours from now</strong></h6>
                                <p>Session #13 on 08/04/2017 (IST) at 09:00 AM</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="alert alert-danger" role="alert">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <img src="/static/images/goal.png" alt="">
                                        <p class="text-primary pt-1">52%</p>
                                    </div>
                                    <div>
                                        <h6><strong>Great Going Anjali!</strong></h6>
                                        <p>You are on track for the Silver Certification</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="d-flex flex-column justify-content-between" style="height: 100%">
                        <div class="achievements d-flex flex-column justify-content-between align-items-center mb-2">
                            <h5 class="py-3">Achievements</h5>
                            <img src="/static/images/Achievements.png" alt="">
                            <a href="#" class="text-primary py-3">View All ></a>
                        </div>
                        <div class="certificate d-flex flex-column justify-content-between align-items-center">
                            <h5 class="py-3">Certificate</h5>
                            <img src="/static/images/Cert.png" alt="">
                            <a href="#" class="text-primary py-3">View Sample Certificate ></a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "course"
    }
</script>

<style scoped>

</style>