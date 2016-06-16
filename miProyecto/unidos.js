var app = angular.module('myapp',[]);

app.controller('AlumnosController', function($scope){
	$scope.alumnos=[
		{nombre:"Juan Blanco", telefono:"1111111", curso:"segundo Eso"},
		{nombre:"Rosa Luxemburgo", telefono:"1589988", curso:"primero Eso"},
		{nombre:"alberto herrea", telefono:"1222222", curso:"segundo Eso"},
		{nombre:"ana Mariño", telefono:"1888888", curso:"tercero Eso"}
	];
	$scope.Save = function(){
		$scope.alumnos.push({
			nombre:$scope.nuevoAlumno.nombre,
			telefono:$scope.nuevoAlumno.telefono,
			curso:$scope.nuevoAlumno.curso
		});
		$scope.formVisibility= false;
		console.log($scope.formVisibility);
	};
	$scope.formVisibility = false;
	$scope.ShowForm = function(){
		$scope.formVisibility = true;
		console.log($scope.formVisibility);
	};	


});


function function_uno(argument) {
	// body...
}
function function_dos(argument) {
	// body...
}