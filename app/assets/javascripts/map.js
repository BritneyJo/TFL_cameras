$(function(){
  var mapOptions,
      canvas,
      map;

  mapOptions = {
    zoom:12,
    center:new google.maps.LatLng(51.508742, -0.120850),
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  canvas = document.getElementById("googleMap");
  map = new google.maps.Map(canvas, mapOptions);

 var marker = new google.maps.Marker({
      position: new google.maps.LatLng(51.508742, -0.120850),
      map: map
  });

 $.getJSON('/cameras.json', function(data) {
    console.log(data);
  });

});