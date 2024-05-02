// const generateNo = new Promise((resolve, reject)=>{
//     const randomNo = Math.floor(Math.random()*10)
//     if(randomNo >=5){
//         resolve("the No is: " + randomNo)
//     }else{
//         reject("the No is less than 5")
//     }
// })

// generateNo.then(result => {
//     console.log(result);
// }).catch(error =>{
//     console.log(error);
// })

function getData(key, callback) {
    return new Promise((resolve, reject) => {
        console.log("getting data: ");
        setTimeout(()=>{
            if(key === "abc123"){
                const data = "Raw data";
                callback(null,data)
            }else{
                callback("Invalid key", null)
            }

        }, 1000);
      
    })
    
    
}