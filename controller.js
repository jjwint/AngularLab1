(function() {

	function FormController() {
		var vm = this;
		vm.toDoItem = [];
		vm.updateInfo = function(item) {
			vm.toDoItem.push(item);
			document.getElementById("inputEl").value = "";
			console.log(item);
		};
		vm.remove = function(){
			vm.toDoItem.splice()
		}
	}

	angular
		.module("app")
		.controller("FormController", FormController);

})();