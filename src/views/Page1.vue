<template>
  <div class="hage1">
    <Navigation />
    <Component1 value="Page1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Component1 from '@/components/Component1.vue';

@Component({
  components: {
    Navigation,
    Component1,
  },
})
export default class Page1 extends Vue { 

  private beforeCreate() { console.info('App.vue : beforeCreate()'); }
  private created() { console.info('App.vue : created()'); }
  private beforeMount() { console.info('App.vue : beforeMount()'); }
  private mounted() { console.info('App.vue : mounted()'); }
  private beforeUpdate() { console.info('App.vue : beforeUpdate()'); }
  private updated() { console.info('App.vue : updated()'); }
  private beforeDestory() { console.info('App.vue : beforeDestory()'); }
  private destoryed() { console.info('App.vue : destoryed()'); }

}
</script>

<style lang="scss">
</style>