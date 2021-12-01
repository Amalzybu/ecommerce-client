<template>
  <li class="nav-item dropdown">
    <a
      class="dropdown-toggle nav-link text-center"
      data-toggle="dropdown"
      aria-expanded="false"
      @click="toggleShow"
      ><i class="icon-user" style="font-size: 18px"></i
    ></a>
    <div class="dropdown-menu">
      <a class="dropdown-item" 
        ><strong>{{ get_user.email }}</strong></a
      >
      <div class="dropdown-divider"></div>
      <router-link class="dropdown-item" to="/orderlist"
        >Orders List</router-link
      >
      <a class="dropdown-item text-danger" @click="logout">Log Out</a>
    </div>
  </li>
</template>



<script>
export default {
  computed: {
    get_user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    logout() {
      this.$store.commit("removeUser");
    },
  },
};
</script>

