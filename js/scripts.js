//backend
function Task(task, description) {
  this.task = task;
  this.description = description;
}

Task.prototype.previewTask = function(){
  return this.task+ " " +this.description;
}

//frontend
$(document).ready(function(){
  $("form#new-tasks").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDescription = $("input#new-description").val();

    var newTask = new Task(inputtedTask, inputtedDescription);

    $("ul#tasks").append("<li><span class='task' class='input-group-addon'><input type='checkbox'>"+ newTask.previewTask()+"</span></li>");

    $(".task").last().click(function(){
    $("#show-task").show();
    $("#show-task h2").text(newTask.task);
    $(".task-name").text(newTask.task);
    $(".task-description").text(newTask.description);
    })

    $("input#new-task").val("");
    $("input#new-description").val("");

    $("li").last().on("dblclick",function() {
      $(this).remove();
      $("#show-task").empty()
    });
  });
});
