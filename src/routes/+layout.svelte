<script lang="ts">
    import NavBar from '$lib/NavBar.svelte';
    import '../app.css';
</script>



<div class="container mx-auto">
    <NavBar />
    <div class="px-2">
        <slot />
    </div>
</div>
