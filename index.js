import { version } from "./package";

const app = document.querySelector("#app");

app.innerHTML = `My number is ${version}`;
