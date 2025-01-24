import mongoose from "mongoose";
import client_schema from "../models/clientDet.js";
import user_schema from "../models/user.js";

const addClients = async (req, res) => {
    const { userId, clientName, platform, audience, audienceCount, avatar, editedVideos, totalRs, remainingBalance, paidBalance, monthlyBalance } = req.body;
    const user = await user_schema.findById({userId})
    
    const cliendDetsSchema = await client_schema.create({
        userId,
        clientName,
        platform,
        audience, 
        audienceCount, 
        avatar, 
        editedVideos, 
        totalRs, 
        remainingBalance, 
        paidBalance,
        monthlyBalance
    })
    user.clients.push(cliendDetsSchema)
    console.log(cliendDetsSchema)
}

export default addClients