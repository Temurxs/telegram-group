const {v4} = require("uuid")

class Groups{
    constructor(name,description,url){
        this.id = v4()
        this.name = name
        this.description = description
        this.url = url
    }
}


module.exports = Groups