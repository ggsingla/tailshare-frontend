/** @type {import('postcss-load-config').Config} */
// import obfuscator from 'postcss-obfuscator'
const config = {
  plugins: [
    "tailwindcss",
    [
      "postcss-obfuscator",
      {
        enable: process.env.NODE_ENV === "obfuscate", // Enable plugin
        length: 10, // Random  name length.
        classMethod: "random", // 'random', 'simple', 'none' obfuscation method for classes.
        classPrefix: "", // ClassName prefix.
        classSuffix: "", // ClassName suffix.
        classIgnore: [], // Class to ignore from obfuscation.
        ids: false, //  Obfuscate #IdNames.
        idMethod: "random",
        idPrefix: "", // idName Prefix.
        idSuffix: "", // idName suffix.
        idIgnore: [], // Ids to ignore from obfuscation.
        indicatorStart: null, // Identify ids & classes by the preceding string.
        indicatorEnd: null, // Identify ids & classes by the following string.
        jsonsPath: "masked-classes", // Path and file name where to save obfuscation data.
        srcPath: "src", // Source of your files.
        desPath: "out", // Destination for obfuscated html/js/.. files.Be careful using the same directory as your src(you will lose your original files).
        extensions: [".html", ".tsx", ".ts", ".jsx"],
        htmlExcludes: [], // Files and paths to exclude from html obfuscation replacement.
        cssExcludes: [], // Files and paths to exclude from css obfuscation.
        fresh: false,
        multi: false, // Generate obsfucated data file for each css file.
        differMulti: false, // Generate different Random names for each file.
        formatJson: true, // Format obfuscation data JSON file.
        showConfig: false, // Show config on terminal when runinng.
        keepData: true, // Keep or delete Data after obfuscation is finished?
      },
    ],
  ],
};

export default config;
