const { app } = require(".");
const { connectDb } = require("./config/db");

// const PORT=5454;
app.listen(process.env.PORT|| 4000,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",PORT)
})