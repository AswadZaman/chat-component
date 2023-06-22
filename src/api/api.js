import axios from "axios";


    export const getMessages = ()=> axios.get( "https://chatty-41360-default-rtdb.firebaseio.com/products.json")
    export const SendMessage = (payload)=> axios.post( "https://chatty-41360-default-rtdb.firebaseio.com/products.json", payload,  {
        headers: {
          "Content-Type": "application/json"
        }
      } )
