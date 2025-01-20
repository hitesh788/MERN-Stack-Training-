async function createPost() {
    var post = new Promise((cPost) => {
       setTimeout(() => {
            cPost("Post created successfully")
       },5000)
    })
    console.log(await post);
}
createPost()