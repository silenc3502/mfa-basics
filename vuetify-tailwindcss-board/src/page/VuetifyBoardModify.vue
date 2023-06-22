<template>
    <v-container>
        <h2>Vue + Spring + JPA 게시판 수정</h2>
        <v-card v-if="board">
            <v-card-title>게시물 정보</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="title" label="제목"></v-text-field>
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
                            <v-textarea v-model="content" label="본문"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row justify="end">
                        <v-col cols="auto">
                            <v-btn color="primary" @click="onModify">게시물 수정</v-btn>
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
    name: "VuetifyBoardModify",
    props: {
        boardId: {
            type: String,
            required: true,
        },
    },
    data () {
        return {
            title: '',
            content: '',
            writer: '',
        }
    },
    computed: {
        ...mapState(boardModule, ['board'])
    },
    methods: {
        ...mapActions(
            boardModule, ['requestBoardToSpring', 'requestBoardModifyToSpring']
        ),
        async onModify () {
            console.log("title: " + this.title + ", content: " + this.content + ", writer: " + this.writer + ", boardId: " + this.boardId)

            const payload = {
                title: this.title,
                writer: this.writer,
                content: this.content,
                boardId: this.boardId
            };

            await this.requestBoardModifyToSpring(payload)
            await this.$router.push({
                name: 'VuetifyBoardRead',
                params: { boardId: this.boardId }
            })
        }
    },
    created () {
        this.requestBoardToSpring(this.boardId).then(() => {
            this.title = this.board.title;
            this.content = this.board.content;
            this.writer = this.board.writer;
        });
    },
}
</script>

<style scoped>

</style>