<script lang="ts">
    import NavBar from '$lib/NavBar.svelte';
    import '../app.css';
</script>

<svelte:head>
    <title>Article App</title>
</svelte:head>

<div class="container mx-auto">
    <NavBar />
    <div class="px-2">
        <slot />
    </div>
</div>
