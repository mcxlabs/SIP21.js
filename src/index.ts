// Helpful name and version exports
export const LIBRARY_VERSION = "0.21.2";
const version = "0.21.2";
const name = "sip.js";
export { name, version };

// Export api
export * from "./api/index.js";

// Export grammar
export * from "./grammar/index.js";

// Export namespaced core
import * as Core from "./core/index.js";
export { Core };

// Export namespaced web
import * as Web from "./platform/web/index.js";
export { Web };
