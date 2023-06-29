<template lang="ts">
  <v-container>
    <h2>안녕 Vue3 TypeScript 기반 Vuetify Board App이야</h2>
    <div style="text-align: left; margin: 15px;">
      <router-link to="/vuetify-board-app/register">
        게시물 작성
      </router-link>
    </div>
    <v-data-table
      v-model:items-per-page="perPage"
      :headers="headerTitle"
      :items="pagedItems"
      :pagination.sync="pagination"
      item-value="name"
      class="elevation-3"
      @click:row="readRow"
      item-key="boardId">
    </v-data-table>
    <v-pagination
      v-model="pagination.page"
      :length="Math.ceil(boards.length / perPage)"
      color="primary"
      @input="updateItems"
    ></v-pagination>
  </v-container>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import { RouterLink } from 'vue-router'

const boardModule = 'boardModule'

export default {
    components: { RouterLink },
    computed: {
        ...mapState(boardModule, ['boards']),
        pagedItems() {
            const startIndex = (this.pagination.page - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.boards.slice(startIndex, endIndex);
        },
    },
    mounted () {
        this.requestBoardListToSpring()
    },
    methods: {
        ...mapActions(
            boardModule, ['requestBoardListToSpring']
        ),
        readRow (e, { item }) {
            const selectedRowBoardId = item.selectable.boardId
            alert('게시물 읽기: ' + JSON.stringify(item.selectable.boardId))

            this.$router.push({
                name: 'VuetifyBoardRead',
                params: { boardId: selectedRowBoardId.toString() }
            })
        }
    },
    data () {
        return {
            headerTitle: [
                {
                    title: 'No',
                    align: 'start',
                    sortable: true,
                    key: 'boardId',
                },
                { title: '제목', align: 'end', key: 'title' },
                { title: '작성자', align: 'end', key: 'writer' },
                { title: '작성일자', align: 'end', key: 'createDate' },
            ],
            perPage: 5,
            pagination: {
                page: 1,
            },
        }
    }
}
</script>

<style scoped lang="scss">
</style>