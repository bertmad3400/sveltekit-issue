<script lang="ts">
  import { page } from "$app/stores";

  $: count = 2 + $page.data.count;
</script>

<h1>Count: {count}</h1>
