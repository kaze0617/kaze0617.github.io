if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,s,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-484247ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2018/12/12/Hexo-Theme-Sakura/index.html",revision:"cf7d71e27526c2598f168b7630bda41f"},{url:"2020/03/26/suibi/index.html",revision:"6676d6268c93d4f7f118ccaf2b3c1665"},{url:"2020/03/29/黑苹果AMDcpu支持列表/index.html",revision:"5591f680f5701d0b94d35fdd938fa585"},{url:"2020/03/30/关于EFI中驱动的含义/index.html",revision:"e061d94d733f9bc31fac47e70d58bbe4"},{url:"2020/03/31/AppleALC-kext声卡驱动支持的硬件型号与ID速查列表/index.html",revision:"3bf23a52748f47987277057098dff8b3"},{url:"2020/03/31/黑苹果必备Intel核显platformID整理及smbios速查表/index.html",revision:"a51bd91b4727c81902273a15229fdde0"},{url:"2020/03/31/黑苹果显卡免驱列表（10-x-10-14-x）/index.html",revision:"2a8cb60a35fea82ab58c0f7ce61cb9a7"},{url:"2020/03/31/黑苹果显卡免驱列表（15-x-）/index.html",revision:"fb6f41070f4c9fcaf2d320f9e39f58bf"},{url:"2020/10/18/随笔/index.html",revision:"0bff6e2498236f7b9193f4ef7041418a"},{url:"2020/12/16/Battlefield3LanServer/index.html",revision:"ef2117917ad5e9eba398522d6238e593"},{url:"2021/01/17/C语言基础/index.html",revision:"26ce09596d9f938492a1ad4b6196082f"},{url:"2021/03/23/Java命名规范/index.html",revision:"b9776344490976ad2abecdd39bd809e4"},{url:"2021/06/17/hello-world/index.html",revision:"6c2a4d32aa51ddcdd170c129678df410"},{url:"404.html",revision:"7415259e0e8d1a50241790da5f7edd53"},{url:"about/index.html",revision:"1873179b7ddae1e5126deec67adaf46d"},{url:"archives/2018/12/index.html",revision:"d85254575d7887c5363cd6709fbc90ea"},{url:"archives/2018/index.html",revision:"c9daa6fa3c9dca42c890a86fd8d33761"},{url:"archives/2020/03/index.html",revision:"899794a5589f871e32b5b18ed220a3d4"},{url:"archives/2020/10/index.html",revision:"6af8ac160a2a93ce3ad5324762d03327"},{url:"archives/2020/12/index.html",revision:"d0410cedf199e65968257812f4394819"},{url:"archives/2020/index.html",revision:"988b98e5d63e7fd0e07df75471b0044a"},{url:"archives/2021/01/index.html",revision:"6719fe228515085cdbf0f9539d241353"},{url:"archives/2021/03/index.html",revision:"a3640c74201f67977f66fb240105bd5b"},{url:"archives/2021/06/index.html",revision:"991489929239f39f6dd2352998350654"},{url:"archives/2021/index.html",revision:"d49bcd0ce427b982a0f1587df730c0be"},{url:"archives/index.html",revision:"2d4635652f015575f62b30ed183aa1a6"},{url:"archives/page/2/index.html",revision:"2d4635652f015575f62b30ed183aa1a6"},{url:"bangumi/index.html",revision:"c32e94505e51b71969b53963138272bd"},{url:"categories/Java/index.html",revision:"b7237072c90c4dafdca98df60fd53c46"},{url:"categories/技术/index.html",revision:"5b2ea37558d3afcf0089d2b8885933da"},{url:"categories/支持/index.html",revision:"d0bda55fb4c1ae418e2d9794612030cd"},{url:"categories/随笔/index.html",revision:"49dc16d91f9b6092f0d75db06c8d4bd7"},{url:"client/index.html",revision:"0f6e32ce48cc4a87d9257713c37a47c7"},{url:"comment/index.html",revision:"510b68859ad926f248c02860d00a0fae"},{url:"css/APlayer.min.css",revision:"dd994a6d66290a8c4802505bb89eb684"},{url:"css/bangumi.css",revision:"d43a6597db051d083759956585938d7b"},{url:"css/donate.css",revision:"abaab8d1c439d95e4df772662fc3d5f2"},{url:"css/font.css",revision:"eeddb72e6b6fa30c1fed428e4e31e442"},{url:"css/insight.css",revision:"6f093040383f8c9bd73189600550c8fc"},{url:"css/jquery.fancybox.min.css",revision:"694fcebc5c6758995226be966344ef7c"},{url:"css/lib.min.css",revision:"7e963be1bfb0b2a072c061c0f9dfe843"},{url:"css/logo.css",revision:"ce3dcb41022617937feacd2e721d10d1"},{url:"css/sharejs.css",revision:"15186aa01ae835281abc05c7ecc0dc50"},{url:"css/style-backup.css",revision:"e2569166799c98f8dd13fdbecdd23dbc"},{url:"css/style.css",revision:"e6cc4215d399be3ba028117bbb55e354"},{url:"css/tags.css",revision:"56b2129becdc3b6f8ea743313638f26e"},{url:"css/zoom.css",revision:"a2eaccf97b6fff71e0bba34eb4d86845"},{url:"donate/index.html",revision:"97e4dbf11d826d5846e812a5313b8a1d"},{url:"fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"fonts/iconfont.eot",revision:"b408ae02f9bf10f6f3113af91cbf8eaa"},{url:"fonts/iconfont.svg",revision:"9cadc5b52ff3769b2a1992243b6382ed"},{url:"fonts/iconfont.ttf",revision:"0a2c771c2f9ef9ed58cf83218d2e9aa5"},{url:"fonts/iconfont.woff",revision:"f052fc9e9077c407ee6e934d968b3b03"},{url:"fonts/LOGO/logo-embed.css",revision:"a94cc2d5bce7462e68fa0973fac27c67"},{url:"fonts/LOGO/logo.css",revision:"44540be139cd3c33d25fdb7c8a6a491a"},{url:"fonts/LOGO/logo.eot",revision:"864c0f02569b084a5efccd1a1af768a0"},{url:"fonts/LOGO/logo.svg",revision:"fe25eb91e4ac8b79b1c26b8d8b03a99d"},{url:"fonts/LOGO/logo.ttf",revision:"086a6e14f832da2b24e71e87d9b1b4b1"},{url:"fonts/LOGO/logo.woff",revision:"35997b930c471f1b824d60493b8076cc"},{url:"fonts/SAKURASO.old/icon.css",revision:"8f1d0f4e7d040e6477506720a08cf74e"},{url:"fonts/SAKURASO.old/sakuraso-symbol.svg",revision:"54c980882f96dec7061647ee30537805"},{url:"fonts/SAKURASO.old/sakuraso.eot",revision:"79eae38d0e58db052ef6ba585519829e"},{url:"fonts/SAKURASO.old/sakuraso.svg",revision:"e41b8574dfc5156adaa4dd7dab1f50c2"},{url:"fonts/SAKURASO.old/sakuraso.ttf",revision:"002d706815e3b8e6d14f0bbfff5c4579"},{url:"fonts/SAKURASO.old/sakuraso.woff",revision:"d93b41c816432c7cfa2aa55ab07b3c8e"},{url:"images/APP.png",revision:"9476948e131dc3d1077f2af25e603959"},{url:"images/cover/0.webp",revision:"1cbfea7ae3a04b416bd008fa63b0e37a"},{url:"images/cover/1.webp",revision:"c74cd7f63e756796a5ba4a9aa3695550"},{url:"images/cover/2.webp",revision:"46aa6b48002b0ec8baa156d51e6b73e3"},{url:"images/cover/3.webp",revision:"d0cb57972f7f0445b033d02a167bffba"},{url:"images/cover/4.webp",revision:"0de40c98bb281e026b76216c49d2f954"},{url:"images/cover/5.webp",revision:"5d8d0d8fd3415e74d4148d5b71eb5c82"},{url:"images/cover/6.webp",revision:"65b12c5d9b5759644600fd204c8fe21f"},{url:"images/cover/7.webp",revision:"6b684e0c4f740619aca8b5baa3fef08f"},{url:"images/cover/8.webp",revision:"4ec1f5e92d7c847c1d0f9aa38994da57"},{url:"images/donate/alipay.svg",revision:"9239702087add999b29eda6c69b7fac3"},{url:"images/donate/github.svg",revision:"23fc8f81f92bb2981d8f9e089d7df14a"},{url:"images/donate/like.svg",revision:"335eff6a0aefd9ce25d8624c9cae2f54"},{url:"images/donate/wechat.svg",revision:"f9bcef76a75dae0e4fe6bf3d3af1cad3"},{url:"images/webapp/android-touch-icon.png",revision:"5579b44f34c1ece43b1edded28b9a834"},{url:"images/webapp/apple-touch-icon-120x120.png",revision:"caf501d9383e13517317c9e8a00d3bb1"},{url:"images/webapp/apple-touch-icon-152x152.png",revision:"dae9521c34ba27253b5444c12520723a"},{url:"images/webapp/apple-touch-icon-180x180.png",revision:"a489a83b93848f87be0068200241100f"},{url:"images/webapp/apple-touch-icon-76x76.png",revision:"bb210b2d47700260088e4c41242f1586"},{url:"index.html",revision:"84aa9a1181991e263755e78543aadd3c"},{url:"js/APlayer.min.js",revision:"1299f7d98378802a9283618cda33f15b"},{url:"js/botui.js",revision:"44453ce7d890f1ff8c29b0d33dd42f56"},{url:"js/InsightSearch.js",revision:"417686f19ee096796af142cdecfe0356"},{url:"js/lib.min.js",revision:"9f0977dac462213cd66350bc51d8ff7d"},{url:"js/sakura-app.js",revision:"6caaee7e845f4483cd8a696c1d9ae0fb"},{url:"js/Valine.min.js",revision:"a68890f1fbd7f424626220c2580ccb80"},{url:"lab/index.html",revision:"4b47c44b5d16392661bbbd52462d1219"},{url:"links/index.html",revision:"b24f5ecf52a0833d76eca2982786a45c"},{url:"music/index.html",revision:"0b5464eb1d350afcdc19a1a5087c06bd"},{url:"page/2/index.html",revision:"9a548332f467b1958bb0831bc6dc43bb"},{url:"rss/index.html",revision:"18f1b779e5a5f19a8fc37ed22d6bc5fa"},{url:"tags/index.html",revision:"6d8e8b45dfb57ef5ac786049a0f61bcc"},{url:"tags/web/index.html",revision:"3d9ef1a2c9eb1284310c888e31a32cb9"},{url:"tags/悦读/index.html",revision:"1964af835b1572575b440af2b27b11a7"},{url:"test.html",revision:"e9c50cc7a2c3307871420b4db72f2000"},{url:"theme-sakura/index.html",revision:"9011b39c0fec2777547f0d014f48df30"},{url:"video/index.html",revision:"27a58b61291258d23f4a116d3b60bcbc"},{url:"warn.html",revision:"482513873c619b7b582b4eb32ffa9027"}],{})}));
//# sourceMappingURL=service-worker.js.map
