const posts = [
    { title: "Post one", body: "this is post one" },
    { title: "Post two", body: "this is post two" },
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((element) => {
            output += `<li>${element.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function updateLastUserActivityTime(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('error : something went wrong');
            }
        }, 2000);
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.values !== 0) {
                resolve(posts.pop());
            } else {
                reject("array is empty now");
            }
        }, 1000);
    })
}
updateLastUserActivityTime({ title: "Post three", body: "this is post three" })
    .then(() => {
        getPosts()
        deletePost().then(() => {
            getPosts();
        })
    }).catch((error) => console.log(error));