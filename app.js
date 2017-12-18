
// budgetController
const budgetController = (function()  {



})();


// UI controlelr
const UIController = (function() {

  // some code


})();

// global app controller
const controller = (function(budgetCtrl, UICtrl) {

  const ctrlAddItem = function() {

    // 1. Get field input data

    // 2. add item to budget budgetController

    // 3. add new item to user interface

    //4. calculate budget

    //5. displayBudget on the UI
    console.log('It works bro');

  };

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }






  });


})(budgetController, UIController);
