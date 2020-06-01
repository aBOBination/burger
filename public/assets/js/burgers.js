$(function () {
  $('.burger-status').on('click', function (event) {
    var id = $(this).data('id');
    var devoured = $(this).data('devoured');
    console.log(devoured);
    if (devoured === 1) {
      $.ajax('/api/burger/' + id, {
        type: 'DELETE',
      }).then(function () {
        console.log('Burger deleted.');
        location.reload();
      });
    } else {
      newBurgerStatus = {
        devoured: 1,
      };
      console.log(newBurgerStatus);
      $.ajax('/api/burger/' + id, {
        type: 'PUT',
        data: newBurgerStatus,
      }).then(function () {
        console.log('Burger updated.');
        location.reload();
      });
    }
  });

  $('.create-form').on('submit', function (event) {
    event.preventDefault();
    userBurger = $('#burger-name').val().trim();
    if (userBurger) {
      var newBurger = {
        burger_name: userBurger,
        devoured: 0,
      };
      console.log(newBurger);
      $.ajax('/api/burger', {
        type: 'POST',
        data: newBurger,
      }).then(function () {
        console.log('Added a new burger.  Ready for consumption.');
        location.reload();
      });
    }
  });
});
