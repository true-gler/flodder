import { buildGoogleRequest } from './helpers/requestBuilder';
import { getTypedUrlsFromHistory } from './helpers/history';

// const numberOfRequests = 3;
// const stopMakingCalls = false;
var GOOGLE_URL = 'http://www.google.com/';
const readUrls = document.querySelector(".urls");

const form = document.querySelector(".form-data");
form.addEventListener("submit", e => handleSubmit(e));

const handleSubmit = async e => {
  e.preventDefault();
  var urls = getTypedUrlsFromHistory();
  readUrls.textContent = urls;
  console.log(urls);
  //callrandomPages(urls);
  
};

chrome.runtime.onInstalled.addListener(() => {

});

const callrandomPages = async urls => {
    urls.forEach(url => {callUrl(url)});
}

function callUrl(url){
  console.log("start calling urls based on history");

  if(url.contains(GOOGLE_URL)) buildGoogleRequest(url);
  else console.log("no provider yet");  
}