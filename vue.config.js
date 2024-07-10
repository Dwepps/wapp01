const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Dwepps",
    themeColor: "#ff0000",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    iconPaths: {
      faviconSVG: "/src/assets/img/logo_dwepps_1-original-removebg.png",
      favicon32: "/src/assets/img/logo_dwepps_1-original-removebg.png",
      favicon16: "/src/assets/img/logo_dwepps_1-original-removebg.png",
      appleTouchIcon: "/src/assets/img/logo_dwepps_1-original-removebg.png",
      maskIcon: "/src/assets/img/logo_dwepps_1-original-removebg.png",
      msTileImage: "/src/assets/img/logo_dwepps_1-original-removebg.png",
    },
  },
});
