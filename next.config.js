const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_database: "Blog-Project-Dev",
        mongodb_cluster: "cluster0",
        mongodb_username: "Akan",
        mongodb_password: "107056Ujp"

      },
    };
  }

  return {
    env: {
      mongodb_database: "Blog-Project",
    },
  };
};
