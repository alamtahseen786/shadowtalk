function addPost(){

    let text = confession.value;

    if(text != ""){

        let post = document.createElement("p");

        post.innerText = text;

        posts.appendChild(post);

        confession.value = "";
    }
}