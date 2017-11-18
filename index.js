$(document).ready(function () {
    $("#list-items").html(localStorage.getItem("listItems"));
    $(".add-items").submit(function(event) {
        event.preventDefault();

        var item = $("#todo-list-item").val();
        //when we define the variable using the keyword var it will be defined as an exclusive variable for this function
        //which is saver, because it may be overwritten by other functions

        if (item){ //if the item has a string do this code, if it is empty do not do anything
            $("#list-items").append("<li><input class='checkbox' type='checkbox'>"+item+"<a class='remove'>x</a><hr></li>");
           localStorage.setItem("listItems", $("#list-items").html());
            $("#todo-list-item").val("");
        }
        // item = $("#todo-list-item").val();
        //when we define the variable name without using the keyword var it will be defined as global variable

    });

    $(document).on("change", ".checkbox",function () {
        if($(this).attr("checked"))
        {
            $(this).removeAttr("checked");
        }
        else{
            $(this).attr("checked","checked");
        }
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());

    });

    $(document).on("click", ".remove",function () {
       $(this).parent().remove();
        localStorage.setItem("listItems", $("#list-items").html());
    });

});
























