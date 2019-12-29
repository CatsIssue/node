const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const yargs = require('yargs')


place = process.argv[2];

if (!place) { 
    console.log("Please provide place");
} else {
    geocode(place, (error, data) => {

        if (error) { 
            return console.log('Error: ', error);
        }
    
        forecast(data, (error, forecastData) => {
            if (error) {
                return console.log('Error: ', error);
            } 
            console.log('Location: ', place);
            console.log("Forecast summary: ", forecastData + '\n');
        })
    })   
}



const user = {
    name: 'konstantin',
    location: "while"
}

const transact = (type, {name:newName}) => {
    console.log(newName);
}

transact(1, user);