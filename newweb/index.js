function thumbsup(){
    let like = document.getElementById('id');
    like.innerText = parseInt(like.innerText) + 1;
}
function thumbsdown(){
 let dislike = document.getElementById('id2');
    dislike.innerText = parseInt(dislike.innerText) - 1;
}