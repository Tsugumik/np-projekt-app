<script lang="ts">
    import { enhance } from '$app/forms';

    export let data;
</script>

<header class="flex items-center border-b-gray-800 border-b-2 p-2">
    <h2 class="flex-1 font-bold">{data.article.title}</h2>
    <div class="flex justify-center items-center gap-2">
        <form use:enhance action="/article/manage?/deleteArticle" method="post">
            <input type="hidden" name="id" id="id" value={data.article.id}>
            <button type="submit">Usuń</button>
        </form>
        <a href="/article/{data.article.id}/edit">Edytuj</a>
    </div>
    
</header>


<p class="p-2">{data.article.content}</p>