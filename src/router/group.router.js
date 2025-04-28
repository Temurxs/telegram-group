const express = require("express")
const { getAllGroups, getGroupById, postGroup } = require("../controller/groups.controller")
const groupRouter = express.Router()

groupRouter.get( "/", getAllGroups)
groupRouter.get( "/:id",getGroupById )

groupRouter.post("/",postGroup)




module.exports = groupRouter