// class MovieClipDataLoader {
//     public url;
//     public handle;
//     public dispatcher: egret.EventDispatcher;
//     public movieClipData;
//     public get(key: string, callback: Function) {
//         GameRes.getRes(key).then(function (rs:egret.MovieClipDataFactory) {
//             if (rs) {
//                 this.url = key;
//                 callback(rs);
//             } else {
//                 this.fetch(key, callback)
//             }
//         });
//     }
//     public fetch(key: string, callback: Function) {
//             this.url = key
//             this.handle = callback;
//             GameRes.getResAsync(key,this.onEvent,this)
//     }
//     public onEvent(e) {
//         this.handle(e.data),
//         this.handle = null
//     }
//     public release() {
//         null != this.movieClipData && (this.movieClipData = null),
//             this.handle = null,
//             this.url = null
//     }
// } 
//# sourceMappingURL=MovieClipDataLoader.js.map