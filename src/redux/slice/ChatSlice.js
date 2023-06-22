import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessages, SendMessage } from "../../api/api";

const initialState = {
    messages:[],
    isPending: false,
    error:{}
}
export const sendMessage= createAsyncThunk("sendMessage", async(payload)=>{
const response= await SendMessage(payload)
})
export const fetchMeasseges = createAsyncThunk("fetchMessage", async (payload) => {
    const response = await getMessages();
    return response.data;
  });
const ChatSlice= createSlice({
    name:"ChatSlice",
    initialState,
        extraReducers:(builder)=>{
        builder.addCase( fetchMeasseges.pending , (state, action)=>{
state.isPending=true
        })
        .addCase(fetchMeasseges.fulfilled, (state, action)=>{
            state.messages=Object.values(action.payload)
        })
        .addCase(fetchMeasseges.rejected, (state, action)=>{
           state.error=action.payload 
        } )

        //send message
        builder.addCase( sendMessage.pending , (state, action)=>{
            state.isPending=true
                    })
                    .addCase(sendMessage.fulfilled, (state, action)=>{
                    console.log("succ", action.payload)
                
                    })
                    .addCase(sendMessage.rejected, (state, action)=>{
                       state.error=action.payload 
                    } )
    }
})
export default ChatSlice.reducer
