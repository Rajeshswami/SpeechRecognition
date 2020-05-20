// let promise = new Promise((resolve, reject) => {
// let status =  false;
// if(status){
//     resolve("resolving data here")
// }
// else{
//     reject("rejected data here")
// }
// })
// promise.then((data)=>{
// console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// window.fetch(githubServer).then((data) => {
//    data.json().then((user)=>{
//        console.log(user)
//    }).catch((err)=>{
//        console.log(err)
//    })
// }).catch((err) => {
//     console.log(err)
// })
let githubServer = "https://api.github.com/users";
window
  .fetch(githubServer)
  .then((data) => {
    data
      .json()
      .then((gitUsers) => {
        let output = [];
        for (let user of gitUsers) {
          output += `<div>
        <img src = "${user.avatar_url}"/>
        <h1> user:${user.login}</h1>
        <a href = "${user.html_url}" target - "_blank">details</a>
        </div>`;
        }
        document.getElementById("template").innerHTML = output;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
