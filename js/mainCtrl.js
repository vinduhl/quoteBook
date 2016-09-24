app.controller("mainCtrl", function($scope, dataService) {
  $scope.quotes = dataService.getQuotes();
  $scope.errorMessage = "";

  $scope.addQuote = function(newQuote) {

    if(newQuote.text.trim() !== "" && newQuote.text.trim() !== "") {
      dataService.addData(newQuote);
      $scope.errorMessage = "";
    } else {
      $scope.errorMessage = "Quote and author cannot be blank.";
    }

  }

  $scope.deleteQuote = function(quoteText) {
    dataService.removeData(quoteText);
  }

});
