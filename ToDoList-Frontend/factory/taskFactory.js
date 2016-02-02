app.factory('taskFactory', function () {
    var obj = {};

    //initiate tasks
    var taskData=[];
   /* var taskData = [{taskId: 1, taskTitle: 'meeting', taskDescription: 'meeting with xxx', dueDate: '19/12/2015', taskStatus: 'active'},
                {taskId: 2, taskTitle: 'interview', taskDescription: 'interview with xxx', dueDate: '20/12/2015', taskStatus: 'completed'}];
*/
    //set Tasks
    obj.setTasks= function (tasks) {
        taskData=tasks;
    }

    //add task
    obj.addTask = function (task) {
        taskData.push(task);
    }

    //get all tasks
    obj.getTasks = function () {
        return taskData;
    }

    // get task by id
    obj.getTaskById = function (id) {
        var task = null;
        for (var i = 0; i < taskData.length; i++) {
            if (taskData[i].taskId == id) {
                task = taskData[i];
                break;
            }
        }
        return task;
    }

    obj.getLength = function () {
        return taskData.length + 1;
    }

    return obj;

});