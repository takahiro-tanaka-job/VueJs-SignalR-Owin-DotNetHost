import Vue from 'vue';

export default class Controler {

  private vue: Vue;
  private count = -1;

  constructor(vue: Vue) {
    this.vue = vue;
    window.setInterval(this.timerAction.bind(this), 1000);
  }

  private timerAction() {
    this.count += 1;
    console.error(`${this.count}`);

    if (this.count === 0) {
      this.vue.$router.push('/Page1');
    }
    else if (this.count === 1) {
      this.vue.$router.push('/Page1?val=1');
    }
    else if (this.count === 2) {
      this.vue.$router.push('/Page1?val=2');
    }
    else if (this.count === 3) {
      this.vue.$router.push('/Page1?val=3');
    }
    else if (this.count === 4) {
      this.vue.$router.push('/Page1?val=4');
    }
    else if (this.count === 5) {
      this.vue.$router.push('/Page2');
    }
    else if (this.count === 6) {
      this.vue.$router.push('/Page2?val=1');
    }
    else if (this.count === 7) {
      this.vue.$router.push('/Page2?val=2');
    }
    else if (this.count === 8) {
      this.vue.$router.push('/Page2?val=3');
    }
    else if (this.count === 9) {
      this.vue.$router.push('/Page2?val=4');
      this.count = -1;
    }
    else {
      debugger;
    }
  }
}