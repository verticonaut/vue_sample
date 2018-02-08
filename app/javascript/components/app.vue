<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>
      <sui-button primary class-name='mini'>
        <sui-icon name='user'/>
        icon inline
      </sui-button>
      <sui-button primary icon='user' class-name='mini'>
        icon via attr
      </sui-button>
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
