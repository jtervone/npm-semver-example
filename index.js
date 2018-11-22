import { version } from "./package.json";

const app = document.querySelector("#app");

app.innerHTML = `My number is ${version}`;
