import session from "./session";

export default {
  login(username, password) {
    return session.post("http://127.0.0.1:7000/auth/login/", {
      username,
      password,
    });
  },
  logout() {
    return session.post("http://127.0.0.1:7000/auth/logout/", {});
  },
  createAccount(
    email,
    first_name,
    last_name,
    password1,
    password2,
    birth_date,
    tc,
    province,
    city,
    phone_number
  ) {
    return session.post("http://127.0.0.1:7000/auth/registration/", {
      email,
      first_name,
      last_name,
      password1,
      password2,
      birth_date,
      tc,
      province,
      city,
      phone_number,
    });
  },
  changeAccountPassword(password1, password2) {
    return session.post("http://127.0.0.1:7000/auth/password/change/", {
      password1,
      password2,
    });
  },
  sendAccountPasswordResetEmail(email) {
    return session.post("http://127.0.0.1:7000/auth/password/reset/", {
      email,
    });
  },
  resetAccountPassword(uid, token, new_password1, new_password2) {
    // eslint-disable-line camelcase
    return session.post("http://127.0.0.1:7000/auth/password/reset/confirm/", {
      uid,
      token,
      new_password1,
      new_password2,
    });
  },
  getAccountDetails() {
    return session.get("http://127.0.0.1:7000/auth/user/");
  },
  updateAccountDetails(data) {
    return session.patch("http://127.0.0.1:7000/auth/user/", data);
  },
  verifyAccountEmail(key) {
    return session.post("http://127.0.0.1:7000/registration/verify-email/", {
      key,
    });
  },
};
