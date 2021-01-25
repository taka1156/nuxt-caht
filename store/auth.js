import { auth } from '~/plugins/firebase';

export const state = () => ({
  status: false,
  userInfo: {},
});

export const getters = {
  status(state) {
    return state.status;
  },
  userInfo(state) {
    return state.userInfo;
  },
};

export const mutations = {
  setUser(state, userInfo) {
    state.status = true;
    state.userInfo = userInfo;
  },
  removeUser(state) {
    state.status = false;
    state.userInfo = {};
  },
};

export const actions = {
  logIn({ commit }, user) {
    const { providerId, uid, email, displayName, photoURL } = user;
    const userInfo = { providerId, uid, email, displayName, photoURL };
    commit('setUser', userInfo);
  },
  logOut({ commit }) {
    auth.signOut().then(() => {
      commit('removeUser');
    });
  },
};
