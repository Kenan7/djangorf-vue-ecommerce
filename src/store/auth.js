import auth from "../api/auth";
import session from "../api/session";
import {
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_TOKEN,
  SET_TOKEN,
  SET_STATE_CREDENTIALS,
} from "./types";

const USER = "USER";
const isProduction = process.env.NODE_ENV === "production";

const initialState = {
  authenticating: false,
  error: false,
  token: null,
  username: null,
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  username: (state) => state.username,
};

const actions = {
  login({ commit, dispatch }, { username, password }) {
    commit(LOGIN_BEGIN);
    return auth
      .login(username, password)
      .then(({ data }) => commit(SET_TOKEN, data.key))
      .then(() => commit(LOGIN_SUCCESS))
      .then(() => dispatch("get_credentials"))
      .then(() => {
        const notification = {
          type: "success",
          message: "Giriş başarılı",
        };
        dispatch("notifications/add", notification, { root: true });
      })
      .catch(
        () => commit(LOGIN_FAILURE),
        (error) => {
          const notification = {
            type: "error",
            message: "Giriş yapılamadı " + error.message,
          };
          dispatch("notifications/add", notification, { root: true });
        }
      );
  },
  logout({ commit }) {
    return auth
      .logout()
      .then(() => commit(LOGOUT))
      .finally(() => commit(REMOVE_TOKEN));
  },
  get_credentials({ commit }) {
    return auth
      .getAccountDetails()
      .then(({ data }) => commit(SET_STATE_CREDENTIALS, data));
  },
  initialize({ commit }) {
    const token = localStorage.getItem(USER);

    if (isProduction && token) {
      commit(REMOVE_TOKEN);
    }

    if (!isProduction && token) {
      commit(SET_TOKEN, token);
    }
  },
};

const mutations = {
  [LOGIN_BEGIN](state) {
    state.authenticating = true;
    state.error = false;
  },
  [LOGIN_FAILURE](state) {
    state.authenticating = false;
    state.error = true;
  },
  [LOGIN_SUCCESS](state) {
    state.authenticating = false;
    state.error = false;
  },
  [LOGOUT](state) {
    state.authenticating = false;
    state.error = false;
  },
  [SET_TOKEN](state, token) {
    if (!isProduction) localStorage.setItem(USER, token);
    session.defaults.headers.Authorization = `Token ${token}`;
    state.token = token;
  },
  [REMOVE_TOKEN](state) {
    localStorage.removeItem(USER);
    delete session.defaults.headers.Authorization;
    state.token = null;
  },
  [SET_STATE_CREDENTIALS](state, data) {
    state.username = data.email;
  },
  // [SET_CREDENTIALS](state) {
  //   const token = localStorage.getItem(USER);
  //   if (token) {
  //     session.defaults.headers.Authorization = `Bearer ${token}`;
  //   }
  // },
  // [GET_CREDENTIALS](state) {},
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
