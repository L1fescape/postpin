# PostPin
> Post push pins


## API

**Note:** The example requests below are made using [httpie](https://github.com/jakubroztocil/httpie).

### Pins

#### Get Pins

Retrieves a list of a user's pins.

##### URL
`/v1/pins`

##### Methods 
`GET`

##### Headers
- `auth_token`
  - Required.

##### Parameters
- N/A

##### Example Request
```
http "http://api.post-pin.com/v1/pins" auth_token:1234
```

##### Example Response
```
```


#### Create Pin

Make a new pin.

##### URL
`/v1/pins`

##### Methods 
`POST`

##### Headers
- `auth_token`
  - Required.

##### Parameters
- `location`
  - Required. Comma separated latitude and longitude (ie `location=<lat,long>`)

##### Example Request
```
http POST "http://api.post-pin.com/v1/pins" auth_token:1234 location="37.7756991,-122.4095929"
```

##### Example Response
```
```
