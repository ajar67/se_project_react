import { baseURL} from "./constants";
import { processResponseServer } from "./constants";

export default function Get() {
    return fetch(`${baseURL}/items`)
    .then(processResponseServer);
}

export default function Post() {
    
}