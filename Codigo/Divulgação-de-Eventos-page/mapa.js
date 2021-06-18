var map;
function init() {
  map = new OpenLayers.Map("basicMap");
  var mapnik = new OpenLayers.Layer.OSM();
  var fromProjection = new OpenLayers.Projection("EPSG:4326"); // Transform from WGS 1984
  var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
  var position = new OpenLayers.LonLat(13.41, 52.52).transform(
    fromProjection,
    toProjection
  );
  var zoom = 15;
  map.addLayer(mapnik);
  map.setCenter(position, zoom);
}

function alterar1() {
  document.getElementById("basicMap").innerHTML = "";
  alert("alterar");
  map = new OpenLayers.Map("basicMap");
  var mapnik = new OpenLayers.Layer.OSM();
  var fromProjection = new OpenLayers.Projection("EPSG:4326"); // Transform from WGS 1984
  var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
  var position = new OpenLayers.LonLat(15.41, 60.52).transform(
    fromProjection,
    toProjection
  );
  var zoom = 15;
  map.addLayer(mapnik);
  map.setCenter(position, zoom);
}
