
const Groups = require("../models/group.model")
const Io = require("../utils/Io")
const groupsIo = new Io("./src/database/groups.json")





const getAllGroups = async (req, res) => {
    const groups = await groupsIo.read()
    res.render("groups", {
        groups
    })

}

const getGroupById = async (req, res) => {
    const id = req.params.id
    const groups = await groupsIo.read()
    const groupById = groups.filter(group => group.id == id)
    res.render("groups", { groupById })

}

const postGroup = async (req, res) => {
    const { name, description, url } = req.body
    const date = new Date()
    const newGroup = new Groups(name, description, url, date)
    const groups = await groupsIo.read()
    groups.push(newGroup)
    groupsIo.write(groups)
     res.redirect("/groups")
}

const editGroup = async (req, res) => {
    const groups = groupsIo.read()
    const { id, name, description, url } = req.body
    const editedGroup = groups.map(group => group.id == id ? { ...group, id, name, description, url, date: new Date() } : group)
    res.render("groups", { editedGroup })
}

const deleteGroup = async (req, res) => {
    const groups = groupsIo.read()
    const id = req.params.id
    const afterDeleted = groups.filter(group => group.id != id)
    res.render("groups", {
        groups
    })
}


module.exports = {
    getAllGroups, getGroupById, postGroup, editGroup, deleteGroup
}