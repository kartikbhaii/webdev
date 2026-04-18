function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched.")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched.")
        }, 3000);
    })
}


async function getBlogData() {
    try {
        console.log("Fetching blog data");
        // const postData = await fetchPostData()
        // const commentData = await fetchCommentData()    // these 2 lines are correct, but for multiple promises, we can use  "Promise all":
        
        const[postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])

        console.log(postData);
        console.log(commentData);
        
        console.log("Fetch complete.");
    } catch (error) {
        console.error("Error Fetching Blog Data.");
        
    }
}


getBlogData()


