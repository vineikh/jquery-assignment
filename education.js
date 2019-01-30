$(document).ready(function () {

    $("#addEducation").on("click", function () {

        if($("#educationForm").get(0).reportValidity()) {
            var newRow = $("<tr>");
            var columns = "";

            columns += '<td>' + $("#degree").val() + '</td>';
            columns += '<td>' + $("#year").val() + '</td>';
            columns += '<td>' + $("#institute").val() + '</td>';
            columns += '<td>' + $("#specialization").val() + '</td>';

            columns += '<td><button type="button" class="deleteButton btn btn-danger">X</button></td>';
            newRow.append(columns);
            $("#educationTable").append(newRow);

            $("#educationForm").get(0).reset();
            $('#educationModal').modal('hide');
        }

    });

    $("#educationTable").on("click", ".deleteButton", function (event) {
        $(this).closest("tr").remove();
    });

});