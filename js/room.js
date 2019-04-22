fillModal();


function fillModal() {
    let modal = document.getElementById("modal-content");

    let table = '<table class = "table table-striped table-bordered"><thead class = "thead-dark"><tr><th>Time/Day</th><th>M</th><th>T</th><th>W</th><th>Th</th><th>F</th><th>S</th><th>Sun</th></tr></thead><tbody>';

    for (let i = 0; i < 13; i++) {
        let time;
        if (i > 4) {
            time = i - 4;
        } else {
            time = i + 8;
        }

        table += '<tr><td>' + time + ':00</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    }

    table += '</tbody></table>';

    modal.innerHTML = table;
}
