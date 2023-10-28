//Add task button appears upon keydown event
$("#inputTask").keydown(function(){
    if ($("#inputTask").val().length >= 2) {
            $("#addTaskBtn").removeClass("hidden");
        } else {
            $("#addTaskBtn").addClass("hidden");
        }
});


//Add Button get clicked which starts the function
$("#addTaskBtn").click(function(){
    //hides the Add Task button
    $("#addTaskBtn").addClass("hidden");

    //take the inputted value and append it
    $("ul").append("<li> <input type=\"radio\" class=\"md:scale-[2] md:mr-3\"> <label>" + $("#inputTask").val() + "</label> <button type=\"button\" class=\"bg-[#982222] rounded-2xl px-2 text-white md:p-2 hover:bg-red-950\"> Delete </button> </li>");

    //clears the inputted value
    $("#inputTask").val("");

});

//Delete Function
$("ul").on("click", "button:contains(Delete)", function() {
    $(this).parent().remove();
});


//Radio Buttons
$("ul").on("click", "input:radio", function() {
    $(this).parent().addClass("line-through	");
});