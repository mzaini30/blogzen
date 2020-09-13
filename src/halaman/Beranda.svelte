<form>
	<div class="form-group">
		<label for="cari">Cari</label>
		<input type="search" id="cari" class="form-control" placeholder="Cari apa?" required="" name="">
	</div>
</form>
<div class="list-group list-postingan">
	{#each Array(10) as _}
		<a href="/" class="list-group-item list-group-item-action" use:link>Hello world</a>
	{/each}
</div>
<div class="bawah">
	{#if login == false}
		<a href="/login" use:link class="btn btn-info">&#x2618;</a>
	{:else}
		<a href="/tulis" use:link class="btn btn-info">&#x270E;</a>
	{/if}
</div>

<script type="text/javascript">
	import {link} from 'svelte-spa-router'
	let login = false
</script>

<style type="text/css">
	.bawah {
		position: fixed;
		bottom: 20px;
		right: 20px;
	}
	.list-postingan {
		margin-bottom: 80px;
	}
</style>