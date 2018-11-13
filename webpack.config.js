module.exports = {
    context: __dirname,
    mode: "development",
    devtool: "source-map",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
};
