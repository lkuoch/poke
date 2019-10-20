getTsConfigFile = (env) => {
    const path = require("path");

    if (env === "development")
        return path.resolve("./tsconfig.json");
    else
        return path.resolve("./tsconfig.prod.json");
}

module.exports = {
    getTsConfigFile
}