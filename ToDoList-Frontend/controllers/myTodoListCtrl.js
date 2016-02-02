app.controller('myTodoListCtrl', function ($scope, $location, taskFactory, $http) {
    //toggle add button and update button
    $scope.isViewing = false;
    //when we update the task, we should disable the 'delete task' function
    $scope.isDisabled = false;
    // for footer date format
    $scope.format = 'M/d/yy';
    // get all tasks from factory
    $scope.allTasks = [];
    //$scope.allTasks = taskFactory.getTasks();
    // default task object
    $scope.task = {taskId: 0, taskTitle: '', taskDescription: '', dueDate: '', taskStatus: 'active'};
    // initialization
    //  $scope.task.taskId = taskFactory.getLength();
    $scope.showTasks = [];
    $scope.sequence = 0;

    var init = function () {
        $http.get("http://localhost:8080/getAllTasks").success(function (data) {
            $scope.allTasks = data;
            $scope.showTasks = data;
            taskFactory.setTasks(data);
            $scope.task.taskId = taskFactory.getLength();
        });
    }

    init();

    $scope.addTask = function () {

        if (!$scope.task.dueDate) {
            alert("date format is not correct!");
            return;
        }
        taskFactory.addTask($scope.task);
        var addingTask = $scope.task;
        $http.get("http://localhost:8080/addTask?taskTitle=" + addingTask.taskTitle + "&taskDescription=" + addingTask.taskDescription
            + "&dueDate="+addingTask.dueDate+"&taskStatus="+addingTask.taskStatus);

        // when we add the current task, we should reinit the task object in the scope
        $scope.task = {taskId: 0, taskTitle: '', taskDescription: '', dueDate: '', taskStatus: 'active'};
        $scope.task.taskId = taskFactory.getLength();


        //after change, we should update showTasks
        switch ($scope.sequence) {
            case 0:
                break;

            case 1:
                var activeTasks = $scope.allTasks.filter(function (element) {
                    return element.taskStatus == 'active';
                });
                $scope.showTasks = activeTasks;

                break;

            case 2:
                var completedTasks = $scope.allTasks.filter(function (element) {
                    return element.taskStatus == 'completed';
                });
                $scope.showTasks = completedTasks;

        }
    }

    $scope.clearTask = function () {
        $scope.isViewing = false;
        $scope.task.taskTitle = "";
        $scope.task.taskDescription = "";
        $scope.task.dueDate = "";
        $scope.task.taskStatus = "active";

    }

    $scope.updateTask = function () {
        if (!$scope.task.dueDate) {
            alert("date format is not correct!");
            return;
        }

       var updatingTask= $scope.task;
        $http.get("http://localhost:8080/updateTask?id="+updatingTask.taskId+"&taskTitle=" + updatingTask.taskTitle + "&taskDescription=" + updatingTask.taskDescription
            + "&dueDate="+updatingTask.dueDate+"&taskStatus="+updatingTask.taskStatus);

        $scope.isViewing = false;
        $scope.task = {
            taskId: taskFactory.getLength(),
            taskTitle: '',
            taskDescription: '',
            dueDate: '',
            taskStatus: 'active'
        };
        $scope.isDisabled = false;
        $scope.hideClear = false;

        //after change, we should update showTasks
        switch ($scope.sequence) {
            case 1:
                var activeTasks = $scope.allTasks.filter(function (element) {
                    return element.taskStatus == 'active';
                });
                $scope.showTasks = activeTasks;
                break;
            case 2:
                var completedTasks = $scope.allTasks.filter(function (element) {
                    return element.taskStatus == 'completed';
                });
                $scope.showTasks = completedTasks;
                break;
        }
    }

    $scope.editTask = function (id) {
        $scope.isDisabled = true;
        $scope.isViewing = true;
        //hide the clear button
        $scope.hideClear = true;
        var task = taskFactory.getTaskById(id);
        $scope.task = task;
    }

    $scope.deleteTask = function (id) {

        var task = taskFactory.getTaskById(id);
        //flag it as "deleted", we do not delete it actually
        task.taskStatus = "deleted";

        var updatingTask=task;

        $http.get("http://localhost:8080/updateTask?id="+id+"&taskTitle=" + updatingTask.taskTitle + "&taskDescription=" + updatingTask.taskDescription
            + "&dueDate="+updatingTask.dueDate+"&taskStatus=deleted");
    }

    $scope.showAll = function () {
        $scope.showTasks = $scope.allTasks;
        $scope.sequence = 0;
    }

    $scope.showActive = function () {
        var activeTasks = $scope.allTasks.filter(function (element) {
            return element.taskStatus == 'active';
        });
        $scope.showTasks = activeTasks;
        $scope.sequence = 1;
    }

    $scope.showCompleted = function () {

        var completedTasks = $scope.allTasks.filter(function (element) {
            return element.taskStatus == 'completed';
        });

        $scope.showTasks = completedTasks;
        $scope.sequence = 2;

    }

    $scope.switchOrder = function () {
        var fromId = $scope.fromId;
        var toId = $scope.toId;
        var fromTask = taskFactory.getTaskById(fromId);
        var toTask = taskFactory.getTaskById(toId);

        // check the validation
        if (!fromTask || !toTask || fromTask.taskStatus === 'deleted' || toTask.taskStatus === 'deleted') {
            alert("one of Ids not found!");
            return;
        }

        //swap
        var temp = fromTask.taskTitle;
        fromTask.taskTitle = toTask.taskTitle;
        toTask.taskTitle = temp;
        temp = fromTask.taskDescription;
        fromTask.taskDescription = toTask.taskDescription;
        toTask.taskDescription = temp;
        temp = fromTask.dueDate;
        fromTask.dueDate = toTask.dueDate;
        toTask.dueDate = temp;
        temp = fromTask.taskStatus;
        fromTask.taskStatus = toTask.taskStatus;
        toTask.taskStatus = temp;

    }


});