
// //hide/show effects

// $("#click").click(()=>{


// $(".box").hide(4000)

// })




// //slideToggle() Method

// $("#click").click(()=>{


//     $(".box").slideToggle(2000)
    
//     })



//     //Effects - Animation

// $("#click").click(()=>{


//     $(".box").animate({width: '500px'},4000)
    
//     })

// //stop effects
//  $("#stop").click(()=>{


//           $(".box").stop()
            
//       })




//API

// $.get({
//     url: "https://jsonplaceholder.typicode.com/users",
//     success: function(res) {
//         var userList = document.getElementById("userList");

//         res.forEach(function(user) {
//             var listItem = document.createElement("li");
//             listItem.innerText = user.name;
//             userList.appendChild(listItem);
//         });
//     },
//     error: function(res) {
//         console.log(res);
//     }
// });



// $.get({
//     url: "https://jsonplaceholder.typicode.com/users",
//     success: function(res) {
//     // let text = ""
//     // for(let i ; i< res.length; i++){
//     //     text += `<li> ${res[i].name} </li>`

//     let text=res.map((user)=> `<li> ${user.name} </li>`)
//     $("#list").html(text)
//     }
// })




$("#click").click(()=>{
    let username =$("#username").val()
    let urlapi= "https://api.github.com/users/"+username

    $.get({
        url:urlapi,
        success:function(res){
            $("#img").attr("src",res.avatar_url)
            console.log(res.avatar_url)
        }


    })


})


