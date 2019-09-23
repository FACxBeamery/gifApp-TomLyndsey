document.getElementById ('submitrequest').addEventListener ('click', event => {
  const query = document.getElementById ('searchQuery').value;
  sendRequest (query);
});
