// import getBaseUrl from "./App/utils/getBaseUrl.js";

// Make connection to the database

// Node app
import App from "./app.js";


// Server listing on local host
App.listen(process.env.APP_PORT * 1, () => {
    console.log(`Local : http://127.0.0.1:${process.env.APP_PORT * 1}`);
});
