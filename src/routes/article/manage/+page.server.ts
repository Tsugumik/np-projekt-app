import prisma from '$lib/prisma'
import { error, fail, redirect } from '@sveltejs/kit';

export const actions = {
    createArticle: async({ request }) => {
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
    deleteArticle: async({ request }) => {
        const data = await request.formData();
        let id = data.get("id");

        if(!id) {
            return fail(400, {id, missing: true});
        }

        const req = await prisma.article.delete({
            where: {
                id: Number(id)
            }
        });

        if(req) {
            throw redirect(303, "/");
        } else {
            error(404, { message: "Nie znaleziono artykułu o podanym id!" });
        }

        
    },
    updateArticle: async({ request }) => {
        const data = await request.formData();

        let id = data.get("id");
        let title = data.get("title");
        let content = data.get("content");

        if(!title || !content || !id) {
            return fail(400, {content, title, missing: true});
        }

        if(typeof title != "string" || typeof content != "string") {
            return fail(400, {incorrent: true});
        }

        await prisma.article.update({
            where: {
                id: Number(id)
            },
            data: {
                title: title,
                content: content
            }
        });

        throw redirect(303, "/");
    }
}