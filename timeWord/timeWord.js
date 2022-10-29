let digits=["one","two","three","four","five","six","seven","eigth","nine"];
let teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let tys=["twenty","thirty","fourty","fifty"];


function timeWord (time){
    let word=[];
    newSTR=time.split(":");
    let hour=parseInt(newSTR[0]);
    let minute=parseInt(newSTR[1]);
    if(hour+minute==0)
        console.log("Midnight:==>",hour,minute,word.push("Midnight"));
    if(hour==12 && minute==0)
             console.log("noon:==>",hour,minute,word.push("noon"));
    if((hour==0 || hour ==12)&& minute!=0)   
            word.push("twelve");
    if(hour<10 && hour>0)  
        word.push(digits[hour-1]);
    if(hour>9 && hour<12)
        word.push(teens[hour-10]);
    if(hour>12 && hour <22)
        word.push(digits[hour-13]);
    if(hour>21 && hour<24)  
        word.push(teens[hour-22])    
      
       
    if (minute>0 && minute<10)    
       {word.push("oh");
       word.push(digits[minute-1]);}
    else
       if(minute<20)
         word.push(teens[minute-10]);
       else
          if(minute%10==0)
             word.push(tys[minute/10-2]);
          else
            {
             let unit=minute%10;
             let desc=(minute-unit)/10;
             word.push(tys[desc-2]);
             word.push(digits[unit-1]);
            } 

       if((hour!=0 && hour != 12)&& minute==0)
           word.push("o'clock")
       if ((hour*100)+minute>1200)
          word.push("pm");
       if((hour*100)+minute<1200 && (hour*100)+minute>000)
          word.push("am");
          wordStr=word.join(' ');
          console.log("the word  ",wordStr);
        return (wordStr);
           
}

module.exports = timeWord;
