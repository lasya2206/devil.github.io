
var heart = document.getElementById('heart');

heart.addEventListener('click', heart_react);


var count = 0;
function heart_react() {
   count++;
   if(count % 2 == 0) {
      heart.style.color = "#000000";
      heart2.style.color = "#000000";
   } else {
      heart.style.color = "#fc3d03";
      heart2.style.color = "#fc3d03";
   }
}
   


var heart2 = document.getElementById('heart2');

heart2.addEventListener('click', heart_react2);



function heart_react2() {
   count++;
   if(count % 2 == 0) {
      heart2.style.color = "#000000";
      heart.style.color = "#000000";
      
   } else {
      heart2.style.color = "#fc3d03";
      heart.style.color = "#fc3d03";
   }
}


var byImage = document.getElementById('upld_img');

byImage.addEventListener('dblclick', heart_react_by_img);


function heart_react_by_img() {
   count++;
   if(count % 2 == 0) {
      heart2.style.color = "#000000";
      heart.style.color = "#000000";
      
   } else {
      heart2.style.color = "#fc3d03";
      heart.style.color = "#fc3d03";
   }
}

var bookmark = document.getElementById('bookmarks');
bookmark.addEventListener('click', book_mark);

function book_mark() {
   bookmark.style.color = "#03fce3";
}