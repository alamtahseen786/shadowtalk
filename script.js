function addPost(){
    const confession = document.getElementById('confession');
    const posts = document.getElementById('posts');

    let text = confession.value;

    if(text != ""){
        let post = document.createElement("p");
        post.innerText = text;
        posts.appendChild(post);
        confession.value = "";

        // update feed max-height after layout settles
        setTimeout(()=> updatePostsMaxHeight(4), 50);
    }
}

function updatePostsMaxHeight(visibleCount = 4){
    const posts = document.getElementById('posts');
    if(!posts) return;

    const computed = getComputedStyle(posts);
    const gapStr = computed.gap || computed.rowGap || '12px';
    const gap = parseFloat(gapStr) || 12;

    let childHeight = 0;
    const first = posts.querySelector('p');
    if(first){
        childHeight = first.getBoundingClientRect().height;
    } else {
        const temp = document.createElement('p');
        temp.style.visibility = 'hidden';
        temp.style.position = 'absolute';
        temp.style.pointerEvents = 'none';
        temp.innerText = 'Measure';
        posts.appendChild(temp);
        childHeight = temp.getBoundingClientRect().height;
        posts.removeChild(temp);
    }

    const maxHeight = (visibleCount * childHeight) + ((visibleCount - 1) * gap);
    posts.style.maxHeight = maxHeight + 'px';
    posts.style.overflowY = 'auto';
}

document.addEventListener('DOMContentLoaded', function(){
    updatePostsMaxHeight(4);
});

let resizeTimer;
window.addEventListener('resize', ()=>{
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=> updatePostsMaxHeight(4), 120);
});