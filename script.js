
var cardRow1 = document.getElementById("row1");
var cardRow2 = document.getElementById("row2");
var cardRow3 = document.getElementById("row3");
var cardRow4 = document.getElementById("row4");
var cardRow5 = document.getElementById("row5");
var cardColVal =[];
var colValRandom ='';
var HTMLcreate = '';
var cardNum ='';
var winningString = '';
var colNum ='';
var popNum = [];
var counter = 0;





document.getElementById("newGame").addEventListener("click",init);
document.getElementById("popNum").addEventListener("click",randomNum);



function init(){
    //cardColVal.splice(0, cardColVal.length);
    document.getElementById("popNum").disabled = false;
    
    counter = 0;
    localStorage.setItem('Counter',counter);

    cardColVal=[];
    popNum =[];
    localStorage.setItem('cardNumbers','');
    localStorage.setItem('popNumbers','');
    i =0;
    cardRow1.innerHTML="";
    cardRow2.innerHTML="";
    cardRow3.innerHTML="";
    cardRow4.innerHTML="";
    cardRow5.innerHTML="";

    document.getElementById("popNext").innerHTML ="POP#: "+0 ;
            document.getElementById("popCntr").innerHTML = "COUNTER#: "+0;

while(i < 26){
colValRandom = Math.floor(Math.random() * 50);
        
        if(cardColVal.includes(colValRandom) || colValRandom === 0){
        }else{
        cardColVal.push(colValRandom);
        i++;
        }

        if(i ===25){
            break;
        }

}

for(i=0;i<=cardColVal.length;i++){
    

HTMLcreate = `<div class="col ${i+1}" id=${cardColVal[i]} style="border: solid black 1px;width:150px;">${cardColVal[i]}</div>`;
if(i<5){
    
cardRow1.innerHTML += HTMLcreate;
}else   if(i<10){
    cardRow2.innerHTML += HTMLcreate;
    }else  if(i<15){
        cardRow3.innerHTML += HTMLcreate;
        }else  if(i<20){
            cardRow4.innerHTML += HTMLcreate;
            }else  if(i<25){
                cardRow5.innerHTML += HTMLcreate;
                }
            }

            localStorage.setItem('cardNumbers',cardColVal);

        }// end of init


       function randomNum(){
     var counterLocal = localStorage.getItem('Counter');
     popNumLocal = localStorage.getItem('popNumbers');
     winningString = ['12345','678910','1112131415','1617181920','2122232425','16111617','27121722','38131823','49141924','510152025'];
     var gameString = popNumLocal.split(',').join('');
     
     
     for(j=0; j< winningString.length;j++ ){
        if(gameString.includes(winningString[j])){
            document.getElementById("popNum").disabled = true;
            counter = 0;
            localStorage.setItem('Counter',counter);
             alert('BINGO!!!!');
             break;

         }else{
            //winningString[i];
         }
        
     }

     if(counterLocal <25){

        colValRandom = Math.floor(Math.random() * 50);
        cardNum = localStorage.getItem('cardNumbers');
        

      //  alert(colValRandom);
        if(popNumLocal.includes(colValRandom)){
            //don't do anything if popped number is already exists, call random Number again
            
            randomNum();
        }else{
            counter += 1;

        if(cardNum.includes(colValRandom) ){
            

            document.getElementById("popNext").innerHTML = "POP#: "+colValRandom;
            document.getElementById("popCntr").innerHTML = "COUNTER#: "+counter;
           
            document.getElementById(colValRandom).style.backgroundColor="green";
            colNum = document.getElementById(colValRandom).className;
            colNum = colNum.split('col ');
            if(popNum.includes(colNum[1])){
            
            }else{
                popNum.push(colNum[1]);
            }


           localStorage.setItem('popNumbers','');
           popNum.sort(function(a,b) { return a - b; });
           
         //  alert(popNum.sort(function(a,b) { return a - b; }));
           localStorage.setItem('popNumbers',popNum);
           localStorage.setItem('Counter',counter);
        }else{
            localStorage.setItem('Counter',counter);
            document.getElementById("popNext").innerHTML = "POP#: "+colValRandom;
            document.getElementById("popCntr").innerHTML = "COUNTER#: "+counter;
        };
       } 
    }//end of pop up 25 numbers
    else{
        alert("Game Over");
        document.getElementById("popNum").disabled = true;
    }
}    

    init();



