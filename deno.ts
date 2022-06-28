import { serve } from "https://deno.land/std@0.68.0/http/server.ts";

const server = serve({ port:8000 });

for await (const req of server){
    console.log("Server Starting Now.");
    req.respond({body: 'Deno'});
}