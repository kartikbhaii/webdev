function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched successfully")
            } 
            else{
                reject("Error fetching data")
            }
        }, 1000);
    })
}

fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase();
    })  // any thing that is correct, get stored/fetched here
    .then((value) => {
        console.log(value);
        
    })

    .catch((error) => console.error(error)) // any thing that is rejected are catched here.



