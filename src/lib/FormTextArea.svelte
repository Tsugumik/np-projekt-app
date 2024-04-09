<script lang="ts">
    export let placeholder: string = "";
    export let idname: string;
</script>

<textarea rows="20" name={idname} id={idname} placeholder={placeholder} class="shadow-black shadow rounded-xl px-4 py-2 w-full resize-none"></textarea>