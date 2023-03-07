var arr=[]
for (let i = 0; i < 9; i++) {
    arr.push(0);
    
}
var ply=1,ct=0;

const boxes=document.querySelectorAll(".box");
const pl1=document.querySelector(".pt1");
const pl2=document.querySelector(".pt2");
    
boxes.forEach(ele => {
    ele.addEventListener("click",(e)=>{

        pl1.classList.toggle("turn");
        pl2.classList.toggle("turn");
        if(ply==1){
            
            arr[e.target.getAttribute("value")]=1;
            
            e.target.style.backgroundColor="blue";
            checkwin();

            ply=2;
        }
        else{
            arr[e.target.getAttribute("value")]=2;
            e.target.style.backgroundColor="yellow";
            checkwin();
            ply=1;
        }
        ct++;
        if(ct>=9){

            setTimeout(() => {
                ct=0;
                document.querySelectorAll(".box").forEach(i=>{i.style.backgroundColor="white";})
                for(let i=0;i<9;i++)arr[i]=0;     
            }, 1000);
        
        }


    })
});

function board() {
    if(ply==1)
        (pl1.innerText)=Number(pl1.innerText)+1;
    else (pl2.innerText)=Number(pl2.innerText)+1;
    ct=8;
    var audio = new Audio(
    'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}

function checkwin() {
    for(let i=0;i<3;i++){
        if(arr[i]==0) continue;
        if(arr[i]==arr[i+3] && arr[i]==arr[i+6]){
            board();

            return;
        }
    }
    for(let i=0;i<9;i+=3){
        if(arr[i]==0) continue;
        if(arr[i]==arr[i+1] && arr[i]==arr[i+2]){
            board();
            return;
        }
    }
    
    if((arr[0]!=0 && arr[0]==arr[4] && arr[0]==arr[8]) || (arr[2]!=0 && arr[2]==arr[4] && arr[2]==arr[6])){
        board();
    }
}