(function($, w) {
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#loginButton').on('click', function () {
      w.location.assign('admin.html');
    });
    $('#searchTickets').on('click', function (e) {
      e.preventDefault();
      w.location.assign('tickets.html');
    });
  });
})(jQuery, window);
