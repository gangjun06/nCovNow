<template>
  <v-card class="mx-auto my-4 text-center" max-width="856">
    <v-toolbar flat dense dark color="primary">
      <v-toolbar-title>QnA</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      코로나와 관련된 거짓뉴스, 햇갈리는 사실들을 정리하여 놓았습니다. (혹시나
      잘못된 정보가 올라와있으면 admin@gangjun.dev로 제보해주시면
      감사하겠습니다.)
      <v-expansion-panels class="my-4">
        <v-expansion-panel v-for="qna in qnaList" :key="qna.key">
          <v-expansion-panel-header>{{ qna.Q }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ qna.A }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import {db} from "./../plugins/firebase"
export default {
  data: () => ({
    qnaList: []
  }),
  async mounted() {
    const snapshot = await db.collection("qna").get()
    snapshot.forEach((item, index) => {
        const data = item.data()
        this.qnaList.push({
            key:index,
            Q:data.Q,
            A:data.A
        })
    })
  }
}
</script>
