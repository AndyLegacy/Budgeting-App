
// budgetController
const budgetController = (function()  {

  const Expenses = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;

  };

  const Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;

  };

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }

  };

})();
// UI controlelr
const UIController = (function() {

  const DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be either + or -  (income or expenses)
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value


      };
    },
    getDOMStrings: function()  {
      return DOMStrings;

    }
  };

})();

// global app controller
const controller = (function(budgetCtrl, UICtrl) {

  const setUpEventListeners = function() {
    const DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if(event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };


  const ctrlAddItem = function() {

    // 1. Get field input data
    const input = UICtrl.getInput();

    // 2. add item to budget budgetController

    // 3. add new item to user interface

    //4. calculate budget

    //5. displayBudget on the UI
    console.log('It works bro');

  };

  return {
    init: function() {
      console.log('Application has started bro');
      setUpEventListeners();
    }

  };

})(budgetController, UIController);

controller.init();
