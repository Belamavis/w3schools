function myMap() {
		var mapCanvas = document.getElementById("map");
		var mapOptions = {
			center: new google.maps.LatLng(59.9171, 30.29), zoom: 11
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);
	}
