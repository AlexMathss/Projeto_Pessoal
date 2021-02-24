import Highway from "@dogstudio/highway";
import Fade from "./smooth";

const H = new Highway.Core ({
    transitions: {
        default: Fade
    }
});