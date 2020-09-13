<h3>Login</h3>
<form on:submit|preventDefault={cek_login}>
	<div class="form-group">
		<label for="username">Username</label>
		<input type="search" bind:this={ref} id="username" bind:value={username} class="form-control" required name="">
	</div>
	<div class="form-group">
		<label for="password">Password</label>
		<input type="password" id="password" bind:value={password} class="form-control" required name="">
	</div>
	<div class="bawah">
		<input type="submit" name="" class="btn btn-success" value="&#x2714;">
	</div>
</form>

<script type="text/javascript">
	import {push} from 'svelte-spa-router'
	import {onMount} from 'svelte'
	let username = ''
	let password = ''
	let ref
	onMount(() => ref.focus())
	const cek_login = () => {
		let body = new FormData
		body.append('username', username)
		body.append('password', password)
		fetch(`${api}/index.php/login/cek`, {
			method: 'post', 
			body
		}).then(x => x.json()).then(y => {
			if (y == 'salah'){
				username = ''
				password = ''
				ref.focus()
			} else {
				localStorage.setItem('token', y)
				push('/')
			}
		})
	}
</script>