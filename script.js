/* =========================
   ADD POST FUNCTION
========================= */

function addPost(){


    /* GET TEXT FROM TEXTAREA */

    let text = confession.value;



    /* CHECK IF TEXT IS NOT EMPTY */

    if(text != ""){



        /* CREATE NEW PARAGRAPH */

        let post = document.createElement("p");



        /* ADD USER TEXT INSIDE PARAGRAPH */

        post.innerText = text;



        /* SHOW POST ON SCREEN */

        posts.appendChild(post);



        /* CLEAR TEXTAREA */

        confession.value = "";
    }
}