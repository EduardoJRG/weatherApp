const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =`http://api.weatherstack.com/current?access_key=7465ebeb3c5a59f4d26856b91eeb323c&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently '  + body.current.temperature + ' celsius degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast

