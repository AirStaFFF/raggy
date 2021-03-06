<template>
  <div class="calendar">
    <h2>Calendar</h2>
    <calendar-form
      v-if="day"
      class="form"
      @on-submit="setDate($event)"
    />
    <v-calendar
      class="custom-calendar"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
    >
      <div
        slot="day-content"
        slot-scope="{ day, attributes }"
        class="z-10"
        @click="edit(day)"
      >
        <span>{{ day.day }}</span>
        <div>
          <p
            v-for="attr in filterAttrs(attributes)"
            :key="attr.key"
            :class="attr.customData.class"
          >
            <span v-if="attr.key !== 'today'">
              {{ attr.customData.start }} - {{ attr.customData.end }}
            </span>
          </p>
        </div>
      </div>
    </v-calendar>
  </div>
</template>

<script>
  import CalendarForm from '@/components/CalendarForm';
  import VCalendar from 'v-calendar/lib/components/calendar.umd'
  export default {
    components: {
      VCalendar,
      CalendarForm
    },
    data() {
      return {
        masks: {
          weekdays: 'WWW',
        },
        attributes: [
          {
            key: 'today',
            dot: true,
            dates: new Date(),
            customData: {
              class: ''
            }
          },
        ],
        day: null,
      };
    },
    methods: {
      edit(day) {
        this.day = day
      },
      setDate({mode, start, end}) {
        const data = this.createDate(start, end, mode)
        data.key = this.attributes.length + 1
        this.attributes.push(data)
        this.day = null
      },
      createDate(start, end, mode) {
        const month = mode === 'single' ? [new Date(this.day.date).getMonth() + 1] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const data = {
          customData: {
            mode,
            start,
            end,
            class: '',
          },
          dates: {
            months: [...month],
            days: this.day.day
          }
        }
        return data
      },
      filterAttrs(attrs) {
        if (attrs && attrs.length) {
          const index = attrs.findIndex(({ customData }) => customData.mode === 'single')
          if (index !== -1) return attrs.filter(({ customData }) => customData.mode === 'single' || customData.mode === 'today')
          return attrs
        }
        return attrs
      }
    }
  };
</script>

<style lang="scss">
  .calendar {
    max-width: 1060px;
    margin-left: auto;
    margin-right: auto;
  }
  .vc-day {
    width: 150px !important;
    height: 100px !important;
    &:nth-child(even) {
      background: #D3D3D3;
    }
    &:nth-child(odd) {
      background: #E0E0E0;
    }
    .z-10 {
      padding: 5px;
      width: 150px !important;
      height: 100px !important;
      overflow-y: scroll;
    }
  }
</style>
