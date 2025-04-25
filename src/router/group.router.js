const express = require("express")
const { getAllGroups, getGroupById, postGroup, editGroup, deleteGroup } = require("../controller/groups.controller")
const groupRouter = express.Router()

groupRouter.get( "/", getAllGroups)
groupRouter.get( "/:id",getGroupById )

groupRouter.post("/",postGroup)
groupRouter.put("/", editGroup)
groupRouter.delete("/",deleteGroup)



module.exports = groupRouter