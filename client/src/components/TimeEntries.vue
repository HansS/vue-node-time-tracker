<template>
  <div>

    <button 
      v-link="'/time-entries/log-time'"
      v-if="$route.path === '/time-entries'"
      class="btn btn-primary">
      Log Time
    </button>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>Log Time</h3>     
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>
      <div class="list-group">

        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">

            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ timeEntry.user.firstName }} 
                  {{ timeEntry.user.lastName }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i> 
                {{ timeEntry.totalTime | timeFormat }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i> 
                {{ timeEntry.date | dateFormat }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{ timeEntry.comment }}</p>
            </div>

            <div class="col-sm-1">
              <button 
                class="btn btn-xs btn-danger delete-button"
                @click="deleteTimeEntry(timeEntry)">
                Delete
              </button>
            </div>

          </div>        
        </a>

      </div>
    </div>    
  </div>
</template>

<script>
  export default {
    data() {
        return {
          timeEntries: []
        }
      },
      ready() {

      },
      methods: {
        deleteTimeEntry(timeEntry) {
          let index = this.timeEntries.indexOf(timeEntry);
          if (confirm("Are you sure you want to delete this time entry?")) {
            this.$dispatch('deleteTime', timeEntry);
            this.timeEntries.splice(index, 1);
          }
        }
      },
      events: {
        timeUpdate(timeEntry) {
          this.timeEntries.push(timeEntry);
          this.$dispatch('anotherUpdate', timeEntry);
        }
      }
  }
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>