import { Application } from "https://deno.land/x/oak/mod.ts";


const app = new Application();

console.log("DENO is listning on port 8000.");
await app.listning({ port: 8000 });