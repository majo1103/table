class Client {
  constructor() {
    this.useSessionStorage = typeof sessionStorage !== "undefined";

    if (this.useSessionStorage) {
      this.user = sessionStorage.getItem("USER");

      if (this.user) {
        if (!this.isUserValid(this.user)) {
          this.user = null;
        }
      }
    }
  }

  isLoggedIn() {
    return !!this.user;
  }

  setUser(user) {
    this.user = user;

    if (this.useSessionStorage) {
      sessionStorage.setItem("USER", user);
    }
  }

  removeUser() {
    this.user = null;

    if (this.useSessionStorage) {
      sessionStorage.removeItem("USER");
    }
  }

  isUserValid(user) {
    if (user === "admin@server.pl") {
      return true;
    } else {
      return false;
    }
  }

  login(user) {
    if (this.isUserValid(user)) {
      this.setUser(user);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.removeUser();
  }
}

export const client = new Client();
