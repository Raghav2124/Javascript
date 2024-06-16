    let p = fetch("https://goweather.herokuapp.com/weather/Ny")// this will return a promise  stores the returned promise in the variable p
    //remeber a request which we send without an option is always a get request meaning we are getting data from the url 
    p.then((response) => {
            console.log(response.status)
            console.log(response.ok)// we get response headers and we set the request headers 
            console.log(response.headers)// we use this type of syntax because the promise which we get in fetch statement is resolved into another promise which is finally reloved in the 2 then 
            return response.json()
    }).then((value2) => {
            console.log(value2)
    })

    let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
    p1.then((response) => { 
            return response.json()
    }).then((response) => {
            console.log(response)
    })