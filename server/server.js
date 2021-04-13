const express = require("express");
require("dotenv").config();
const app = express();
const landingPage = express();
const eapayAdmin = express();
const api = express();
const mobile = express();
const merchant = express();
const cors = require("cors");
const path = require("path");
const vhost = require("vhost");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const AdminBro = require('admin-bro');
const options = require('./middleware/admn.options');
const buildAdminRouter = require('./routes/admin.router');
const { nibss } = require('innovation-sandbox');


require("./models/userSchema.js");
require("./models/merchantSchema.js");
require("./models/productsSchema.js");


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('storage',express.static(path.join(__dirname, "/server/storage")))

landingPage.use(express.static(path.join(__dirname, "views/index/build")));
mobile.use(express.static(path.join(__dirname, "views/mobile")));
merchant.use(express.static(path.join(__dirname, "views/merchant")));

nibss.Bvnr.Reset({
  sandbox_key: '123a2dbfba3933cbe18517ff56eb5a79',
  organisation_code: '11111'
}).then(response => {
  //do something with the response here
  console.log({response})
  nibss.Bvnr.GetSingleBVN({
    bvn: '‭22307504869',
    sandbox_key: '123a2dbfba3933cbe18517ff56eb5a79',
    organisation_code: '11111',
    password: response.password,
    ivkey: response.ivkey,
    aes_key: response.aes_key,
    host: 'https://sandboxapi.fsi.ng'
  }).then(res => {
    //do something
    console.log({res})
  });
});
// View route
landingPage.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index", "index.html"));
});
mobile.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views/mobile", "index.html"));
});
merchant.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views/merchant", "index.html"));
});

// vhost usage
app.use(vhost(process.env.DOMAIN, landingPage));
app.use(vhost(`www.${process.env.DOMAIN}`, landingPage));
app.use(vhost(`mobile.${process.env.DOMAIN}`, mobile));
app.use(vhost(`merchant.${process.env.DOMAIN}`, merchant));
app.use(vhost(`admin.${process.env.DOMAIN}`, eapayAdmin));
app.use(vhost(`api.${process.env.DOMAIN}`, api));

//route usage
require("./routes/userRoute")(app);
require("./routes/merchantRoute")(app);
require('./routes/merchantProduct')(app)


const PORT = process.env.PORT || 5001;

const run = async () => {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    `${mongoose.connection.readyState}-connected to database sucessfully with value of 2`
  );
  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  eapayAdmin.use(admin.options.rootPath, router);
  app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
}


run();