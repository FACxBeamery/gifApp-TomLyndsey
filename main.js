
// import apiKey from "config.js";
// console.log(document.getElementById("submitrequest"))
document.getElementById("submitrequest").addEventListener("click",(event => {
  // get the input from that element
  const query = document.getElementById("searchQuery").value;
  sendRequest(query); // pass as param here
}));

function sendRequest(query) {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        //console.log(xhr.responseText);
        response = JSON.parse(xhr.responseText);
        console.log(response);
        for (i=0;i<response.data.length;i++){
            url = response.data[i].images.original.url;
            // console.log(url)
            // imgTemp = document.querySelector("#gifImage");
            // imgTemp.src = url;

            img = document.createElement("img");
            img.src = url;
            gif = document.getElementById("gifs")
            gif.appendChild(img)
        }
        response.data
      }
    });


    console.log(query);
    xhr.open("GET", `https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&rating=g`, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();


}
