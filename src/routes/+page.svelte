<script lang="ts">
    import Article from "$lib/Article.svelte";
    export let data;
</script>

{#if data.articles.length > 0}
    {#each data.articles as article}
        <Article article={article} />
    {/each}
{:else}
    <p class="text-center text-2xl">Brak dodanych artykułów!</p>
{/if}