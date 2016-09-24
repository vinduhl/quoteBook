app.controller("mainCtrl", function($scope, dataService, $cookies) {

  var storedQuotes = $cookies.get("storedQuotes");

  if(storedQuotes) {
    dataService.setQuotes(JSON.parse(storedQuotes));
  }

  $scope.quotes = dataService.getQuotes();


  $scope.errorMessage = "";

  $scope.addQuote = function(newQuote) {

    if(newQuote.text.trim() !== "" && newQuote.text.trim() !== "") {
      dataService.addData(newQuote);
      dataService.persistData(persistServiceData);
      $scope.errorMessage = "";
    } else {
      $scope.errorMessage = "Quote and author cannot be blank.";
    }
  }

  $scope.deleteQuote = function(quoteText) {
    dataService.removeData(quoteText);
    dataService.persistData(persistServiceData);
  }

  // This function is used as a callback for dataService.persistData() function
  var persistServiceData = function(serviceData) {
    console.log("serviceData=", JSON.stringify(serviceData));
    $cookies.put("storedQuotes", JSON.stringify(serviceData));
    console.log($cookies.get("storedQuotes"));
  }

});
