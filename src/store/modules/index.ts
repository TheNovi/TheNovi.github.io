import { VuexModule } from "vuex-module-decorators";

/**
 * Automatically imports all the modules and exports as a single module object
 */
const modules: { [id: string]: VuexModule } = {};

const requireModule = require.context(".", false, /\.store\.ts$/);
requireModule.keys().forEach(filename => {
  modules[filename.replace(/(\.\/|\.store\.ts)/g, "")] =
    requireModule(filename).default || requireModule(filename);
});

export default modules;
