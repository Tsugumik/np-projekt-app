<script>
    import { enhance } from "$app/forms";
    import FormInput from "$lib/FormInput.svelte";
    import FormSubmitButton from "$lib/FormSubmitButton.svelte";
    import FormTextArea from "$lib/FormTextArea.svelte";
</script>
<h3>Tworzenie nowego artykułu</h3>
<form use:enhance method="post" action="/article/manage?/createArticle" class="flex flex-col gap-2 items-center">
    <FormInput idname="title" placeholder="Tytuł" />
    <FormTextArea idname="content" placeholder="Zawartość"/>
    <FormSubmitButton value="Stwórz"/>
</form>