let url = require('url');
let fakeUrl = 'https://www.google.com/search?q=maheshbodhgire';

let parseUrl = url.parse(fakeUrl, true);

console.log(parseUrl.hostname);