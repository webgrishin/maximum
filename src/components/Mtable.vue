<template>
  <div class="mtable">
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      small
      left
    >
    <template v-slot:cell(index)="data">
      {{ data.index + 1 }}
    </template>
    <template v-slot:cell(title)="data">
      <router-link :to="`/lesson/${data.item.id}`">{{data.value}}</router-link>
    </template>
  </b-table>
</div>
</template>

<script>
export default {
  name: 'mtable',
  props: {
    items: Array,
    perPage: Number,
    currentPage: Number,
  },
  data() {
    return {
      fields: [
        {
          key:'index',
          label:'#'
        },
        {
          key:'title',
          label: 'Урок'
        },
        {
          key: 'startedAt',
          label: 'Дата начала',
          formatter: (value) => {
            let d = new Date(+value);
            return `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes()}`
          }
        },
      ],
    }
  },
}
</script>

