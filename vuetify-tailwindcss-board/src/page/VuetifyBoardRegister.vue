<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
                v-model="title"
                label="Title"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
                v-model="writer"
                label="Writer"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
                v-model="content"
                label="Content"
                auto-grow
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn color="primary" @click="onSubmit">Save</v-btn>
        <v-btn color="error" @click="onCancel">Cancel</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { mapActions } from 'vuex';

const boardModule = 'boardModule'

export default {
  name: "VuetifyBoardRegister",
  data () {
    return {
      title: '',
      writer: '',
      content: ''
    };
  },
  methods: {
    ...mapActions(
      boardModule, ['requestCreateBoardToSpring']
    ),
    async onSubmit () {
      const payload = {
        title: this.title,
        writer: this.writer,
        content: this.content
      };

      const board = await this.requestCreateBoardToSpring(payload);
      console.log('board: ', board)
      await this.$router.push({
        name: 'VuetifyBoardRead',
        params: { boardId: board.boardId.toString() }
      });
    },
    onCancel() {
      this.$router.go(-1); // 이전 페이지로 돌아가기
    }
  }
}
</script>

<style scoped>

</style>