/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios"

const actions = {

  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('login', data)
        .then((response) => {
          if (response.data.status === "3") {
            const resp = {
              data: {
                state: "warning",
                message: "Your data is in syncrhonization. It may take around 10 minutes. Please try again later."
              }
            }
            resolve(resp)
          } else if (response.data.status === "0") {
            const resp = {
              data: {
                state: "warning",
                message: "Your data is in inactive. Please contact the adminstrator"
              }
            }
            resolve(resp)
          } else {
            commit("SET_ACTIVE_USER", response.data)
            resolve(response)
          }
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  },
  daftar({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('signup', data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          console.error(error);
          reject(error.response)
        })
    })
  },
  logout({commit}) {
    commit("LOGOUT")
  },
  switchLoading({commit}, payload) {
    commit("SWITCH_LOADING", payload)
  },
  changeUserStatus({commit}) {
    commit("CHANGE_STATUS")
  },
    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu
    updateVerticalNavMenuWidth({ commit }, width) {
      commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    // The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////

    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY')
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val)
    },

    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    updateUserInfo({ commit }, payload) {
      commit('UPDATE_USER_INFO', payload)
    }
}

export default actions
