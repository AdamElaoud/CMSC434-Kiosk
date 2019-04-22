$('#sendMessageButton').on('click',function(event){
    event.preventDefault();

    $("#notification").empty()

    $("#sendMessageButton").append(`
    <div class="spinner-border text-primary" id="loading" role="status">
        <span class="sr-only">Loading...</span>
    </div>`);


    if ($("#name").val() != "" && $("#email").val() != "" && $("#message").val() != "" ){

        setTimeout(function(){
            $("#notification").append(`  
            <div class="alert alert-success alert-dismissible ">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Success!</strong> Feedback as been submitted. Thanks you ${$('#name').val()}
            </div>`);
    
            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
            $("#phone").val('');

            removeLoading();
        }, 1000);

    } else{

        setTimeout(function(){
            $("#notification").append(`  
            <div class="alert alert-danger alert-dismissible">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Error!</strong> Please fill in Name, Email, and Message
            </div>`);

            removeLoading();
        }, 1000);
    }

});

function removeLoading(){
    $("#loading").html('');
    $("#loading").remove();
}

