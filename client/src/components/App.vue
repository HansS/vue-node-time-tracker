<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <li><a v-link="'/home'">Home</a></li>
          <li><a v-link="'/time-entries'">Time Entries</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>      
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  
  export default {
    components: { 'sidebar': Sidebar },
    data() {
      return {
        totalTime: null
      }
    },
    events: {
      anotherUpdate(timeEntry) {
        this.totalTime += timeEntry.totalTime;
      },
      deleteTime(timeEntry) {
        this.totalTime -= timeEntry.totalTime;
      }
    }
  }
</script>