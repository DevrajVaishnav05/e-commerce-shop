import App from "./app.js";
const port = process.env.APP_PORT ||3000

// Server listing on local host
App.listen(port , () => {
    console.log(`Local : http://127.0.0.1:${port}`);
});
