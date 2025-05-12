import { TerriaPluginModule } from "terriajs-plugin-api";

/**
 * A function that when called imports all plugins.
 */
const plugins: () => Promise<TerriaPluginModule>[] = () => [
  // Add plugin imports. Example:
  // import("terriajs-plugin-sample"),
  import("terriajs-plugin-proj4leaflet")
];

export default plugins;
