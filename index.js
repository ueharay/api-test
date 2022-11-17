//フレームワークの導入
const express = require("express");
const app = express();

//サーバー起動
app.listen(8000, console.log("aaa"));

//localhostの開始定型文
app.get("/", (req, res) => {
    res.send("local server");
});

const customers = [
    {title : "iwasaki", id : 1},
    {title : "uehara", id : 1},
    {title : "suda", id : 1},
    {title : "yanasan", id : 1},
    {title : "kjsan", id : 1},
];

//getメソッド
app.get("/api/customers", (req, res) => {
    res.send(customers);
});

//別のエンドポイント
app.get("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
});