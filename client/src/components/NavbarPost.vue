<script>
import { mapActions} from 'pinia'
import { useAppStore } from '../stores/app'

export default {
  methods: {
    ...mapActions(useAppStore, ['logout']),
  },

}
</script>

<template>
       <nav class=".bg-warning.bg-gradient shadow">
            <a href="" class="logo">HACKTIV8 JURNAL</a>
            <form class="form-inline">
                <div class="input-group">
                    <p class="btn btn-dark" @click="logout">logout</p>
                </div>
            </form>
            
        </nav>
</template>