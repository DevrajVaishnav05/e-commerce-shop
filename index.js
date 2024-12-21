import App from "./app.js";

// Server listing on local host
App.listen(process.env.APP_PORT , () => {
    console.log(`Local : http://127.0.0.1:${process.env.APP_PORT}`);
});
