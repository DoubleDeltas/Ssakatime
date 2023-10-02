import express from "express";
import router from "./controllers/index";

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');
app.use('/static', express.static(__dirname + '/../public'));

app.use('/', router);

app.listen(5000, () => {
    let timezoneOffsetMs = 9 * 60 * 60 * 1000;
    let now = new Date(Date.now() + timezoneOffsetMs);

    console.log(`Server started at ${now.toTimeString()}!`)
});