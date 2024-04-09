<script lang="ts">
    export let placeholder: string = "";
    export let idname: string;
</script>
<input placeholder={placeholder} id={idname} name={idname} type="text" class="block shadow-black shadow rounded-xl px-5 py-2 w-full">