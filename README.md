# cypress-google-maps-autocomplete
A VERY Basic repo to highlight how we interact with gmaps autocomplete from inside a cypress test 


This came from the following: 

* A real problem we had a work
* https://github.com/cypress-io/cypress/issues/14598
* https://stackoverflow.com/questions/53039165/cypress-test-google-places-autocomplete-not-functioning

Shoutout to https://github.com/bahmutov/cypress-geolocation-example https://glebbahmutov.com/blog/cypress-geolocation/ & https://github.com/karenpetrie for all their help solving this issue



## Requirements 

You will need to add your own Google Maps API Key secret in the fashion of an environment variable or a .NET user secret. 

User secret would be like the following 

```json
{
  "GmapsApiSecrets": {
    "ApiKey": "MY SUPER DOOPER SECRET KEY"
  }
}
```
