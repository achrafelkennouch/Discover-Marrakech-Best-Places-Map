// AEK

function initialize() {
    var mapOptions = {
        // zoom of map start
        zoom: 14,
        // initialize map { marrakech }
        center: new google.maps.LatLng(31.624309, -7.993204),
        // Type of map
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        minZoom: 2
        };

    // create a new map
    var map = new google.maps.Map(
        document.getElementById('map'),
        mapOptions
    );

    // info window

    var infoWindow = new google.maps.InfoWindow();
 

    // create a marker 
    var marker = new google.maps.Marker({
       
        position: new google.maps.LatLng(31.624309, -7.993204),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Koutoubia Marrakech'
    });

    var marker2 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.641031, -8.002590),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Jardin Majorelle'
    });

    var marker3 = new google.maps.Marker({
       
        position: new google.maps.LatLng(31.625550, -7.989402),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Place Jemaa el fna'
    });

    var marker4 = new google.maps.Marker({
     
        position: new google.maps.LatLng(31.620945, -7.983927),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Palais de la Bahia'
    });
    var marker5 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.618542, -7.985487),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Badi Palace'
    });
    var marker6 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.632016, -7.986234),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Ibn Youssef School'
    });
    var marker7 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.617108, -7.989000),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Saadian Tombs'
    });
    var marker8 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.614064, -8.017147),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Menara Gardens'
    });
    var marker9 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.623348, -7.984049),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Dar Si Said Museum'
    });
    var marker10 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.630664, -7.989527),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Le Jardin Secret'
    });
    var marker11 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.631515, -7.992338),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Dar El Bacha Museum'
    });
   
    var marker13 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.627884,-7.988100),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Souk Semmarine'
    });
    var marker14 = new google.maps.Marker({
      
        position: new google.maps.LatLng(31.642655,-8.003222),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Musée Yves Saint Laurent'
    });
 // Adjust map center when the window is resized
 google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(mapOptions.center);
});
}

// initialize the map
google.maps.event.addDomListener(window, 'load', initialize);



