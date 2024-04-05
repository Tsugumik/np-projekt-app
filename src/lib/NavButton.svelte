<script lang="ts">
    export let href: string;
</script>
<a href={href} class="flex items-center justify-center align-middle text-2xl h-10 w-10 rounded-xl bg-blue-600">
    <slot />
</a>