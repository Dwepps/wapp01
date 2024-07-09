const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Dwepps',
    themeColor: '#ff0000',
    msTileColor: "#000000",
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      faviconSVG: 'src/assets/img/logo_svg_dwepps_1.svg',
      favicon32: 'src/assets/img/logo_dwepps_1.png',
      favicon16: 'src/assets/img/logo_dwepps_1.png',
      appleTouchIcon: 'src/assets/img/logo_dwepps_1.png',
      maskIcon: 'src/assets/img/logo_svg_dwepps_1.svg',
      msTileImage: 'src/assets/img/logo_dwepps_1.png'
    },
  }
});
