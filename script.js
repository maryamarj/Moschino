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
                    "cssClass": "hotspot-door",
                    "pitch": -3,
                    "yaw": -113,
                    "type": "scene",
                    "text": "Enter the shop",
                    "sceneId": "Space1",
                },
                {
                    "cssClass": "hotspot-bagsW",
                    "pitch": -7,
                    "yaw": -160,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                },
                // {
                //     "cssClass": "custom-hotspot-component",
                //     "pitch": 10,
                //     "yaw": -113,
                //     "type": "scene",
                //     "text": "Shortcut",
                //     "sceneId": "Space9up",
                // },
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
                // {
                //     "cssClass": "custom-hotspot-component",
                //     "pitch": -25,
                //     "yaw": 15,
                //     "type": "scene",
                //     "text": "Go back to the first view",
                //     "sceneId": "Entrance",
                // },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -13,
                    "yaw": 33,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowDX",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -9,
                    "yaw": 41,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowExtraDX",
                },
                {
                    "cssClass": "hotspot-bagsW",
                    "pitch": -9,
                    "yaw": -39,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                    
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "hotspot-door",
                    "pitch": 0,
                    "yaw": 2,
                    "type": "scene",
                    "text": "Enter the shop",
                    "sceneId": "Space1",
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
                // {
                //     "cssClass": "custom-hotspot-component",
                //     "pitch": -18,
                //     "yaw": -150,
                //     "type": "scene",
                //     "text": "Go back to the first view",
                //     "sceneId": "Entrance",
                // },
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
                {
                    "cssClass": "hotspot-door",
                    "pitch": -2,
                    "yaw": -143,
                    "type": "scene",
                    "text": "Enter the shop",
                    "sceneId": "Space1",
                },
                {
                    "cssClass": "hotspot-man",
                    "pitch": 8,
                    "yaw": -85,
                    "type": "scene",
                    "text": "SS23 MAN COLLECTION",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/cappotti-outerwear.html"
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
                // {
                //     "cssClass": "custom-hotspot-component",
                //     "pitch": -11,
                //     "yaw": -175,
                //     "type": "scene",
                //     "text": "Go back to the first view",
                //     "sceneId": "Entrance",
                // },
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
                    "pitch": -6,
                    "yaw": -179,
                    "type": "scene",
                    "text": "Get closer to the shop window",
                    "sceneId": "ShopWindowSX",
                },
                {
                    "cssClass": "hotspot-door",
                    "pitch": 1,
                    "yaw": -173,
                    "type": "scene",
                    "text": "Enter the shop",
                    "sceneId": "Space1",
                },
                {
                    "cssClass": "hotspot-woman",
                    "pitch": 4,
                    "yaw": -105,
                    "type": "scene",
                    "text": "SS23 WOMAN COLLECTION",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/completi.html"
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
                },
                {
                    "cssClass": "hotspot-woman",
                    "pitch": 4,
                    "yaw": 176,
                    "type": "scene",
                    "text": "SS23 WOMAN COLLECTION",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/completi.html"
                },
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
                    "cssClass": "hotspot-bagsW",
                    "pitch": -5,
                    "yaw": 147,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                    
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "hotspot-shoesW",
                    "pitch": 19,
                    "yaw": 170,
                    "type": "scene",
                    "text": "SHOES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/scarpe.html"
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "hotspot-belts",
                    "pitch": 10,
                    "yaw": -89,
                    "type": "scene",
                    "text": "BELTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/cinture.html"
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -18,
                    "yaw": -47,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space8",
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
                    "pitch": -17,
                    "yaw": -27,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space4",
                },
                {
                    "cssClass": "hotspot-bagsW",
                    "pitch": -20,
                    "yaw": -98,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                },
                {
                    "cssClass": "hotspot-shoesW",
                    "pitch": 10,
                    "yaw": -147,
                    "type": "scene",
                    "text": "SHOES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/scarpe.html"
                },
                {
                    "cssClass": "hotspot-umbrella",
                    "pitch": 7,
                    "yaw": 36,
                    "type": "scene",
                    "text": "ACCESSORIES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/ombrelli.html"
                },
                {
                    "cssClass": "hotspot-belts",
                    "pitch": 11,
                    "yaw": 110,
                    "type": "scene",
                    "text": "BELTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/cinture.html"
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
                    "cssClass": "hotspot-up",
                    "pitch": -5,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Go upstairs",
                    "sceneId": "Space1up",
                },
                {
                    "cssClass": "hotspot-bagsW",
                    "pitch": 0,
                    "yaw": -60,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                },
                {
                    "cssClass": "hotspot-shoesW",
                    "pitch": 15,
                    "yaw": -92,
                    "type": "scene",
                    "text": "SHOES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/scarpe.html"
                },
                {
                    "cssClass": "hotspot-umbrella",
                    "pitch": 8,
                    "yaw": 154,
                    "type": "scene",
                    "text": "ACCESSORIES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/ombrelli.html"
                },
                {
                    "cssClass": "hotspot-sunglasses",
                    "pitch": 7,
                    "yaw": 60,
                    "type": "scene",
                    "text": "SUNGLASSES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/occhiali-da-sole.html"
                },
                {
                    "cssClass": "hotspot-fragrance-man",
                    "pitch": 13,
                    "yaw": 92,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HIM SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/uomo/accessori/profumi-bodycare.html"
                },
                {
                    "cssClass": "hotspot-fragrance-woman",
                    "pitch": -12,
                    "yaw": 91,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HER SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/profumi-bodycare.html"
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
                    "cssClass": "hotspot-sunglasses",
                    "pitch": 18,
                    "yaw": 90,
                    "type": "scene",
                    "text": "SUNGLASSES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/occhiali-da-sole.html"
                },
                {
                    "cssClass": "hotspot-fragrance-man",
                    "pitch": 13,
                    "yaw": 133,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HIM SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/uomo/accessori/profumi-bodycare.html"
                },
                {
                    "cssClass": "hotspot-fragrance-woman",
                    "pitch": -11,
                    "yaw": 134,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HER SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/profumi-bodycare.html"
                },
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
                    "cssClass": "hotspot-umbrella",
                    "pitch": 15,
                    "yaw": 113,
                    "type": "scene",
                    "text": "ACCESSORIES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/ombrelli.html"
                },
                {
                    "cssClass": "hotspot-belts",
                    "pitch": 9,
                    "yaw": 176,
                    "type": "scene",
                    "text": "BELTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/cinture.html"
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "hotspot-fragrance-man",
                    "pitch": 11,
                    "yaw": 53,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HIM SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/uomo/accessori/profumi-bodycare.html"
                },
                {
                    "cssClass": "hotspot-fragrance-woman",
                    "pitch": -11,
                    "yaw": 53,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HER SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/profumi-bodycare.html"
                },
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
                    "cssClass": "hotspot-belts",
                    "pitch": 17,
                    "yaw": 103,
                    "type": "scene",
                    "text": "BELTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/cinture.html"
                },
                {
                    "cssClass": "hotspot-umbrella",
                    "pitch": 6,
                    "yaw": 40,
                    "type": "scene",
                    "text": "ACCESSORIES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/ombrelli.html"
                },
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
                    "cssClass": "hotspot-woman",
                    "pitch": 12,
                    "yaw": 28,
                    "type": "scene",
                    "text": "SS23 WOMAN COLLECTION",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/completi.html"
                },
                {
                    "cssClass": "hotspot-outerwear",
                    "pitch": 10,
                    "yaw": -68,
                    "type": "scene",
                    "text": "SS23 WOMAN OUTERWEAR",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/cappotti-outerwear.html"
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
                    "cssClass": "hotspot-dress",
                    "pitch": -20,
                    "yaw": 63,
                    "type": "scene",
                    "text": "DRESSES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/abiti.html"
                },
                {
                    "cssClass": "hotspot-bagsW",
                    "pitch": 17,
                    "yaw": 53,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                },
                {
                    "cssClass": "hotspot-coords",
                    "pitch": 8,
                    "yaw": 0,
                    "type": "scene",
                    "text": "CO-ORDS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/completi.html"
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
                    "sceneId": "Space4copy",  //Space10
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -20,
                    "yaw": 8,
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
                    "cssClass": "hotspot-tshirt",
                    "pitch": 10,
                    "yaw": 35,
                    "type": "scene",
                    "text": "SHIRTS & TOPS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/camicie-top.html"
                },
                {
                    "cssClass": "hotspot-dress",
                    "pitch": 0,
                    "yaw": -8,
                    "type": "scene",
                    "text": "DRESSES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/abiti.html"
                },
                {
                    "cssClass": "hotspot-right",
                    "pitch": 0,
                    "yaw": -170,
                    "type": "scene",
                    "text": "Move to the first room",
                    "sceneId": "Space4copy",  
                },
            ]
        },
        "Space4copy": {
            "title": "scene 4.1",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 40, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space4copy" ,
            "hotSpots": [
                {
                    "cssClass": "hotspot-up",
                    "pitch": 10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Go upstairs",
                    "sceneId": "Space1up",  
                },
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -21,
                    "yaw": 115,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space11",  
                },
                {
                    "cssClass": "hotspot-sunglasses",
                    "pitch": 7,
                    "yaw": 59,
                    "type": "scene",
                    "text": "SUNGLASSES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/occhiali-da-sole.html"
                },
                {
                    "cssClass": "hotspot-fragrance-man",
                    "pitch": 14,
                    "yaw": 91,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HIM SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/uomo/accessori/profumi-bodycare.html"
                },
                {
                    "cssClass": "hotspot-fragrance-woman",
                    "pitch": -13,
                    "yaw": 91,
                    "type": "scene",
                    "text": "FRAGRANCES FOR HER SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/profumi-bodycare.html"
                },
                {
                    "cssClass": "hotspot-umbrella",
                    "pitch": 8,
                    "yaw": 154,
                    "type": "scene",
                    "text": "ACCESSORIES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/donna/accessori/ombrelli.html"
                },
                {
                    "cssClass": "hotspot-bagsW",
                    "pitch": -3,
                    "yaw": -71,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                },
                {
                    "cssClass": "hotspot-shoesW",
                    "pitch": 15,
                    "yaw": -74,
                    "type": "scene",
                    "text": "SHOES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/scarpe.html"
                },
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
                    "pitch": -31,
                    "yaw": -75,
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
                },
                {
                    "cssClass": "hotspot-dress",
                    "pitch": 0,
                    "yaw": 53,
                    "type": "scene",
                    "text": "DRESSES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/abiti.html"
                },
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
                    "pitch": -15,
                    "yaw": 155,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space11",
                },
                {
                    "cssClass": "hotspot-shoesW",
                    "pitch": 13,
                    "yaw": -40,
                    "type": "scene",
                    "text": "SHOES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/scarpe.html"
                },
                {
                    "cssClass": "hotspot-bagsW",
                    "pitch": 13,
                    "yaw": 19,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/donna/borse.html"
                    
                    // "sceneId": "Space3",
                },
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
                    "cssClass": "hotspot-shoesM",
                    "pitch": 19,
                    "yaw": -140,
                    "type": "scene",
                    "text": "SHOES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/scarpe.html"
                },
                {
                    "cssClass": "hotspot-belts",
                    "pitch": 16,
                    "yaw": 72,
                    "type": "scene",
                    "text": "BELTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/uomo/accessori/cinture.html"
                },
                {
                    "cssClass": "hotspot-tie",
                    "pitch": 8,
                    "yaw": -62,
                    "type": "scene",
                    "text": "ACCESSORIES SS23", 
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/accessori.html"
                },
                {
                    "cssClass": "hotspot-bagsM",
                    "pitch": -4,
                    "yaw": -158,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/borse.html"
                    
                    // "sceneId": "Space3",
                },
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
                    "pitch": -30,
                    "yaw": 55,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space4up",
                },
                {
                    "cssClass": "hotspot-shoesM",
                    "pitch": -5,
                    "yaw": 166,
                    "type": "scene",
                    "text": "SHOES SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/scarpe.html"
                },
                {
                    "cssClass": "hotspot-bagsM",
                    "pitch": 18,
                    "yaw": -170,
                    "type": "scene",
                    "text": "BAGS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/borse.html"
                    
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "hotspot-blazer",
                    "pitch": 10,
                    "yaw": 80,
                    "type": "scene",
                    "text": "JACKETS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/giacche.html"
                    
                    // "sceneId": "Space3",
                },
                {
                    "cssClass": "hotspot-teenager",
                    "pitch": -2,
                    "yaw": 59,
                    "type": "scene",
                    "text": "TEENS COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/teen/girl.html" 
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
                    "cssClass": "hotspot-blazer",
                    "pitch": 17,
                    "yaw": 150,
                    "type": "scene",
                    "text": "JACKETS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/giacche.html" 
                },
                {
                    "cssClass": "hotspot-teenager",
                    "pitch": -5,
                    "yaw": 94,
                    "type": "scene",
                    "text": "TEENS COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/teen/girl.html" 
                },
                {
                    "cssClass": "hotspot-blazer",
                    "pitch": 10,
                    "yaw": -69,
                    "type": "scene",
                    "text": "JACKETS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/giacche.html" 
                },
                {
                    "cssClass": "hotspot-shirt",
                    "pitch": 8,
                    "yaw": -17,
                    "type": "scene",
                    "text": "SHIRTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/camicie.html" 
                },
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
                    "cssClass": "hotspot-kids",
                    "pitch": 30,
                    "yaw": -90,
                    "type": "scene",
                    "text": "KIDS COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/kids-4-8-anni/bambina.html" 
                },
                {
                    "cssClass": "hotspot-kids",
                    "pitch": -1,
                    "yaw": 33,
                    "type": "scene",
                    "text": "KIDS COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/kids-4-8-anni/bambina.html" 
                },
                {
                    "cssClass": "hotspot-teenager",
                    "pitch": -3,
                    "yaw": 152,
                    "type": "scene",
                    "text": "TEENS COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/child/teens-10-14-years-old/boy.html" 
                },
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
                    "cssClass": "hotspot-baby",
                    "pitch": -2,
                    "yaw": 165,
                    "type": "scene",
                    "text": "BABY COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/bambino/baby-0-3-anni/bambino.html" 
                },
                {
                    "cssClass": "hotspot-teenager",
                    "pitch": 22,
                    "yaw": 19,
                    "type": "scene",
                    "text": "TEENS COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/child/teens-10-14-years-old/boy.html" 
                },
                {
                    "cssClass": "hotspot-kids",
                    "pitch": -2,
                    "yaw": -116,
                    "type": "scene",
                    "text": "KIDS COLLECTION SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/kids-4-8-anni/bambina.html" 
                },
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
                    "cssClass": "hotspot-sweatshirt",
                    "pitch": 15,
                    "yaw": 130,
                    "type": "scene",
                    "text": "SWEATSHIRTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/felpe.html" 
                },
                {
                    "cssClass": "hotspot-shirt",
                    "pitch": 10,
                    "yaw": 39,
                    "type": "scene",
                    "text": "SHIRTS SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/camicie.html" 
                }
            ]
        },
        "Space8up": {
            "title": "scene 8",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 75, //(da dx a sx)
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
                    "cssClass": "hotspot-blazer",
                    "pitch": 15,
                    "yaw": 120,
                    "type": "scene",
                    "text": "JACKET SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/giacche.html" 
                },
                {
                    "cssClass": "hotspot-tie",
                    "pitch": 6,
                    "yaw": 25,
                    "type": "scene",
                    "text": "ACCESSORIES SS23", 
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/accessori.html"
                },
            ]
        },
        "Space9up": {
            "title": "scene 9",
            "cssClass": "title-background-color",
            "hfov": 300,
            "pitch": -5,
            "yaw": 135, //(da dx a sx)
            "type": "equirectangular",
            // "panorama": api_endpoint + "/" + room_name ,
            "panorama": api_endpoint + "/Space9up",
            "hotSpots": [
                {
                    "cssClass": "custom-hotspot-component",
                    "pitch": -23,
                    "yaw": 127,
                    "type": "scene",
                    "text": "Walk",
                    "sceneId": "Space8up",  
                },
                {
                    "cssClass": "hotspot-outerwear",
                    "pitch": 8,
                    "yaw": 140,
                    "type": "scene",
                    "text": "COATS & OUTERWEAR SS23",
                    "URL": "https://www.moschino.com/it_it/moschino/sale/uomo/cappotti-outerwear.html" 
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


