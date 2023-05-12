<template>
    <v-app-bar color="primary" app dark height="64">
        <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
        <v-btn @click="goToHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span>EDDI</span>
            </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>

        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                    color="white"
                    v-bind="props"
                >
                    <b>Activator slot</b>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn text @click="clickToggle">
            <span>테스트</span>
            <v-icon right>mdi-hand-back-left-outline</v-icon>
        </v-btn>
        <v-btn v-if="!isLogin" text @click="signUp">
            <span>회원가입</span>
            <v-icon right>mdi-account-plus-outline</v-icon>
        </v-btn>
        <v-btn v-if="!isLogin" text @click="signIn">
            <span>로그인</span>
            <v-icon right>mdi-login</v-icon>
        </v-btn>
        <v-btn v-if="isLogin" text @click="signOut">
            <span>로그아웃</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>

    <!--
    <v-navigation-drawer app v-model="navigation_drawer">
        <v-list-item>

            <v-list-item-title class="text-h6">EDDI</v-list-item-title>
            <v-list-item-subtitle>페이지 기능</v-list-item-subtitle>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item v-for="(link, index) in links" :key="link.index" router :to="link.route">
                <v-list-item-action>
                    <v-icon>
                        {{ link.icon }}
                    </v-icon>
                </v-list-item-action>
                <v-list-item-title>
                    {{ link.text }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    -->
</template>

<script>
//import router from '@/router'
import 'vuetify/dist/vuetify.min.css'

export default {
    data () {
        return {
            navigation_drawer: false,
            links: [
                { icon: 'mdi-home', text: 'Home', route: '/' }
            ],
            accountId: 0,
            isLogin: true,
            items: [
                { title: 'Click Me' },
                { title: 'Click Me55Click Me55Click Me55' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    },
    methods: {
        clickToggle () {
            alert('토글')
        },
        signUp () {
            alert('회원 가입')
        },
        signIn () {
            alert('로그인')
        },
        signOut () {
            alert('로그아웃')
        },
        goToHome () {
            alert('go to home')
        }
    },
    mounted () {

    }
}

</script>

<style scoped lang="scss">
.v-application--wrap {
    min-height: 0vh !important;
}
</style>