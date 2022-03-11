let express = require('express');
let app = express();
let path = require('path');

// app.use('/', (req, res) => {
//     res.send("Hello from express!");
// })


//serve satatic pages
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Server Started on 3000');
})

