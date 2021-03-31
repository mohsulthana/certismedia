<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.email">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.name }} ({{ activeUserInfo.username }})</p>
      <small>Available</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img key="onlineImg" src="https://dm2306files.storage.live.com/y4mH43MDunViHrbrPTJNkGNtFiLHRAruS4lffs_KSl5zrK4M4aujEq69c6ZKqhmBj4KZODL4cSrmuB_E-VnRT2SmGY91_veOFBgb17S8qCyuFzzXkfPbrCKcpdOlG02E5VWw2J6HVG5D1dQKJm7AqpF3yt9hhu6E7RdNXJLqtgdW3_hGuOULSFSiO5amM0qpXWV1KBIl4vdM_ptPlP62v5LIA/user-avatar.png?psid=1&width=432&height=411" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    logout() {
        this.$store.dispatch('logout')
          .then(() => {})
          .finally(() => {
            this.$router.push('/login').catch(() => {})
          })
    },
  }
}
</script>
