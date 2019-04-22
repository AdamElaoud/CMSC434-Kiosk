$('#sendMessageButton').on('click',function(event){
    event.preventDefault();

    $("#notification").empty()

    if ($("#name").val() != "" && $("#email").val() != "" && $("#message").val() != "" ){
        $("#notification").append(`  
        <div class="alert alert-success alert-dismissible ">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Success!</strong> Feedback as been submitted
        </div>`);

        $("#name").val('');
        $("#email").val('');
        $("#message").val('');
    } else{
        $("#notification").append(`  
        <div class="alert alert-danger alert-dismissible">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Error!</strong> Please fill in Name, Email, and Message
        </div>`);
    }

});