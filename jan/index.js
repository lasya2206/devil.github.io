const matrix=[
    [8, 9, 3, 7],
    [6, 1, 4, 2],
    [1, 4, 2, 3],
    [9, 5, 1, 8],
];
    var sum=0;
for(i=0;i<4;i++){
    for(j=0;j<4;j++){
        if(i==j){
            sum=sum+matrix[i][j];
        }
    }
}  
console.log(+sum);