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
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 10,
                    "yaw": -113,
                    "type": "scene",
                    "text": "Enter the shop",
                    "sceneId": "Space2up",
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
            "title": "scene 1",
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
                    "text": "Walk",
                    "sceneId": "Space2", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": -155,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space8",
                }
            ]
        },
        "Space2": {
            "title": "scene 2",
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
                    "text": "Walk",
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
                    "text": "Walk",
                    "sceneId": "Space3",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -5,
                    "yaw": 147,
                    "type": "scene",
                    "text": "BAGS SS23",
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 19,
                    "yaw": 170,
                    "type": "scene",
                    "text": "SHOES SS23",
                    // "sceneId": "Space3",
                },
            ]
        },
        "Space3": {
            "title": "scene 3",
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
                    "text": "Walk",
                    "sceneId": "Space2",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -18,
                    "yaw": 147,
                    "type": "scene",
                    "text": "Walk",
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
                    "text": "Walk",
                    "sceneId": "Space4",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": -98,
                    "type": "scene",
                    "text": "BAGS SS23",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 10,
                    "yaw": -147,
                    "type": "scene",
                    "text": "SHOES SS23",
                }
            ]
        },
        "Space4": {
            "title": "scene 4",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -80, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space4",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": -145,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space3", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": 50,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space5", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -10,
                    "yaw": 115,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space10", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -5,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Go upstairs",
                    "sceneId": "Space1up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 0,
                    "yaw": -60,
                    "type": "scene",
                    "text": "BAGS SS23",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 15,
                    "yaw": -92,
                    "type": "scene",
                    "text": "SHOES SS23",
                }
            ]
        },
        "Space5": {
            "title": "scene 5",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 110, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space5",
            "hotSpots":  [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -18,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space4", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -13,
                    "yaw": 155,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space6",   
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 8,
                    "yaw": 90,
                    "type": "scene",
                    "text": "SUNGLASSES SS23",
                }
            ]
        },
        "Space6": {
            "title": "scene 6",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 118, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space6",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -16,
                    "yaw": 28,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space5",   
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": -165,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space7",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 15,
                    "yaw": 113,
                    "type": "scene",
                    "text": "ACCESSORIES SS23",
                }
            ]
        },
        "Space7": {
            "title": "scene 7",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 110, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space7", 
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": 26,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space6",  
                },
                // {
                //     "cssClass": "custom-hotspot-component",
                //     "pitch": -20,
                //     "yaw": 170,
                //     "type": "scene",
                //     "text": "Walk",
                //     "sceneId": "Space1",
                // },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -18,
                    "yaw": 150,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space8",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": 103,
                    "type": "scene",
                    "text": "BELTS SS23"
                }
            ]
        },
        "Space8": {
            "title": "scene 8",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -170, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space8", 
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": 33,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space1",  
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": -160,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space9",
                }
            ] 
        },
        "Space9": {
            "title": "scene 9",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -20, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space9", 
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": -160,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space8",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": -15,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space10",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 0,
                    "yaw": 18,
                    "type": "scene",
                    "text": "SS23 WOMAN COLLECTION",
                }
            ]
        },
        "Space10": {
            "title": "scene 10",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 50, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space10" ,
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": 160,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space9",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": -33,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space11",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -10,
                    "yaw": -110,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space4",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": 63,
                    "type": "scene",
                    "text": "SS23 WOMAN COLLECTION"
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 17,
                    "yaw": 53,
                    "type": "scene",
                    "text": "BAGS SS23"
                }
            ]
        },
        "Space11": {
            "title": "scene 11",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 20, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space11" ,
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": 160,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space10",  
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space13", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space12", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 10,
                    "yaw": 50,
                    "type": "scene",
                    "text": "SS23 WOMAN COLLECTION"
                }
            ]
        },
        "Space13": {
            "title": "scene 13",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 55, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space13" ,
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -28,
                    "yaw": -80,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space11",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -23,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space12", 
                }
            ]
        },
        "Space12": {
            "title": "scene 12",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -10, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space12",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -10,
                    "yaw": 155,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space11",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 13,
                    "yaw": -40,
                    "type": "scene",
                    "text": "SHOES SS23"
                }
            ]
        },
        "Space1up": {
            "title": "scene 1",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 20, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space1up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -40,
                    "yaw": -120,
                    "type": "scene",
                    "text": "Go downstairs",
                    "sceneId": "Space4",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": 55,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space2up",  
                }
            ]
        },
        "Space2up": {
            "title": "scene 2",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -175, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space2up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -23,
                    "yaw": -100,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space1up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": 110,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space3up", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 19,
                    "yaw": -140,
                    "type": "scene",
                    "text": "SHOES SS23" 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 16,
                    "yaw": 72,
                    "type": "scene",
                    "text": "BELTS SS23" 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 8,
                    "yaw": -62,
                    "type": "scene",
                    "text": "ACCESSORIES SS23" 
                }
            ]
        },
        "Space3up": {
            "title": "scene 3",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 165, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space3up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -19,
                    "yaw": -70,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space2up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -35,
                    "yaw": 60,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space4up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -5,
                    "yaw": 166,
                    "type": "scene",
                    "text": "SHOES SS23" 
                }
            ]
        },
        "Space4up": {
            "title": "scene 4",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 110, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space4up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -25,
                    "yaw": -115,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space3up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -30,
                    "yaw": 80,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space5up", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -27,
                    "yaw": -23,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space7up", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 17,
                    "yaw": 150,
                    "type": "scene",
                    "text": "MAN COLLECTION SS23" 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -5,
                    "yaw": 94,
                    "type": "scene",
                    "text": "KIDS COLLECTION SS23" 
                }
            ]
        },
        "Space5up": {
            "title": "scene 5",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": -10, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space5up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -35,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space4up", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -30,
                    "yaw": -15,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space6up"
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 30,
                    "yaw": -90,
                    "type": "scene",
                    "text": "KIDS COLLECTION SS23" 
                }
            ]
        },
        "Space6up": {
            "title": "scene 6",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 180, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space6up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -30,
                    "yaw": -60,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space5up", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -2,
                    "yaw": 165,
                    "type": "scene",
                    "text": "BABY COLLECTION SS23" 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 22,
                    "yaw": 19,
                    "type": "scene",
                    "text": "TEENS COLLECTION SS23" 
                }
            ]
        },
        "Space7up": {
            "title": "scene 7",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 90, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space7up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": 60,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space8up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": -80,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space4up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 15,
                    "yaw": 130,
                    "type": "scene",
                    "text": "MAN COLLECTION SS23" 
                }
            ]
        },
        "Space8up": {
            "title": "scene 8",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 110, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space8up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": -1,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space1up", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -17,
                    "yaw": 60,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space9up", 
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": -115,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space7up",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 15,
                    "yaw": 130,
                    "type": "scene",
                    "text": "MAN COLLECTION SS23" 
                }
            ]
        },
        "Space9up": {
            "title": "scene 9",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 150, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space9up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -15,
                    "yaw": 125,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space8up",  
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": 8,
                    "yaw": 140,
                    "type": "scene",
                    "text": "MAN COLLECTION SS23" 
                }
            ]
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


