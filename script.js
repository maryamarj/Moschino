let api_endpoint = "http://127.0.0.1:50001/get_image/"
let room_name = "room"

viewer = pannellum.viewer('panorama', {
    // "type": "equirectangular",
    // "panorama": api_endpoint + "/" + room_name,
    "showZoomCtrl":false,
    "showFullscreenCtrl": false,
    "autoLoad": true,
    "default": {
        "firstScene": "Entrance",
        "sceneFadeDuration": 1000
    },
    "scenes": {
        "Entrance": {
            "title": "Entrance",
            "cssClass": "title-background-color",
            "hfov": 500,
            "pitch": 0,
            "yaw": 110,
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Entrance"
        }
    }
}
)    

document.getElementById('pan-up').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function(e) {
    viewer.toggleFullscreen();
});


