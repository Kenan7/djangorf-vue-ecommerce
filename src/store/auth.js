import auth from "../api/auth";
import session from "../api/session";
import {
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_TOKEN,
  SET_TOKEN,
  SET_CREDENTIALS,
  CREDENTIALS_USERNAME,
} from "./types";

const TOKEN_STORAGE_KEY = "TOKEN_STORAGE_KEY";
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
  login({ commit }, { username, password }) {
    commit(LOGIN_BEGIN);
    return auth
      .login(username, password)
      .then(({ data }) => commit(SET_TOKEN, data.key))
      .then(() => commit(LOGIN_SUCCESS))
      .catch(() => commit(LOGIN_FAILURE));
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
      .then(({ data }) => commit(SET_CREDENTIALS, data.username));
  },
  initialize({ commit }) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const username = localStorage.getItem(CREDENTIALS_USERNAME);

    if (isProduction && token) {
      commit(REMOVE_TOKEN);
    }

    if (!isProduction && token) {
      commit(SET_TOKEN, token);
      commit(SET_CREDENTIALS, username);
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
    if (!isProduction) localStorage.setItem(TOKEN_STORAGE_KEY, token);
    session.defaults.headers.Authorization = `Token ${token}`;
    state.token = token;
  },
  [REMOVE_TOKEN](state) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    delete session.defaults.headers.Authorization;
    state.token = null;
  },
  [SET_CREDENTIALS](state, username) {
    localStorage.setItem(CREDENTIALS_USERNAME, username);
    state.username = username;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
