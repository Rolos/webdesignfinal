(function($, w) {
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#loginButton').on('click', function () {
      w.location.replace('admin.html');
    });
  });
})(jQuery, window);
