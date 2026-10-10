// server yaha run karennge 
//  export ko receive karenge yaha koi bhi naam se but same nam ho toh acha baat hain jaise app
// 4th line 
const app = require("./src/app")




// 5th line server toh start karne ke liye humlog port number 3000 use karenge 
app.listen(3000, () => {
console.log("server is running")    
})
