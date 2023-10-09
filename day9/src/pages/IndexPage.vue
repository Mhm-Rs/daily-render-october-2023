<script>
/* eslint-disable */
import ComponentsContainer from 'src/components/ComponentsContainer.vue';
import { useLocalNotes } from 'src/helpers';
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import NoteCard from "src/components/NoteCard.vue"

export default defineComponent({
  components: { NoteCard, ComponentsContainer },
  name: 'IndexPage',
  setup() {
    const notes = useLocalNotes()
    const router = useRouter()
    return { router, notes }
  }
})
</script>

<template>
  <q-page padding>
    <ComponentsContainer>
      <div>
        <h3>Your notes</h3>
      </div>
      <div>
        <q-btn round color="positive" icon="add" to="/new"></q-btn>
      </div>
      <NoteCard 
      v-for="({ title,description }, idx) in notes"
      :key="idx"
      :title="title"
      :description="description"
      @click="router.push(`/note/${idx}`)"
      />
      <div v-if="notes.length == 0">You haven't created any notes !</div>
    </ComponentsContainer>
  </q-page>
</template>


