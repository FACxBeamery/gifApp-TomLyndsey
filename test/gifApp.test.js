const test = require ('tape');
const {sendRequest} = require ('../functions.js');

test ('should post a "no GIFs found" message when a nonsense query is sent', function (
  t
) {
  t.equal ('noGIFs', sendRequest ('£$%^&^GHJFVByfvBH'));
  t.end ();
});

/*

test ('should return a 'ServerError' message when the server fails to return', function (t)
{t.equal('ServerError', sendRequest(''));
t.end ();
})

*/
