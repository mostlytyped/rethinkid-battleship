import RethinkID from "@mostlytyped/rethinkid-js-sdk";

const baseURL = window.location.origin;

console.log("app id", process.env.VUE_APP_APP_ID);

const config = {
  appId: process.env.VUE_APP_APP_ID,
  loginRedirectUri: `${baseURL}`,
  dataAPIConnectErrorCallback: function () {
    // this = RethinkID
    // @ts-ignore
    this.logOut();
  },

  oAuthUri: "http://localhost:4444",
  dataApiUri: "http://localhost:4000",
};

export const rid = new RethinkID(config);
