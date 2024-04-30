<script lang="ts">
    import { enhance } from "$app/forms";
    import FormInput from "$lib/FormInput.svelte";
    import FormSubmitButton from "$lib/FormSubmitButton.svelte";
    import FormTextArea from "$lib/FormTextArea.svelte";
    import type { Article } from "@prisma/client";

    export let article: Article;
</script>
<h3>Edytowanie artykułu</h3>
<form use:enhance method="post" action="/article/manage?/updateArticle" class="flex flex-col gap-2 items-center">
    <input type="hidden" name="id" id="id" value={article.id}>
    <FormInput value={article.title} idname="title" placeholder="Tytuł" />
    <FormTextArea value={article.content} idname="content" placeholder="Zawartość"/>
    <FormSubmitButton value="Zatwierdź zmiany"/>
</form>