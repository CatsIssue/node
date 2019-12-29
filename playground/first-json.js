const fs = require('fs');

const dataBuffer = fs.readFileSync('first-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

user = {
    name: "konstantin",
    age: 19
};

userJSON = JSON.stringify(user);
fs.writeFileSync('first-json.json', userJSON);