
namespace UI {

   export class LoadingUICT extends BaseUI {
        public constructor() {
            super();
            //使用
            this.skinName = RES.getRes("Loading.exml")

            this.img = "loading_bg_under.jpg";
            //在哪个层上
            this.m_layerID = LayerManager.EUI_LODING_LAYER
            this.verticalCenter = 0
            this.horizontalCenter = 0;
            this.m_effectType = 4;
            this.left = 0,
                this.right = 0,
                this.top = 0,
                this.bottom = 0;
        }
        public img;
        public maximum;
        public value;
        public percent;

        public refresh: eui.Label;
        public progressGroup: eui.Group;


        public childrenCreated() {
            super.childrenCreated();
            this.refresh.textFlow = [{
                text: this.refresh.text,
                style: {
                    underline: true
                }
            }],
                this.refresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefresh, this)
        }
        public onRefresh() {
            // LayerManager.inst.hideUI("LoadingUICT");
            window.location.reload()
        }
        public onProgress(e, t) {
            this.maximum = t,
                this.value = e,
                this.percent = this.progressGroup.width * this.value / this.maximum
        }
    }
}