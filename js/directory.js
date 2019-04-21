function arrayToTable(tableData) {
    var table = $('<table id="directory-table" data-toggle="table" data-sort-name="FirstName" class="table table-striped table-bordered table-sm"><thead><tr><th data-field="Room" data-sortable="true"> Room </th><th data-field="DirectoryID" data-sortable="true"> Directory ID </th><th data-field="FirstName" data-sortable="true"> First Name </th><th data-field="LastName" data-sortable="true"> Last Name </th></tr></thead></table>');
    var tbody = $('<tbody></tbody>')
    $(tableData).each(function (i, rowData) {
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            if(j == 0) {
                row.append($('<td>IRB '+cellData+'</td>'));
            } else {
                row.append($('<td>'+cellData+'</td>'));
            }
        });
        tbody.append(row);
    });
    table.append(tbody);
    return table;
}

$.ajax({
    type: "GET",
    url: "/data/professors.csv",
    success: function (data) {
        $('#container').append(arrayToTable(Papa.parse(data).data));
    }
});
