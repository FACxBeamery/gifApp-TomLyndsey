
// import apiKey from "config.js";


function sendRequest() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        response = JSON.parse(xhr.responseText);
        console.log(response);
        for (i=0;i<response.data.length;i++){
            url = response.data[i].images.original.url;
            imgTemp = document.querySelector("#gifImage");
            imgTemp.src = url;
        }
        response.data
      }
    });
    
    const query = document.getElementById("searchQuery").value;
    console.log(query);
    xhr.open("GET", `https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=1&rating=g`, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();


}

