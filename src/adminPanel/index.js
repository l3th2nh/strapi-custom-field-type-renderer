const strapiAdminPanel = require('./strapi-admin-panel');

const flags = {
  ENABLE_CUSTOM_PANEL: true,
}

/**
 * Enable custom strapiAdminPanel
 */
if (flags.ENABLE_CUSTOM_PANEL) {
  console.log('CUSTOM_PANEL : ENABLED');
  strapiAdminPanel();
} else {
  console.log('CUSTOM_PANEL : DISABLED');
}