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
		"ButtonSkin.exml",
		"CheckBoxSkin.exml",
		"HScrollBarSkin.exml",
		"HSliderSkin.exml",
		"ItemRendererSkin.exml",
		"PanelSkin.exml",
		"ProgressBarSkin.exml",
		"RadioButtonSkin.exml",
		"ScrollerSkin.exml",
		"TextInputSkin.exml",
		"ToggleSwitchSkin.exml",
		"VScrollBarSkin.exml",
		"VSliderSkin.exml",
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
		"roundthumb.png",
		"track_sb.png",
		"radiobutton_select_disabled.png",
		"radiobutton_select_down.png",
		"radiobutton_select_up.png",
		"radiobutton_unselect.png",
		"thumb.png",
		"track.png",
		"tracklight.png",
		"handle.png",
		"off.png",
		"on.png",
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
		"url": "config.zip",
		"type": "zip",
		"name": "config.zip"
	},
	"default.thm.json": {
		"url": "default.thm.json",
		"type": "json",
		"name": "default.thm.json"
	},
	"bg.jpg": {
		"url": "assets/bg.jpg",
		"type": "image",
		"name": "bg.jpg"
	},
	"egret_icon.png": {
		"url": "assets/egret_icon.png",
		"type": "image",
		"name": "egret_icon.png"
	},
	"description.json": {
		"url": "config/description.json",
		"type": "json",
		"name": "description.json"
	},
	"ButtonSkin.exml": {
		"url": "eui_skins/ButtonSkin.exml",
		"type": "text",
		"name": "ButtonSkin.exml"
	},
	"CheckBoxSkin.exml": {
		"url": "eui_skins/CheckBoxSkin.exml",
		"type": "text",
		"name": "CheckBoxSkin.exml"
	},
	"HScrollBarSkin.exml": {
		"url": "eui_skins/HScrollBarSkin.exml",
		"type": "text",
		"name": "HScrollBarSkin.exml"
	},
	"HSliderSkin.exml": {
		"url": "eui_skins/HSliderSkin.exml",
		"type": "text",
		"name": "HSliderSkin.exml"
	},
	"ItemRendererSkin.exml": {
		"url": "eui_skins/ItemRendererSkin.exml",
		"type": "text",
		"name": "ItemRendererSkin.exml"
	},
	"PanelSkin.exml": {
		"url": "eui_skins/PanelSkin.exml",
		"type": "text",
		"name": "PanelSkin.exml"
	},
	"ProgressBarSkin.exml": {
		"url": "eui_skins/ProgressBarSkin.exml",
		"type": "text",
		"name": "ProgressBarSkin.exml"
	},
	"RadioButtonSkin.exml": {
		"url": "eui_skins/RadioButtonSkin.exml",
		"type": "text",
		"name": "RadioButtonSkin.exml"
	},
	"ScrollerSkin.exml": {
		"url": "eui_skins/ScrollerSkin.exml",
		"type": "text",
		"name": "ScrollerSkin.exml"
	},
	"TextInputSkin.exml": {
		"url": "eui_skins/TextInputSkin.exml",
		"type": "text",
		"name": "TextInputSkin.exml"
	},
	"ToggleSwitchSkin.exml": {
		"url": "eui_skins/ToggleSwitchSkin.exml",
		"type": "text",
		"name": "ToggleSwitchSkin.exml"
	},
	"VScrollBarSkin.exml": {
		"url": "eui_skins/VScrollBarSkin.exml",
		"type": "text",
		"name": "VScrollBarSkin.exml"
	},
	"VSliderSkin.exml": {
		"url": "eui_skins/VSliderSkin.exml",
		"type": "text",
		"name": "VSliderSkin.exml"
	},
	"st_2_1.json": {
		"url": "mc/st_2_1.json",
		"type": "movieclip",
		"name": "st_2_1.json"
	},
	"st_2_1.png": {
		"url": "mc/st_2_1.png",
		"type": "image",
		"name": "st_2_1.png"
	},
	"button_down.png": {
		"url": "assets/Button/button_down.png",
		"type": "image",
		"name": "button_down.png"
	},
	"button_up.png": {
		"url": "assets/Button/button_up.png",
		"type": "image",
		"name": "button_up.png"
	},
	"checkbox_select_disabled.png": {
		"url": "assets/CheckBox/checkbox_select_disabled.png",
		"type": "image",
		"name": "checkbox_select_disabled.png"
	},
	"checkbox_select_down.png": {
		"url": "assets/CheckBox/checkbox_select_down.png",
		"type": "image",
		"name": "checkbox_select_down.png"
	},
	"checkbox_select_up.png": {
		"url": "assets/CheckBox/checkbox_select_up.png",
		"type": "image",
		"name": "checkbox_select_up.png"
	},
	"checkbox_unselect.png": {
		"url": "assets/CheckBox/checkbox_unselect.png",
		"type": "image",
		"name": "checkbox_unselect.png"
	},
	"selected.png": {
		"url": "assets/ItemRenderer/selected.png",
		"type": "image",
		"name": "selected.png"
	},
	"border.png": {
		"url": "assets/Panel/border.png",
		"type": "image",
		"name": "border.png"
	},
	"header.png": {
		"url": "assets/Panel/header.png",
		"type": "image",
		"name": "header.png"
	},
	"thumb_pb.png": {
		"url": "assets/ProgressBar/thumb_pb.png",
		"type": "image",
		"name": "thumb_pb.png"
	},
	"track_pb.png": {
		"url": "assets/ProgressBar/track_pb.png",
		"type": "image",
		"name": "track_pb.png"
	},
	"roundthumb.png": {
		"url": "assets/ScrollBar/roundthumb.png",
		"type": "image",
		"name": "roundthumb.png"
	},
	"track_sb.png": {
		"url": "assets/ScrollBar/track_sb.png",
		"type": "image",
		"name": "track_sb.png"
	},
	"radiobutton_select_disabled.png": {
		"url": "assets/RadioButton/radiobutton_select_disabled.png",
		"type": "image",
		"name": "radiobutton_select_disabled.png"
	},
	"radiobutton_select_down.png": {
		"url": "assets/RadioButton/radiobutton_select_down.png",
		"type": "image",
		"name": "radiobutton_select_down.png"
	},
	"radiobutton_select_up.png": {
		"url": "assets/RadioButton/radiobutton_select_up.png",
		"type": "image",
		"name": "radiobutton_select_up.png"
	},
	"radiobutton_unselect.png": {
		"url": "assets/RadioButton/radiobutton_unselect.png",
		"type": "image",
		"name": "radiobutton_unselect.png"
	},
	"thumb.png": {
		"url": "assets/Slider/thumb.png",
		"type": "image",
		"name": "thumb.png"
	},
	"track.png": {
		"url": "assets/Slider/track.png",
		"type": "image",
		"name": "track.png"
	},
	"tracklight.png": {
		"url": "assets/Slider/tracklight.png",
		"type": "image",
		"name": "tracklight.png"
	},
	"handle.png": {
		"url": "assets/ToggleSwitch/handle.png",
		"type": "image",
		"name": "handle.png"
	},
	"off.png": {
		"url": "assets/ToggleSwitch/off.png",
		"type": "image",
		"name": "off.png"
	},
	"on.png": {
		"url": "assets/ToggleSwitch/on.png",
		"type": "image",
		"name": "on.png"
	},
	"o.png": {
		"url": "outsidemap/mapimg/o.png",
		"type": "image",
		"name": "o.png"
	},
	"outside11_01.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_01.jpg",
		"type": "image",
		"name": "outside11_01.jpg"
	},
	"outside11_02.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_02.jpg",
		"type": "image",
		"name": "outside11_02.jpg"
	},
	"outside11_03.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_03.jpg",
		"type": "image",
		"name": "outside11_03.jpg"
	},
	"outside11_04.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_04.jpg",
		"type": "image",
		"name": "outside11_04.jpg"
	},
	"outside11_11.jpg": {
		"url": "outsidemap/mapimg/outside11/images/outside11_11.jpg",
		"type": "image",
		"name": "outside11_11.jpg"
	}
};
            