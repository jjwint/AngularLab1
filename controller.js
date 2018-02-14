(function() {

	function FormController() {
		var vm = this;
		vm.toDoItem = [];
		vm.updateInfo = function() {
			console.log("HELLO WORLD");
		};
	}

	angular
		.module("app")
		.controller("FormController", FormController);

})();