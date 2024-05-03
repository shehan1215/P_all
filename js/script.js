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

function getData(key) {
    return new Promise((resolve, reject) => {
        console.log("getting data: ");
        setTimeout(()=>{
            if(key === "abc123"){
                const data = "Raw data";
                resolve(data);
            }else{
                reject("Invalid key");
            }

        }, 1000);
      
    })
}

function processData(rawData){
    return new Promise((resolve,reject)=>{
        console.log("Processing Data...");
        setTimeout(() => {
            const processData = rawData+" is processed";
            resolve(processData)
        }, 1000);
    })
}

function display(){
    getData("abc123").then(result=>{
        return processData(result);
    }).catch(error => {
        console.log(error);
    })
}
display();