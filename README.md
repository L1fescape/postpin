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


## API Routes

**Note:** The example requests below are made using [httpie](https://github.com/jakubroztocil/httpie).

### User Routes


##### Create a user

###### URL
`/v1/users`

###### Method
`POST`

###### Parameters
- `name`
  - Required.

###### Example Request
```
http POST "http://api.post-pin.com/v1/users" name="Andrew"
```

###### Example Response
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 125
Content-Type: application/json; charset=utf-8
Date: Thu, 11 Sep 2014 05:39:23 GMT
X-Powered-By: Express

{
    "errors": [],
    "results": [
        {
            "name": "Andrew",
            "user_id": "9f83a6804e73"
        }
    ],
    "success": false
}
```


##### Get User info

###### URL
`/v1/users/:user_id

###### Method
`GET`

###### Parameters
- N/A

###### Example Request
```
http "http://api.post-pin.com/v1/users/9f83a6804e73"
```

###### Example Response
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 125
Content-Type: application/json; charset=utf-8
Date: Thu, 11 Sep 2014 05:39:23 GMT
X-Powered-By: Express

{
    "errors": [],
    "results": [
        {
            "name": "Andrew",
            "user_id": "9f83a6804e73"
        }
    ],
    "success": false
}
```


### Pins


##### Get Pins

Retrieves a list of a user's pins.

###### URL
`/v1/users/:user_id/pins`

###### Methods 
`GET`

###### Parameters
- N/A

###### Example Request
```
http "http://api.post-pin.com/v1/users/9f83a6804e73/pins"
```

###### Example Response
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 254
Content-Type: application/json; charset=utf-8
Date: Thu, 11 Sep 2014 05:43:08 GMT
X-Powered-By: Express

{
    "errors": [],
    "results": [
        {
            "date": "Thu Sep 11 2014 05:43:08 GMT+0000 (UTC)",
            "location": [
                37.7756991,
                -122.4095929
            ],
            "name": "City Beer Store",
            "pin_id": "1c89f4c91131",
            "rating": 5,
            "user_id": "9f83a6804e73"
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
http POST "http://api.post-pin.com/v1/users/9f83a6804e73/pins" location:="[37.7756991, -122.4095929]" name="City Beer Store" rating=5
```

###### Example Response
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 254
Content-Type: application/json; charset=utf-8
Date: Thu, 11 Sep 2014 05:43:08 GMT
X-Powered-By: Express

{
    "errors": [],
    "results": [
        {
            "date": "Thu Sep 11 2014 05:43:08 GMT+0000 (UTC)",
            "location": [
                37.7756991,
                -122.4095929
            ],
            "name": "City Beer Store",
            "pin_id": "1c89f4c91131",
            "rating": 5,
            "user_id": "9f83a6804e73"
        }
    ],
    "success": true
}
```
