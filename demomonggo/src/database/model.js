import Realm, { ConnectionState } from "realm";
//khonng sửa
export const accountmodel = {
    name: "accountlogin",
    properties: {
      _id: "objectId",
      phone:'string',
      name: "string",
      password: "string",
    },
    primaryKey: '_id',
    
    
  };
  export const contactmodel = {
    name: "contact",
    properties: {
      _id: "objectId",
      mycontact: "string",
      yourcontact: "string",
    },
    primaryKey: '_id',
    
  };
  export const addcontactmodel = {
    name: "addcontact",
    properties: {
      _id: "objectId",
      mycontact: "string",
      yourcontact: "string",
      status: "string?",
    },
    primaryKey: '_id',
  };
  export const messagemodel = {
    name: "message",
    properties: {
      _id: "objectId",
      mycontact: "string",
      yourcontact: "string",
      message:"string",
      
    },
    primaryKey: '_id',
  };
  

