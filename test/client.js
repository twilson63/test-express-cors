const xhr = require('xhr')

xhr.post('http://localhost:4000', {
  json: {foo:'bar'}
}, (e,r,b) => {
  console.log(e)
  console.log(b)
})
