import { Buffer } from "buffer";
import process from "process";

export async function handler() {
    const response = await fetch("https://api.imagekit.io/v1/files?path=/sctuning/gallery&sort=ASC_CREATED", {
        headers: { 
            Authorization: "Basic " + Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ":").toString("base64")
        }
    });

    const data = await response.json();
    console.log("ImageKit response:", data);
    return {
        statusCode: 200,
        body: JSON.stringify(data)  
    };
}