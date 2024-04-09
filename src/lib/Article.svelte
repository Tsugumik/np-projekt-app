<script lang="ts">
    import type { Article } from "@prisma/client";
    export let article: Article;
</script>

<div class="shadow-black shadow rounded-xl p-2">
    <a href="/article/{article.id}">
        <h2 class="border-b-gray-800 border-b-2 p-2 font-bold">{article.title}</h2>
    </a>
    <p class="p-2">{article.content}</p>
</div>