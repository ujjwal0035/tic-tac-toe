let arr=[]
for(let i=0;i<3;i++){
    arr.push([0,0,0]);
}
let flag=true;
let clickCount=0;


const cellClickHandler=(i,j,cell)=>{
    if(arr[i][j]===0){
        let cellUpdate=document.getElementById(cell);
        // document.getElementById(cell).disabled=true;
        if(flag===true){
            arr[i][j]=1;
            flag=false;
            cellUpdate.innerHTML=`X`;
        }
        else{
            arr[i][j]=-1;
            flag=true;
            cellUpdate.innerHTML=`O`;
        }
        clickCount++;
    }
    let cellUpdate=document.getElementById(cell);

    let countFlag=false;
    if(clickCount>4){
        
        // side checking
        for(let i=0;i<3;i++){
            if(arr[i][0]===1 && arr[i][1]===1 && arr[i][2]===1){
            window.alert("Player1 is won");
            countFlag=true;
            return;
            }
        }
        for(let i=0;i<3;i++){
            if(arr[i][0]===-1 && arr[i][1]===-1 && arr[i][2]===-1){
            window.alert("Player2 is won");
            countFlag=true;
            return;
            }
        }
        for(let i=0;i<3;i++){
            if(arr[i][0]===1 && arr[i][1]===1 && arr[i][2]===1){
            window.alert("Player1 is won");
            countFlag=true;
            return;
            }
        }
        for(let i=0;i<3;i++){
            if(arr[0][i]===-1 && arr[1][i]===-1 && arr[2][i]===-1){
            window.alert("Player2 is won");
            countFlag=true;
            return;
            }
        }
        for(let i=0;i<3;i++){
            if(arr[0][i]===1 && arr[1][i]===1 && arr[2][i]===1){
            window.alert("Player1 is won");
            countFlag=true;
            return;
            }
        }

        // 
        if(arr[0][0]===-1 && arr[1][1]===-1 && arr[2][2]===-1){
        window.alert("Player2 is won");
        countFlag=true;
        return;
        }
        if(arr[0][0]===1 && arr[1][1]===1 && arr[2][2]===1){
        window.alert("Player1 is won");
        countFlag=true;
        return;
        }
        if(arr[0][2]===-1 && arr[1][1]===-1 && arr[2][0]===-1){
        window.alert("Player2 is won");
        countFlag=true;
        return;
        }
        if(arr[0][2]===1 && arr[1][1]===1 && arr[2][0]===1){
        window.alert("Player1 is won");
        countFlag=true;
        return;
        }


        
    }
    if(countFlag===false && clickCount===9){
        window.alert("Draw!");
        return;
    }
    
}