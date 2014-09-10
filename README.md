# PostPin
> Post push pins


## Installation

- Install NodeJS/npm
- Install mongodb
- Then run:

```
npm install
```


## Running

Make sure mongodb is running.

```
npm start
```


## Testing

```
npm test
```


## API

**Note:** The example requests below are made using [httpie](https://github.com/jakubroztocil/httpie).

### Pins

##### Get Pins

Retrieves a list of a user's pins.

###### URL
`/v1/users/:user_id/pins`

###### Methods 
`GET`

###### Parameters
- `userId`
  - Required.

###### Example Request
```
http "http://api.post-pin.com/v1/users/:user_id/pins"
```

###### Example Response
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 199
Content-Type: application/json; charset=utf-8
Date: Mon, 08 Sep 2014 03:06:41 GMT
ETag: W/"c7-4092775917"
X-Powered-By: Express

{
    "errors": [],
    "results": [
        {
            "date": "2014-09-08T03:06:41.262Z",
            "location": [
                37.7756991,
                -122.4095929
            ],
            "name": "City Beer Store",
            "note": "Picked up some amazing beers with Tasha!",
            "rating": 5
        }
    ],
    "success": true
}
```


##### Create Pin

Make a new pin.

###### URL
`/v1/users/:user_id/pins`

###### Methods 
`POST`

###### Headers
- `auth_token`
  - Required.

###### Parameters
- `location`
  - Required. Comma separated latitude and longitude (ie `location=<lat,long>`)
- `name`
  - Required. Name of the place the pin is located.
- `rating`
  - Optional.
- `note`
  - Optional. 

###### Example Request
```
http POST "http://api.post-pin.com/v1/users/1/pins" name="City Beer Store" location:="[37.7756991,-122.4095929]" note="Picked up some amazing beers with Tasha\!" rating=5
```

###### Example Response
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 201
Content-Type: application/json; charset=utf-8
Date: Mon, 08 Sep 2014 03:11:58 GMT
X-Powered-By: Express

{
    "errors": [],
    "results": [
        {
            "date": "2014-09-08T03:11:58.532Z",
            "location": [
                37.7756991,
                -122.4095929
            ],
            "name": "City Beer Store",
            "note": "Picked up some amazing beers with Tasha!",
            "rating": 5
        }
    ],
    "success": true
}
```
