$(document).ready(function () {

    $("#addExperience").on("click", function () {

        if($("#experienceForm").get(0).reportValidity()) {
            var newRow = $("<tr>");
            var columns = "";

            columns += '<td>' + $("#dateFrom").val() + ' to ' + $("#dateTo").val() + '</td>';
            columns += '<td>' + $("#organization").val() + '</td>';
            columns += '<td>' + $("#role").val() + '</td>';

            columns += '<td><button type="button" class="deleteButton btn btn-danger">X</button></td>';
            newRow.append(columns);
            $("#experienceTable").append(newRow);

            $("#experienceForm").get(0).reset();
            $('#experienceModal').modal('hide');
        }

    });

    $("#experienceTable").on("click", ".deleteButton", function (event) {
        $(this).closest("article").remove();
    });

});