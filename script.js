function makeid(l) {
   const Charac = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwZxYyZz0123456789!@#$%^&*()+~`=-'
    let ranno = 0;
    str='';
    resStr='';
    for(let i=0; i<l ; i++){
		
        ranno=Math.floor(Math.random()* 100);
        if(ranno < 0 || ranno > Charac.length){
            i--;
        }else{
            str= Charac.slice(ranno,ranno+1);
            resStr = resStr + str
        }
    }
    return resStr;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
