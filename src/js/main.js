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
    $('.tickets-page .card').on('click', function (e) {
      e.preventDefault();
      w.location.assign('ticket.html');
    });
    if (w.swal) {
      $('#buyTicketBtn').on('click', function (e) {
        swal("Buen viaje!", "Ha adquirido su nuevo billete", "success");
      });
    }
  });
})(jQuery, window);
