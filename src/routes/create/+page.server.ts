import prisma from '$lib/prisma'
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    createArticle: async({request}) => {
        const data = await request.formData();

        let title = data.get("title");
        let content = data.get("content");

        if(!title || !content) {
            return fail(400, {content, title, missing: true});
        }

        if(typeof title != "string" || typeof content != "string") {
            return fail(400, {incorrent: true});
        }

        await prisma.article.create({
            data: {
                title,
                content
            }
        });

        throw redirect(303, "/");
    },
}