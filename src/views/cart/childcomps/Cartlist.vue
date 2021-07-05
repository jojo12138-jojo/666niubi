<template>
  <div>
      <Cartlistitem v-for="(item, index) in cartlist" :key="index" :shopinfo='item'></Cartlistitem>
  </div>
</template>

<script>
import Cartlistitem from './Cartlistitem'

export default {
    name: 'Cartlist',
    components: {
      Cartlistitem,
    },
    computed: {
        cartlength() {
          return this.$store.state.cartlist.length
        },
        cartlist() {
          return this.$store.state.cartlist
        }
    }
}
</script>

<style scoped>

</style>