import prisma from "$lib/prisma";
import { error } from "@sveltejs/kit";

export const load = (async ({ params })=>{
    const req_id = params.id;

    const response = await prisma.article.findUnique({where: {
        id: Number(req_id)
    }});

    if(response) {
        return { article: response };
    } else {
        error(404, { message: "Nie znaleziono artykułu o podanym id!" });
    }
});