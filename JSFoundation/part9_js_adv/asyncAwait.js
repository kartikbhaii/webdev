function fetchUserData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({name: "google", url: "www.google.com"})
        }, 3000);
    })
}


async function getUserData(){
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData()
        console.log("User data: ", userData);
        
    } catch (error) {
        console.log("Error fetching data: ", error);
        
    }
}

getUserData();