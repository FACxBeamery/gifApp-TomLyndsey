document.getElementById("submitrequest").addEventListener("click",(event => {
  const query = document.getElementById("searchQuery").value;
  sendRequest(query);
}));
 
function sendRequest(query) {
  
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      removeChildNodes('gifs');
      if (xhr.readyState === 4 && xhr.status === 200) {
        response = JSON.parse(xhr.responseText);
        if (response.data.length === 0) {
          errorMessage();
          return
        }
        for (i=0;i<response.data.length;i++){
            gifURL = response.data[i].images.original.url;
            img = document.createElement("img");
            img.src = gifURL;
            gif = document.getElementById("gifs")
            gif.appendChild(img)
        }
      }
    });
    
url = `https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&rating=g`;


xhr.open("GET", url, true);
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();

}


function removeChildNodes(id) {
  node = document.getElementById(id)
  if (node != null) { // i.e. element exists
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
}

function errorMessage() {
  elem = document.createElement("p");
  elem.className = "error";
  textNode = document.createTextNode('Uh oh! We couldn\'t find any matches for that search. Please try again!');
  elem.appendChild(textNode);
}
