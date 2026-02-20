import { Buffer } from "buffer";

export async function handler(event) {
  const { file, fileName, folder } = JSON.parse(event.body);

  const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ":").toString("base64"),
    },
    body: JSON.stringify({
      file,
      fileName,
      folder,
    }),
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
