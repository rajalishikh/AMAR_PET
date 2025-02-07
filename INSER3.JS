let counter=1;
const countInterval=setInterval(count,1000)
function count(){
    console.log(counter++)
    if(counter>3){
        clearInterval(countInterval)
    }
}
