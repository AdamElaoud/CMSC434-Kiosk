$(".emailEvent").on('keyup',function(event){
    event.preventDefault();
    $(".emailEvent").val($(this).val());
})

$(".available").on('click',function(event){
    event.preventDefault();
    $("#notification").empty();

    $(this).append(
        `<div class="spinner-border text-primary" id="loading" role="status">
            <span class="sr-only">Loading...</span>
        </div>`
    )
    setTimeout(function(){
        if ($('.emailEvent').val() != ""){
            $("#notification").append(`  
            <div class="alert alert-success alert-dismissible ">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Success!</strong> Event has been added to your calendar.
            </div>`);
            removeLoading();

        } else{
            $("#notification").append(`  
            <div class="alert alert-danger alert-dismissible">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Error!</strong> Please fill in your email.
            </div>`);
            removeLoading();
        }
    }, 1000)

})


function removeLoading(){
    $("#loading").html('');
    $("#loading").remove();
}
