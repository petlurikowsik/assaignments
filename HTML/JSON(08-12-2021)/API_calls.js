
const makeApiCall = (endpoint) => {

    //Promise object
    //make api call
    fetch(endpoint)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error("Error is", err))
}

//call
makeApiCall('https://fakestoreapi.com/users')

const apiCall = (endpoint) => {
    //make api call
    fetch(endpoint)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error("Error is", err))
}

//call
apiCall('https://jsonplaceholder.typicode.com/albums')