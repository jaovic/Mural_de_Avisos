
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

function updatePosts(){

    fetch("http://localhost:4000/api/all").then(res =>{
        return res.json();
    }).then(json =>{

        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElemnt =`<div id="${post.id}" class="card mb-4">
                <div class="card-header">
                    <h5 class="card-tittle">${post.title}</h5>
                </div>
                <div class="card-body">
                <div class="card-text">${post.description}</div>
                </div>
                </div>`

            postElements += postElemnt;

        });

        document.getElementById("posts").innerHTML = postElements;
    })   
        
};

function newPost(){

    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = {title, description};

    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:4000/api/new", options ).then(res=>{
        console.log(res);
        updatePosts();
        let title = document.getElementById("title").value = "";
    let description = document.getElementById("desc").value = "";
    })
}