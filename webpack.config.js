module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
};
