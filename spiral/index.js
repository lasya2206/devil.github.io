spiralArray = function (edge) {
    var arr = Array(edge),
        x = 1, y = edge,
        total = edge * edge--,
        dx = 1, dy = 0,
        i = 0, j = 0;
    while (y) arr[--y] = [];
    while (i < total) {
        arr[y][x] = i++;
        x += dx; y += dy;
        if (++j == edge) {
            if (dy < 0) {x++; y++; edge -= 2}
            j = dx; dx = -dy; dy = j; j = 0;
       }
    }
    return arr;
}
arr = spiralArray(edge = 5);
for (y= 0; y < edge; y++) document.write();
var n =  [ [4, 3, 2, 4], 
       [9, 1, 5, 6], 
       [2, 7, 9, 8], 
       [8, 5, 2, 0], 
    ];
    function DiagonalAdd(){
        let sum = 0;
        for(let i = 0; i < n.length; i++){
           for(let j = 0; j < n[i].length; j++){
              if(i === j){
                 sum += n[i][j];
              }
           }
        }
     return sum;
     }
   var z = DiagonalAdd();
   console.log(z);
   document.write(z);