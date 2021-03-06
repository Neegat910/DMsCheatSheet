

$(document).ready(function() {
  var data = $('#logform').serializeArray();
  console.log(data);

  $('#create_account').on('click', function(){
    $('#login_content').fadeOut(150);
    $('#login_content').hide();
    $('#new_user').fadeIn(150);
  });

  $('#log_in').on('click', function(){
    $('#new_user').fadeOut(150);
    $('#new_user').hide();
    $('#login_content').fadeIn(150);
  });

  $('#login').on('click', function(){
    var data = $('#logform').serializeArray();
    console.log(data);

    $.ajax({
  type: 'POST',
  url: '/Resources/php/getuser.php',
  data: data,
  beforeSend:function(){
    // this is where we append a loading image
    $('#ajax_loader').show();
  },
  success:function(data){
    console.log(data);
    // successful request; do something with the data
    if (data['status'] == "success"){
      console.log(data);
      $('#ajax_loader').hide();
      $('body').append("<div class=\"notification\">Login successful.<button class=\"close\">X</button><br>You will be redirected.</div>");
      setTimeout(function() {window.location.href = "/index.php";}, 3000);
    } else {
      $('#ajax_loader').hide();
      $('body').append("<div class=\"notification\">Looks like you weren't logged in.<button class=\"close\">X</button><br>Please let Max know.</div>");
    }
  },
  error:function(){
    console.log(data);
    // failed request; give feedback to user
  $('#ajax_loader').hide();
$('body').append("<div class=\"notification\">There was an error...<button class=\"close\">X</button><br>Please let Max know.</div>");
    }
});
  });

  $('#submit').on('click', function(){
      var data = $('#create_user').serializeArray();
      console.log(data);

      $.ajax({
    type: 'POST',
    url: '/Resources/php/newuser.php',
    data: data,
    beforeSend:function(){
      // this is where we append a loading image
      $('#ajax_loader').show();
    },
    success:function(data){
      console.log(data);
      // successful request; do something with the data
      if (data['status'] == "success"){
        $('#ajax_loader').hide();
        $('body').append("<div class=\"notification\">User creation successful.<button class=\"close\">X</button><br>You will be redirected.</div>");
        setTimeout(function() {window.location.href = "/index.php";}, 3000);
      } else {
        $('#ajax_loader').hide();
        $('body').append("<div class=\"notification\">Looks like your user wasn't created.<button class=\"close\">X</button><br>Please let Max know.</div>");
      }
    },
    error:function(){
      console.log(data);
      // failed request; give feedback to user
    $('#ajax_loader').hide();
    $('body').append("<div class=\"notification\">There was an error...<button class=\"close\">X</button><br>Please let Max know.</div>");
      }
    });
  });

});
