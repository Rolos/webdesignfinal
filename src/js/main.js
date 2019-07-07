(function($, w) {
  $(document).ready(function(){
    $('#loginButton').on('click', function () {
      w.location.replace('admin.html');
    });
  });
})(jQuery, window);
