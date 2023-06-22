<template>
  <v-container>
    <h2>Vue + Spring + JPA 게시판 읽기</h2>
    <v-card v-if="board">
      <v-card-title>게시물 정보</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="board.title" readonly label="제목"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="board.writer" readonly label="작성자"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="board.createDate" readonly label="등록일자"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea v-model="board.content" readonly label="본문"></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-col cols="auto">
              <router-link
                    :to="{ name: 'VuetifyBoardModify', params: { boardId } }">
                <v-btn color="primary">게시물 수정</v-btn>
              </router-link>
            </v-col>
            <v-col cols="auto">
              <v-btn color="error" @click="onDelete">삭제</v-btn>
            </v-col>
            <v-col cols="auto">
              <router-link :to="{ name: 'VuetifyBoardList' }">
                <v-btn color="secondary">돌아가기</v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';

const boardModule = 'boardModule'

export default {
  name: "VuetifyBoardRead",
  props: {
    boardId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(boardModule, ['board'])
  },
  methods: {
    ...mapActions(
      boardModule, ['requestBoardToSpring', 'requestDeleteBoardToSpring']
    ),
    async onDelete () {
      await this.requestDeleteBoardToSpring(this.boardId)
      await this.$router.push({ name: 'VuetifyBoardList' })
    }
  },
  created () {
    this.requestBoardToSpring(this.boardId)
  }
}
</script>

<style scoped>

</style>