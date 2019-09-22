function sendRequest (query) {
  var xhr = new XMLHttpRequest ();

  xhr.addEventListener ('readystatechange', function () {
    removeChildNodes ('gifs');
    removeError ();
    if (xhr.readyState === 4 && xhr.status === 200) {
      response = JSON.parse (xhr.responseText);
      if (response.data.length === 0) {
        errorMessage (
          "Uh oh! We couldn't find any matches for that search. Please try again!"
        );
        return 'noGIFs';
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
      return 'ServerError';
    }
  });

  let url = `https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&rating=g`;

  xhr.open ('GET', url, true);
  xhr.setRequestHeader ('X-Requested-With', 'XMLHttpRequest'); // avoids CORS error
  xhr.send ();
}

function addGIF (url) {
  const img = document.createElement ('img');
  img.src = url;
  const gif = document.getElementById ('gifs');
  gif.appendChild (img);
}

function removeChildNodes (id) {
  const node = document.getElementById (id);
  if (node != null) {
    // i.e. element exists
    while (node.firstChild) {
      node.removeChild (node.firstChild);
    }
  }
}

function errorMessage (msg) {
  const elem = document.querySelector ('.error');
  const textNode = document.createTextNode (msg);
  elem.appendChild (textNode);
}

function removeError () {
  const elem = document.querySelector ('.error');
  //console.log (errorNode);
  if (elem.firstChild) {
    elem.removeChild (elem.firstChild);
  }
}
