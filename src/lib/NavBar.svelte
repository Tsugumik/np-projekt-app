<script>
    import NavButton from "./NavButton.svelte";

</script>
<nav class="flex text-white text-xl m-2 p-2 rounded-xl bg-blue-800 shadow-black shadow">
    <div>
        <h1>Article App</h1>
        <h2>Projekt z narzędzi programistycznych</h2>
    </div>
    <div class="flex-1 flex justify-end items-center">
        <NavButton href="/create">+</NavButton>
    </div>
</nav>
