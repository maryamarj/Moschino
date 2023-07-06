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
            "hfov": 700,
            "pitch": 8,
            "yaw": -113, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Entrance",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": -163,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowSX",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -14,
                    "yaw": -51,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowDX",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -8,
                    "yaw": -37,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowExtraDX",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -3,
                    "yaw": -113,
                    "type": "scene",
                    "text": "Enter the shop",
                    "sceneId": "Space1",
                },
            ]
        },
        "ShopWindowSX": {
            "title": "Shop window",
            "cssClass": "title-background-color",
            "hfov": 100,
            "pitch": 8,
            "yaw": -30, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/ShopWindowSX",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": 15,
                    "type": "scene",
                    "text": "Go back to the first view",
                    "sceneId": "Entrance",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -10,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowDX",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -7,
                    "yaw": 39,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowExtraDX",
                },
            ]
        },
        "ShopWindowDX": {
            "title": "Shop window",
            "cssClass": "title-background-color",
            "hfov": 100,
            "pitch": 10,
            "yaw": -93, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/ShopWindowDX",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -18,
                    "yaw": -150,
                    "type": "scene",
                    "text": "Go back to the first view",
                    "sceneId": "Entrance",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -12,
                    "yaw": -35,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowExtraDX",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -9,
                    "yaw": -157,
                    "type": "scene",
                    "text": "Go back to the shop window",
                    "sceneId": "ShopWindowSX",
                },
            ]
        },
        "ShopWindowExtraDX": {
            "title": "Shop window",
            "cssClass": "title-background-color",
            "hfov": 100,
            "pitch": 8,
            "yaw": -100, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/ShopWindowExtraDX",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -11,
                    "yaw": -175,
                    "type": "scene",
                    "text": "Go back to the first view",
                    "sceneId": "Entrance",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -12,
                    "yaw": -160,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowDX",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -8,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowSX",
                },
            ]
        },
        "Space1": {
            "title": "Space1",
            "cssClass": "title-background-color",
            "hfov": 500,
            "pitch": 0,
            "yaw": 100, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space1",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": -55,
                    "type": "scene",
                    "text": "Go outside",
                    "sceneId": "Entrance",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": 73,
                    "type": "scene",
                    "text": "Go to Space2",
                    "sceneId": "Space2", 
                }
            ]
        },
        "Space2": {
            "title": "Space2",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 160, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space2",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -32,
                    "yaw": -9,
                    "type": "scene",
                    "text": "Go back to Space1",
                    "sceneId": "Space1",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -10,
                    "yaw": 3,
                    "type": "scene",
                    "text": "Go outside",
                    "sceneId": "Entrance",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -30,
                    "yaw": -160,
                    "type": "scene",
                    "text": "Go to Space3",
                    "sceneId": "Space3",
                },
            ]
        },
        "Space3": {
            "title": "Space3",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -100, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space3",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": -173,
                    "type": "scene",
                    "text": "Go back to Space2",
                    "sceneId": "Space2",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -18,
                    "yaw": 147,
                    "type": "scene",
                    "text": "Go back to Space1",
                    "sceneId": "Space1",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -5,
                    "yaw": 155,
                    "type": "scene",
                    "text": "Go outside",
                    "sceneId": "Entrance",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": -25,
                    "type": "scene",
                    "text": "Go to Space4",
                    "sceneId": "Space4",
                }
            ]
        },
        "Space4": {
            "title": "Space4",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -80, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space4",
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


