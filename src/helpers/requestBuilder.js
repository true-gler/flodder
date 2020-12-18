import axios from "axios";

export async function buildGoogleRequest(url) {
    console.log("Starting HTTP Request");
    try {
        const data = await axios.get(`${url}/${countryName}`);
        if(data && data.length > 0) {
            console.log(data);
        }
      } catch (error) {
        console.log("We have no data for the country you have requested.");
      }
}