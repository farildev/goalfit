const { getDefaultConfig } = require("expo/metro-config"); 
const { withNativeWind } = require("nativewind/metro"); 
 
module.exports = (() => { 
  const config = getDefaultConfig(__dirname); 
 
  const windConfig = withNativeWind(config, { input: "./src/assets/styles/globals.css" }); 
 
  const { transformer, resolver } = windConfig; 
 
  windConfig.transformer = { 
    ...transformer, 
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo"), 
  }; 
  windConfig.resolver = { 
    ...resolver, 
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"), 
    sourceExts: [...resolver.sourceExts, "svg"], 
  }; 
 
  return windConfig; 
})();