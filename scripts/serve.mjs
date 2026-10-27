import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const types = { ".css":"text/css; charset=utf-8", ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".png":"image/png", ".webp":"image/webp" };
createServer(async (request,response)=>{try{const pathname=decodeURIComponent(new URL(request.url,"http://127.0.0.1").pathname);const relative=pathname==="/"?"index.html":pathname.replace(/^\/+/,"");const path=normalize(join(root,relative));if(!path.startsWith(root))throw new Error("Ruta inválida");if(!(await stat(path)).isFile())throw new Error("No es archivo");response.writeHead(200,{"Content-Type":types[extname(path)]??"application/octet-stream"});createReadStream(path).pipe(response)}catch{response.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});response.end("No encontrado")}}).listen(8000,"127.0.0.1",()=>console.log("Servidor: http://127.0.0.1:8000/"));
