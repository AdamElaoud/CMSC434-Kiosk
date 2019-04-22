fillModal();


function fillModal() {
    let modal = document.getElementById("modal-content");

    let table = '<table class = "table table-striped table-bordered"><thead class = "thead-dark"><tr><th>Time/Day</th><th>S</th><th>M</th><th>T</th><th>W</th><th>Th</th><th>F</th><th>S</th></tr></thead><tbody>';

    for (let i = 0; i < 13; i++) {
        let time;
        if (i > 4) {
            time = i - 4;
        } else {
            time = i + 8;
        }

        if (i % 3 === 0) {
            table += '<tr><td>' + time + ':00</td><td class = "open"></td><td class = "filled"></td><td class = "filled"></td><td class = "open"></td><td class = "filled"></td><td class = "open"></td><td class = "filled"></td></tr>';
        } else if (i % 3 === 1) {
            table += '<tr><td>' + time + ':00</td><td class = "filled"></td><td class = "open"></td><td class = "open"></td><td class = "open"></td><td class = "filled"></td><td class = "open"></td><td class = "open"></td></tr>';
        } else {
            table += '<tr><td>' + time + ':00</td><td class = "open"></td><td class = "open"></td><td class = "open"></td><td class = "filled"></td><td class = "filled"></td><td class = "open"></td><td class = "open"></td></tr>';
        }
    }

    table += '</tbody></table>';

    modal.innerHTML = table;
}

$("#reserveRoom").on('click',function(event){
    event.preventDefault();

    $("#reserveRoom").append(`
    <div class="spinner-border text-primary" id="loading" role="status">
        <span class="sr-only">Loading...</span>
    </div>`);

    setTimeout(function(){
        $("#exampleModal").modal('toggle');

        $("#notification").empty();
    
        $("#notification").append(`  
            <div class="alert alert-success alert-dismissible ">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Success!</strong> Reservation has been made!
            </div>`);
    
        removeLoading();
    }, 1000);
    
})


function removeLoading(){
    $("#loading").html('');
    $("#loading").remove();
}
