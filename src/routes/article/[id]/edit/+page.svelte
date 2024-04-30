<script lang="ts">
    import EditForm from "$lib/forms/EditForm.svelte";

    export let data;
</script>

<EditForm article={data.article} />