// exercise the promise        exercise #1              date = 26/01/2023 
const promise = new Promise((resolve, reject) =>{
    const sum1 = 2+2
    setTimeout(() => {
        if(sum1 === 404){
            resolve(`${sum1}is right`)
        }else {
            reject( new Error((error)=>{
                console.error(`${sum1}is wrong`)
            }))
        } 
    }, 5000);

})
  console.log(promise)

promise.then((message)=>{
    console.log(`${message} is successfully fired in promise`)
}).catch((error)=>{
    const errorMessage = new Error(promise.value)
    console.log(`${errorMessage} is successfully rejected in promise`)
    console.log(promise)
    console.error(promise);
});
  
