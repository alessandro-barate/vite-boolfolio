import { createApp } from "vue";

// Import Vue Router
import { router } from "./router";

// Import style
import "./assets/scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

/********************
  Import Fontawesome
********************/

// Import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// Import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(faUserSecret);

/**************************
  FINE Import Fontawesome
**************************/

// Import Vue root component
import App from "./App.vue";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
