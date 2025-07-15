const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_database: "Blog-Project-Dev",
      },
    };
  }

  return {
    env: {
      mongodb_database: "Blog-Project",
    },
  };
};
