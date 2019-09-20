document.getElementById ('submitrequest').addEventListener ('click', event => {
  const query = document.getElementById ('searchQuery').value;
  sendRequest (query);
});

function sendRequest (query) {
  var xhr = new XMLHttpRequest ();

  xhr.addEventListener ('readystatechange', function () {
    removeChildNodes ('gifs');
    if (xhr.readyState === 4 && xhr.status === 200) {
      response = JSON.parse (xhr.responseText);
      if (response.data.length === 0) {
        errorMessage (
          "Uh oh! We couldn't find any matches for that search. Please try again!"
        );
        return;
      } else {
        for (i = 0; i < response.data.length; i++) {
          gifURL = response.data[i].images.original.url;
          addGIF (gifURL);
        }
      }
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      errorMessage (
        `Oh no! There\'s a server error. The error code is ${xhr.status}.`
      );
      return;
    }
  });

  let url = `https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&rating=g`;

  xhr.open ('GET', url, true);
  xhr.setRequestHeader ('X-Requested-With', 'XMLHttpRequest'); // avoids CORS error
  xhr.send ();
}

function addGIF (url) {
  img = document.createElement ('img');
  img.src = url;
  gif = document.getElementById ('gifs');
  gif.appendChild (img);
}

function removeChildNodes (id) {
  node = document.getElementById (id);
  if (node != null) {
    // i.e. element exists
    while (node.firstChild) {
      node.removeChild (node.firstChild);
    }
  }
}

function errorMessage (msg) {
  elem = document.querySelector ('.error');
  textNode = document.createTextNode (msg);
  elem.appendChild (textNode);
}
