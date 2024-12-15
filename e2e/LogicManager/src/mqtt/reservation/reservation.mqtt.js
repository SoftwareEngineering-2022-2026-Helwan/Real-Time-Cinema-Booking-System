import { mqttClient } from "../../db/index.js";
import {client} from "../../db/index.js";

export  function  reservationMQTT()
{
    // mqttClient.connect('mqtt://localhost:1883');
    mqttClient.on('connect', () => {
        console.log('Connected to MQTT broker');
    })

    mqttClient.subscribe("st/+/s/+/request")
    .on('message', async (topic, message) => {
        console.log(topic, JSON.parse(message.toString()));
        let data = JSON.parse(message.toString());
        /*
        check if u${userID}${showtime}${seatNumber} exists in redis
        */
        let res = await client.keys(`u*${data.showtime}${data.seatNumber}`);
        console.log("res is: ",res.length);
           
       console.log("res is: ",res.length);
       if(res.length == 0)
       {
            client.setEx(`u${data.userID}${data.showtime}${data.seatNumber}`, 360, JSON.stringify(data));
            console.log(`u${data.userID}${data.showtime}${data.seatNumber} added`); 
            // mqttClient.publish(`st/${data.showtime}/s/${data.seatNumber}/response`, JSON.stringify(data));
            // return;
            data = { ...data, state: "added"}
        }else{
            let res = await client.exists(`u${data.userID}${data.showtime}${data.seatNumber}`);
            if(res == 1)
            {
                await client.del(`u${data.userID}${data.showtime}${data.seatNumber}`);
                console.log(`u${data.userID}${data.showtime}${data.seatNumber} deleted`);
                data = { ...data, state: "removed"}
            }else
            {
                data = { ...data, state: "fail"}
            }
        }
        
        mqttClient.publish(`st/${data.showtime}/s/${data.seatNumber}/response`, JSON.stringify(data));
    });
    
}
