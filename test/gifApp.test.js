const test = require ('tape');
const {sendRequest} = require ('../functions.js');

test ('should post a "no GIFs found" message when a nonsense query is sent', function (
  t
) {
  t.equal ('noGIFs', sendRequest ('£$%^&^GHJFVByfvBH'));
  t.end ();
});
