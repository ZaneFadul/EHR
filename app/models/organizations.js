// Define JS class and MongoDB components for Organizations

// Define organization JS class
class Organization{
    constructor(orgid, name, type, info){
        this.orgid = orgid;
        this.name = name;
        this.type = type;
        this.info = info;
    }
    get data(){
        return [this.orgid, this.name, this.type, this.info];
    }
}


// Define organization MongoDB component


// export module
module.exports.orgs = Organization;