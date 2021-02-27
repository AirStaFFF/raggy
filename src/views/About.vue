<template>
  <div>
    <v-calendar ref="calendar" :rows="1" :first-day-of-week="2" class="w-full rounded-none border-0" :masks="{ weekdays: 'WWWW' }" :attributes="attributes" :key="ghettoUpdate">
      <template slot="day-content" slot-scope="props">
        <div v-if="props.day.inMonth" class="h-24 min-h-24">
          <div class="p-2">
            <span class="font-semibold">{{ props.day.day }}</span>
          </div>
          <div v-if="props.attributesMap">
            <!-- Should probably check if the event actually occurs on this date -->
<!--            <div v-for="dayEvent in props.attributesMap.events.customData.events">-->
<!--              <div class="w-full py-1 px-2 bg-indigo-600 text-sm text-white">{{ dayEvent.name }}</div>-->
<!--            </div>-->
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
  import VCalendar from 'v-calendar/lib/components/calendar.umd'
  export default {
    name: 'EventCalendar',
    components: {
      VCalendar
    },
    data() {
      return {
        ghettoUpdate: 0,
        attributes: [{
          key: 'events',
          dates: [],
          customData: {
            events: []
          }
        }],
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.addEvent('Figure out this strange syntax', '2020-08-04T00:00:00Z');
      })
    },
    methods: {
      addEvent(name, date) {
        // Create a new date object here with the date fed in
        // Push the date into the list
        this.attributes[0].dates.push(new Date(date));
        // Add the event and date
        this.attributes[0].customData.events.push({
          name: name,
          date: date
        });
        // Calendar does not seem to update here if we update the props, so use a key for now
        this.ghettoUpdate += 1;
      }
    }
  }
</script>

<style>
  .vc-day:not(.on-right) {
    border-right: 1px solid rgb(226, 232, 240);;
  }
  .vc-day:not(.on-left) {
    border-right: 1px solid rgb(226, 232, 240);;
  }
  .vc-day:not(.on-bottom) {
    border-bottom: 1px solid rgb(226, 232, 240);;
  }
  .vc-text-sm {
    font-size: 14px !important;
  }
</style>
