async function asAw() {
    setTimeout(() => {
        return ("Inside Timeout");
    }, 5000)
    return await "This is sync/await example"
}
asAw().then(function(output) {
    console.log(output);
}
)
