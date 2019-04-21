function arrayToTable(tableData) {
    let table = $('<table id="directory-table" data-toggle="table" data-sort-name="FirstName" class="table table-striped table-bordered table-sm"><thead><tr><th data-field="Room" data-sortable="true"> Room </th><th data-field="DirectoryID" data-sortable="true"> Directory ID </th><th data-field="FirstName" data-sortable="true"> First Name </th><th data-field="LastName" data-sortable="true"> Last Name </th></tr></thead></table>');
    let tbody = $('<tbody></tbody>');

    $(tableData).each(function (i, rowData) {
        let row = $('<tr></tr>');

        row.append($('<td>IRB '+ rowData.Room +'</td>'));
        row.append($('<td>'+ rowData.ID +'</td>'));
        row.append($('<td>'+ rowData.First +'</td>'));
        row.append($('<td>'+ rowData.Last +'</td>'));

        tbody.append(row);
    });

    table.append(tbody);
    return table;
}

let data = jsonParse();
console.log(data);

$('#container').append(arrayToTable(data));
