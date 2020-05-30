const initialState = {
    regDialog: false,
    loginDialog: false,
};

const getters = {
    regStatusDialog: (state) => !!state.regDialog,
    loginStatusDialog: (state) => !!state.loginDialog,
};

const actions = {
    regOpenDialog({ commit }) {
        return commit("REGISTRATION_DIALOG_OPEN");
    },

    regCloseDialog({ commit }) {
        return commit("REGISTRATION_DIALOG_CLOSE");
    },
    loginOpenDialog({ commit }) {
        return commit("LOGIN_DIALOG_OPEN");
    },

    loginCloseDialog({ commit }) {
        return commit("LOGIN_DIALOG_CLOSE");
    },
};

const mutations = {
    ["REGISTRATION_DIALOG_OPEN"](state) {
        state.regDialog = true;
    },
    ["REGISTRATION_DIALOG_CLOSE"](state) {
        state.regDialog = false;
    },

    ["LOGIN_DIALOG_OPEN"](state) {
        state.loginDialog = true;
    },
    ["LOGIN_DIALOG_CLOSE"](state) {
        state.loginDialog = false;
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
