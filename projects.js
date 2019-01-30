$(document).ready(function () {

    $("#addProject").on("click", function () {

        if($("#projectForm").get(0).reportValidity()) {

            var article = $("<article>");

            var projectTitle = '<h4>' + $("#title").val() + '<button type="button" class="deleteButton btn btn-danger">X</button></h4>';
            article.append(projectTitle);

            var projectDiv = $('<div>');

            var projectDescription = '<p>' + $("#description").val() + '</p>';
            projectDiv.append(projectDescription);

            var projectTable = $('<table>');
            projectTable.append(createRow('Role', $("#role").val()));
            projectTable.append(createRow('Duration', $("#dateFrom").val() + ' to ' + $("#dateTo").val()));
            projectTable.append(createRow('Technology', $("#technology").val()));
            projectTable.append(createRow('Tools', $("#tools").val()));
            projectTable.append(createRow('Location', $("#location").val()));

            projectDiv.append(projectTable);

            article.append(projectDiv);
            article.append($('<hr>'));

            $('main').append(article);

            $("#projectForm").get(0).reset();
            $('#projectModal').modal('hide');
        }

    });

    $("article").on("click", ".deleteButton", function (event) {
        $(this).closest("article").remove();
    });

    var createRow = function(header, value) {
        var row = $('<tr>');
        row.append('<th width="10%">' + header + '</th>');
        row.append('<td width="40%">' + value + '</td>');
        return row;
    };

});