<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div id="datepair">

        <div class="col-sm-3">
          <label>Start Date</label>
          <input 
            type="text"
            class="date start form-control"
            v-model="timeEntry.startDate"
            placeholder="Start Date"
          />
        </div>

        <div class="col-sm-3">
          <label>Start Time</label>
          <input 
            type="text" 
            class="time start form-control" 
            v-model="timeEntry.startTime" 
            placeholder="Start Time" 
          />            
        </div>
      
        <div class="col-sm-3">
          <label>End Date</label>
          <input 
            type="text"
            class="date end form-control"
            v-model="timeEntry.endDate"
            placeholder="End Date" 
          />  
        </div>

        <div class="col-sm-3">
          <label>End Time</label>
          <input
            type="text"
            class="time end form-control"
            v-model="timeEntry.endTime"
            placeholder="End Time"
          />            
        </div>
        
        <div class="col-sm-12">
          <label>Comment</label>
          <textarea 
            class="form-control"
            v-model="timeEntry.comment">
          </textarea>
        </div>

      </div>
    </div>
    <button class="btn btn-primary" @click="save()">Save</button>
    <button v-link="'/time-entries'" class="btn btn-danger">Cancel</button>
    <hr>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        timeEntry: {},
        user: {
          firstName: 'Ryan',
          lastName: 'Chenkie',
          email: 'ryanchenkie@gmail.com',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
        },
        comment: ''
      }
    },
    ready() {
      this.initialize();
    },
    methods: {
      initialize() {
        $('#datepair .time').timepicker({
          'showDuration': true,
          'timeFormat': 'g:ia'
        });

        $('#datepair .date').datepicker({
          'format': 'yyyy-mm-dd',
          'autoclose': true
        });
        $('#datepair').datepair();
      },
      save() {
        let date = this.timeEntry.endDate;
        let comment = this.timeEntry.comment;
        let totalTime = $('#datepair').datepair('getTimeDiff');

        let { timeEntry, user } = this;

        this.$dispatch('timeUpdate', {
          date,
          totalTime,
          user,
          comment,
          timeEntry
        });

        this.timeEntry = {};
        this.timeEntry.endTime = null;

      }
    }
  }
</script>

<style>
  .col-sm-3 {
    margin-bottom: 10px;
  }
</style>