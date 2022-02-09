/* Consider the below function
          setTimeout(() => {
          console.log("Time 1")
    }, 3000)
    setTimeout(() => {
           console.log("Time 2")
        }, 2000)
        setTimeout(() => {
           console.log("Time 3")
        }, 1000)

      This gives Output as 
            Time 3
            Time 2
            Time 1
     Change the program so that it prints the output as 
            Time 1
            Time 2
            Time 3
     without changing the time */




function print(string,time){
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve( console.log(string))
         }, time)
    })
}

print("Time1",3000)
.then(()=>print("Time2",2000))
.then(()=>print("Time3",1000))