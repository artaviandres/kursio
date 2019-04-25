const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '/build')))

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`...express running on port: ${PORT}`));
