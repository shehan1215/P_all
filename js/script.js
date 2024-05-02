const generateNo = new Promise((resolve, reject)=>{
    const randomNo = Math.floor(Math.random()*10)
    if(randomNo >=5){
        resolve("the No is: " + randomNo)
    }else{
        reject("the No is less than 5")
    }
})

generateNo.then(result => {
    console.log(result);
}).catch(error =>{
    console.log(error);
})