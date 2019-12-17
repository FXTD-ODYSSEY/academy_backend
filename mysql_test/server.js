const express = require("express");
const app = express();

const users = require("./routes/api/users")


 

// 使用 routers

app.use("/api/users",users)

const port = process.env.PORT || 5000

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})