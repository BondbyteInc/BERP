// add scripts

$(document).on('ready', function() {
  //this is where it all starts.
  console.log('sanity checka!');
});

function submitCredentials(){
  $.post("/auth",{login: "foo", password: "fee"}, function(res){
        alert(res);
  });
}
