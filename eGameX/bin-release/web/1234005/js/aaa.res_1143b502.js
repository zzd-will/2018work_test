exports.typeSelector = function (path) {
        var ext = path.substr(path.lastIndexOf(".") + 1);
        var typeMap = {
            "jpg": "image",
            "png": "image",
            "webp": "image",
            "json": "json",
            "fnt": "font",
            "pvr": "pvr",
            "mp3": "sound",
            "zip": "zip",
            "sheet": "sheet",
            "exml": "text"
        };
        var type = typeMap[ext];
        if (type == "json") {
            if (path.indexOf("sheet") >= 0) {
                type = "sheet";
            }
            else if (path.indexOf("title") == 0) {
                type = "movieclip";
            }
            else if (path.indexOf("actor") == 0) {
                type = "movieclip";
            }
            else if (path.indexOf("skill") == 0) {
                type = "movieclip";
            }
            else if (path.indexOf("mc") == 9) {
                type = "movieclip";
            }
        }
        return type;
    };
exports.resourceRoot = "resource";
exports.alias = {};
exports.groups = {
	"preload": [
		"config.zip",
		"default.thm.json",
		"bg.jpg",
		"egret_icon.png",
		"description.json",
		"st_2_1.json",
		"st_2_1.png",
		"button_down.png",
		"button_up.png",
		"checkbox_select_disabled.png",
		"checkbox_select_down.png",
		"checkbox_select_up.png",
		"checkbox_unselect.png",
		"selected.png",
		"border.png",
		"header.png",
		"thumb_pb.png",
		"track_pb.png",
		"radiobutton_select_disabled.png",
		"radiobutton_select_down.png",
		"radiobutton_select_up.png",
		"radiobutton_unselect.png",
		"roundthumb.png",
		"track_sb.png",
		"handle.png",
		"off.png",
		"on.png",
		"thumb.png",
		"track.png",
		"tracklight.png",
		"o.png",
		"outside11_01.jpg",
		"outside11_02.jpg",
		"outside11_03.jpg",
		"outside11_04.jpg",
		"outside11_11.jpg"
	]
};
exports.resources = {
	"config.zip": {
		"url": "config_29ec6f5e.zip",
		"type": "zip",
		"name": "config.zip"
	},
	"default.thm.json": {
		"url": "default.thm_af4fb398.json",
		"type": "json",
		"name": "default.thm.json"
	},
	"bg.jpg": {
		"url": "assets/bg_18f18a5d.jpg",
		"type": "image",
		"name": "bg.jpg"
	},
	"egret_icon.png": {
		"url": "assets/egret_icon_fe420392.png",
		"type": "image",
		"name": "egret_icon.png"
	},
	"description.json": {
		"url": "config/description_db04ce98.json",
		"type": "json",
		"name": "description.json"
	},
	"st_2_1.json": {
		"url": "mc/st_2_1_12c0807d.json",
		"type": "movieclip",
		"name": "st_2_1.json"
	},
	"st_2_1.png": {
		"url": "mc/st_2_1_1e450be5.png",
		"type": "image",
		"name": "st_2_1.png"
	},
	"button_down.png": {
		"url": "assets/Button/button_down_aa0bad40.png",
		"type": "image",
		"name": "button_down.png"
	},
	"button_up.png": {
		"url": "assets/Button/button_up_66c34920.png",
		"type": "image",
		"name": "button_up.png"
	},
	"checkbox_select_disabled.png": {
		"url": "assets/CheckBox/checkbox_select_disabled_689921c8.png",
		"type": "image",
		"name": "checkbox_select_disabled.png"
	},
	"checkbox_select_down.png": {
		"url": "assets/CheckBox/checkbox_select_down_3ce277ad.png",
		"type": "image",
		"name": "checkbox_select_down.png"
	},
	"checkbox_select_up.png": {
		"url": "assets/CheckBox/checkbox_select_up_f83ba2f6.png",
		"type": "image",
		"name": "checkbox_select_up.png"
	},
	"checkbox_unselect.png": {
		"url": "assets/CheckBox/checkbox_unselect_2bc5e460.png",
		"type": "image",
		"name": "checkbox_unselect.png"
	},
	"selected.png": {
		"url": "assets/ItemRenderer/selected_7db3fa94.png",
		"type": "image",
		"name": "selected.png"
	},
	"border.png": {
		"url": "assets/Panel/border_c1365a48.png",
		"type": "image",
		"name": "border.png"
	},
	"header.png": {
		"url": "assets/Panel/header_ee4b876f.png",
		"type": "image",
		"name": "header.png"
	},
	"thumb_pb.png": {
		"url": "assets/ProgressBar/thumb_pb_9a65835.png",
		"type": "image",
		"name": "thumb_pb.png"
	},
	"track_pb.png": {
		"url": "assets/ProgressBar/track_pb_16ecd68e.png",
		"type": "image",
		"name": "track_pb.png"
	},
	"radiobutton_select_disabled.png": {
		"url": "assets/RadioButton/radiobutton_select_disabled_cac29c4f.png",
		"type": "image",
		"name": "radiobutton_select_disabled.png"
	},
	"radiobutton_select_down.png": {
		"url": "assets/RadioButton/radiobutton_select_down_cac29c4f.png",
		"type": "image",
		"name": "radiobutton_select_down.png"
	},
	"radiobutton_select_up.png": {
		"url": "assets/RadioButton/radiobutton_select_up_ade68d7b.png",
		"type": "image",
		"name": "radiobutton_select_up.png"
	},
	"radiobutton_unselect.png": {
		"url": "assets/RadioButton/radiobutton_unselect_266aaa05.png",
		"type": "image",
		"name": "radiobutton_unselect.png"
	},
	"roundthumb.png": {
		"url": "assets/ScrollBar/roundthumb_3d29393.png",
		"type": "image",
		"name": "roundthumb.png"
	},
	"track_sb.png": {
		"url": "assets/ScrollBar/track_sb_9e16c2e5.png",
		"type": "image",
		"name": "track_sb.png"
	},
	"handle.png": {
		"url": "assets/ToggleSwitch/handle_15a6e8d8.png",
		"type": "image",
		"name": "handle.png"
	},
	"off.png": {
		"url": "assets/ToggleSwitch/off_6a9ebba9.png",
		"type": "image",
		"name": "off.png"
	},
	"on.png": {
		"url": "assets/ToggleSwitch/on_86511d9c.png",
		"type": "image",
		"name": "on.png"
	},
	"thumb.png": {
		"url": "assets/Slider/thumb_11c22217.png",
		"type": "image",
		"name": "thumb.png"
	},
	"track.png": {
		"url": "assets/Slider/track_9e16c2e5.png",
		"type": "image",
		"name": "track.png"
	},
	"tracklight.png": {
		"url": "assets/Slider/tracklight_3d29393.png",
		"type": "image",
		"name": "tracklight.png"
	},
	"o.png": {
		"url": "outsidemap/mapimg/o_7e122373.png",
		"type": "image",
		"name": "o.png"
	},
	"outside11_01.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_01_25d5dbe5.jpg",
		"type": "image",
		"name": "outside11_01.jpg"
	},
	"outside11_02.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_02_a984971c.jpg",
		"type": "image",
		"name": "outside11_02.jpg"
	},
	"outside11_03.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_03_e67e5000.jpg",
		"type": "image",
		"name": "outside11_03.jpg"
	},
	"outside11_04.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_04_108be6f1.jpg",
		"type": "image",
		"name": "outside11_04.jpg"
	},
	"outside11_11.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_11_11fd2ef4.jpg",
		"type": "image",
		"name": "outside11_11.jpg"
	}
};
            