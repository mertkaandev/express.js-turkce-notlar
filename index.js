const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routes/routers.js");
const register = require("./routes/register.js");
const app = express();

dotenv.config({
    path: "./env/config.env"
});

const PORT = 3000 || process.env.PORT;

mongoose.connect(VERITABANI_BAGLANTI_LINKI)
.then(()=> {console.log("Veritabanı bağlantısı başarılı")})
.catch((err)=> {console.log(err)});

app.use('/kullanicilar', routers)
app.use('/auth', register)

app.listen(PORT, ()=> {
    console.log(`Express sunucusu localhost:${PORT}'da çalışıyor..`)
});