import Realm, { BSON } from "realm";
import { contactmodel, addcontactmodel, messagemodel, accountmodel } from "./model";



const app = new Realm.App({ id: "application-0-rwesj" });
  const credentials = Realm.Credentials.emailPassword(
    "haupham404@gmail.com",
  "haupham809"
  );
  try {
    
    const user = app.logIn(credentials);
   console.log(user)

  } catch (err) {

    console.log("Failed to log in");

  }
  export const realm =  Realm.open({
    schema: [ contactmodel, addcontactmodel, messagemodel, accountmodel],
    sync: {
      user: app.currentUser,
      partitionValue: "MyPartitionValue",
    },

  })




  export function addaccount(phone,name,pass) {


  
  let alice;
  realm.then((realm) => {
    if(realm.objects("accountlogin").filtered(' phone = "'+phone+'"').length<=0){
      realm.write(() => {
        alice = realm.create("accountlogin", {
  
          _id: new BSON.ObjectID(),
          phone:phone,
        name: name,
        password: pass,
          
        });
        console.log(alice)
  
      });
    }
    console.log(realm.objects("accountlogin"));
   
    
  })
  
}
export function createaddcontact(myphone,yourphone) {


  
  let alice;
  realm.then((realm) => {
    
      realm.write(() => {
        alice = realm.create("addcontact", {
  
          _id: new BSON.ObjectID(),
          mycontact:myphone,
          yourcontact: yourphone,
          status: 'false',
        });
        console.log(alice)
  
      });
    
    console.log(realm.objects("addcontact"));
   
    
  })
  
}

export function createcontact(myphone,yourphone) {


  
  let alice;
  realm.then((realm) => {
    
      realm.write(() => {
        alice = realm.create("contact", {
  
          _id: new BSON.ObjectID(),
          mycontact:myphone,
          yourcontact: yourphone,
         
        });
        console.log(alice)
  
      });
    
    console.log(realm.objects("contact"));
   
    
  })
  
}








