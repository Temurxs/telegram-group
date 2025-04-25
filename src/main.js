const express = require("express")
const groupRouter = require("./router/group.router")
const app = express()

app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', "./src/views");
app.use(express.urlencoded({
    extended: true
}))






app.use( "/groups", groupRouter)






app.listen(2323)

