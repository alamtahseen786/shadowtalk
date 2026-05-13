function addPost(){

    let text = document.getElementById("confession").value;

    if(text == ""){
        alert("Write something first!");
    }

    else{

        let post = document.createElement("p");

        post.innerText = text;

        document.getElementById("posts").appendChild(post);

        document.getElementById("confession").value = "";
    }
}