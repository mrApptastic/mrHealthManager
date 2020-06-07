import { Component, OnInit, } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  dataSource: any[];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    /*
    this.data.getFoodFromTemplate().subscribe(x => {
      this.dataSource = x;
    });
    */
    this.reloadPersons();
  }

  update($event): void {
    // alert(JSON.stringify($event));
    const per = $event as Person;
    this.router.navigateByUrl('/Person/' + per.Id);
  }

  addPerson(): void {
      this.data.setPerson({
        Id: 0,
        Name: '',
        Height: 0,
        Weight: 0,
        DateOfBirth: '',
        Gender: false,
        StrideLength: 0,
        Activities: new Array(),
        Consumption: new Array(),
        History: new Array(),
        Plans: new Array()
      });
      this.reloadPersons();
  }

  reloadPersons(): void {
    setTimeout(() => {
      this.dataSource = this.data.getPersons();
    }, 0);
  }

  /*
app.controller("mainController", ['$scope', '$rootScope',
'dataService', 'calcService', function ($scope, $rootScope, dataService, calcService) {

$scope.personStats = dataService.getPerson(1,'2018-12-17');
$scope.personStats.BMI = calcService.calculateBMI(
    $scope.personStats.Weight,
    $scope.personStats.Height
);
$scope.personStats.BMR = calcService.calculateBMR(
    $scope.personStats.DateOfBirth,
    $scope.personStats.Gender,
    $scope.personStats.Weight,
    $scope.personStats.Height
);
function drawBMIGraph (width) {
    var ib = new dataHussar("BMI_Graph",$scope.personStats.History, { width: width });
}
setTimeout(function () {
    drawBMIGraph(document.getElementById("BMI_Box").offsetWidth);
}, 0);

}]);

app.controller("planningController", ['$scope',
'$rootScope', 'dataService', 'calcService', function ($scope, $rootScope, dataService, calcService) {
$scope.activityOrder = "Time";
$scope.activityDirection = false;
$scope.personStats = dataService.getPerson(1,'2018-12-17');
$scope.foodTypes = dataService.getFoodTypes();
$scope.food = dataService.getFood();
$scope.activities = dataService.getActivities();
$scope.getTotal = function (arr, obj) {
	var total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += parseFloat(arr[i][obj]);
	}
	return total.toFixed(2);
};

}]);

app.controller("dietController", ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {

$scope.foodTypes = dataService.getFoodTypes();
$scope.food = dataService.getFood();

}]);

app.controller("activitiesController", ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {


}]);
  */

}
