// Google Maps functions

function initMap(){
  let myOptions = {
    zoom:8,
    center:{lat: 52.222222, lng: -2.222222},
    disableDefaultUI: true,
    zoomControl:true,
    mapTypeControl: true,
    scaleControl:true
  }
  let map = new google.maps.Map(document.getElemenntById('map_canvas'), myOptions);

  // Add Icons
  let iconbBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  let marker = new google.maps.Maker({
    position: {lat: 52.222222, lng: -2.222222},
    icon: iconBase + 'flag_maps.png',
    map:map
  });
  // Add window info
  let contentString = `
    <div id="content">
      <h2 id="firstHeading" class="firstHeading">
        Window Info
      </h2>
      <p> COOOOOOL </pA
    </div>`;
  
  let infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function(){
    infowindow.open(map, marker);
  });

}

// I don't own any Payed Google services, therefor, this features can only be implemented with:
// Maybe some of "you" can share your own... maybe!
// Note: Add script tag to html page for map preview as: 
// <script src="https://maps.googleapis.com/maps/api/js?key=GOOGLE-API-KEY&callback=initMap"></script>
