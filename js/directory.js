
function arrayToTable(tableData) {
    var table = $('<tbody></tbody>');
    $(tableData).each(function (i, rowData) {
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            if(j == 0) {
                row.append($('<td>IRB '+cellData+'</td>'));
            } else {
                row.append($('<td>'+cellData+'</td>'));
            }
        });
        table.append(row);
    });
    return table;
}

$.ajax({
    type: "GET",
    url: "/data/professors.csv",
    success: function (data) {
        $('#directory-table').append(arrayToTable(Papa.parse(data).data));
    }
});