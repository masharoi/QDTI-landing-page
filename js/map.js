// JavaScript Document
function initMap() {
	// The location of Uluru
	var uluru = {
		lat: 42.3813927,
		lng: -71.1036227
	};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 13,
			center: uluru
		});
	

	var styles = [
		{
		"featureType": "landscape",
		"stylers": [{
			"saturation": 32
		}, {
			"lightness": 65
		}, {
			"visibility": "simplified"
		}]
	},{
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text",
    "stylers": [
      {
    "visibility": "off"
      }
    ]
  }, {
		"featureType": "poi",
		"stylers": [{
                "hue": "#386000"
            },
            {
                "saturation": -80
            },
            {
                "lightness": -35.4
            },
            {
                "gamma": 1
            }, {
			"visibility": "simplified"
		}]
	},{
		"featureType": "poi",
			"elementType": "labels",
		"stylers": [ {
			"visibility": "off"
		}]
	},
		{
		"featureType": "road.highway",
        "stylers": [
            {
                "hue": "#53FF00"
            },
            {
                "saturation": -73
            },
            {
                "lightness": 40
            },
            {
                "gamma": 1
            }
        ]
	}, {
		"featureType": "road.arterial",
		"stylers": [{
			"saturation": -100
		}, {
			"lightness": 30
		}, {
			"visibility": "on"
		}]
	}, {
		"featureType": "road.local",
		"stylers": [{
			"saturation": -100
		}, {
			"lightness": 40
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "transit",
		"stylers": [{
			"saturation": -100
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "administrative.province",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "water",
		"elementType": "labels",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"lightness": -25
		}, {
			"saturation": -100
		}]
	}, {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"hue": "#ffff00"
		}, {
			"lightness": -25
		}, {
			"saturation": -97
		}]
	}];

	map.set('styles',styles);
	
	
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: 'images/circle.png',
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
	 var contentString = 'QDTI';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
	
	   marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
}

function animateCircle() {
	
}
