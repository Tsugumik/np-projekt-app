import prisma from "$lib/prisma";

export const load = (async ()=>{
    const response = await prisma.article.findMany();

    return { articles: response };
});