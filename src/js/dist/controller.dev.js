"use strict";

require("regenerator-runtime/runtime");

var recipeContainer = document.querySelector('.recipe');

var timeout = function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long! Timeout after ".concat(s, " second")));
    }, s * 1000);
  });
}; //API for this app:
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////


var showRecipe = function showRecipe() {
  var res, data;
  return regeneratorRuntime.async(function showRecipe$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;

          if (res.ok) {
            _context.next = 9;
            break;
          }

          throw new Error("".concat(data.message));

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          alert(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

showRecipe();