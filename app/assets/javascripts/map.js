$(function(){
  var mapOptions,
      canvas,
      map;

//creates map when first load the page
  mapOptions = {
    zoom:12,
    center:new google.maps.LatLng(51.508742, -0.120850),
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  canvas = document.getElementById("googleMap");
  map = new google.maps.Map(canvas, mapOptions);

//gets the cameras arry and uses JSON to turn it into readable data
 $.getJSON('/cameras.json', function(data) {

    //loop through the arrays to create a marker for each camera
    for(var i = 0; i < data.length; i++){
      var camera = data[i];

      //paints marker on the map with camera's lat and lng
      var marker = new google.maps.Marker({
      position: new google.maps.LatLng(camera.lat ,camera.lng),
      map: map,
      camera_id: i,
      location: camera.location,
      postcode: camera.postcode,
      file: camera.file,
      animation: google.maps.Animation.DROP
      });

      google.maps.event.addListener(marker, 'click', function(){
        var contentString = '<div id="content"><img src="http://www.tfl.gov.uk/tfl/livetravelnews/trafficcams/cctv/' + this.file + '"><p>' + this.location + ", " + this.postcode + '</p></div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        infowindow.open(map, this)
      });
    }
  })
});