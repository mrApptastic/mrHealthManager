var HealthModule = angular.module('HealthModule', []);

	HealthModule.service('calcService', function(input) {
		this.calculateAge = function (input) {
				var birthday = new Date(input);
				var ageDifMs = Date.now() - birthday.getTime();
				var ageDate = new Date(ageDifMs);
				var age = Math.abs(ageDate.getUTCFullYear() - 1970);
				return isNaN(age) ? 0 : age;
		}
	});



