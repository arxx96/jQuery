
// //password Hide an Show

// document.getElementById("show").onclick= function(){
//   // alert("hi")

//    document.getElementById("password").type = "text"
// }



// let password =document.getElementById("password")
// document.getElementById("show").onclick= function(){

//     if (password.type == "password"){


//         document.getElementById("show").innerText="hide"
//         password.type="text"
//     }
//     else{

//         document.getElementById("show").innerText="show"
//         password.type="password"
//     }
// }




// let text=document.getElementById("text")
// let res =document.getElementById("res")
// text.onkeyup = function(){

//     let count 
// }



// $('#show').click(function(){
//     if ($("#password").attr("type") ==="password" ){

//         $('#show').text("hide")
//         $("#password").attr("type", "text")
//     }else{
//         $('#show').text("show")
//         $("#password").attr("type","password")
//     }

// })

//charCount 

    $('#myTextarea').on('input', function() {
      var charCount = $(this).val().length;
      $('#charCount').text(charCount);

      if (charCount >= 20) {
        $(this).css('border-color', 'red' );
        $(this).css('outline-color', 'red' );
      } else {
        $(this).css('border-color', 'black');
        $(this).css('outline-color','black')
      }
    })
  