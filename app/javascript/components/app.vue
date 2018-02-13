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
    <p>
      <v-select :options="options_fix"></v-select>
    </p>

    <h1>Vue Select - Ajax</h1>
    <v-select label="name" :filterable="false" :options="options" @search="onSearch">
      <template slot="no-options">
        Type to search contacts.
      </template>
      <template slot="option" slot-scope="option">
        <div class="d-center">
          {{ option.first_name }}
        </div>
      </template>
      <template slot="selected-option" scope="option">
        <div class="selected d-center">
          {{ option.last_name }}
        </div>
      </template>
    </v-select>

  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers.common['X-ApiToken'] = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhdGVkX3VzZXJfbmFtZSI6MTA0OTQ4LCJzZWxlY3RlZF91c2VyX25hbWUiOjEwNDk0OCwicmVhc29uIjoibG9naW4ifQ.Krqc-MhO4KqRLoAzgWtJ3WYHaKhXADHk1GiHoHGNIEU';


export default {
  data: function () {
    return {
      message: "Hello Vue!",
      options_fix: [
        'foo',
        'bar',
        'baz'
      ],
      options: []
    }
  },
  methods: {
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: function(loading, search, vm) {
      // axios.get('https://api.github.com/search/repositories', 
      axios.get('https://test.contacts.slsag.ch/api/v1/contacts/contacts.json', 
        {
          params: {
            term: escape(search)
          }
        })
        .then(function (response) {
          vm.options = response.data.data.map(function(ele) { return ele });
          console.dir(vm.options);
          loading(false);
        })
        .catch(function (error) {
          console.log(error);
          loading(false);
        })
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

img {
  height: auto;
  max-width: 2.5rem;
  margin-right: 1rem;
}

.d-center {
  display: flex;
  align-items: center;
}

.selected img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
  border-bottom: none;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 100%;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}

</style>
