<script>
	import src from "$lib/images/logo.webp";
	import Input from "$lib/components/Input.svelte";
</script>

<svelte:head>
	<title>Fake Uber - Crear Cuenta</title>
</svelte:head>

<header>Crear Cuenta</header>
<main>
	<form>
		<img {src} alt="Logo de Fake Uber" height="100" width="100" />
		<h1 class="logo">Fake Uber</h1>
		<Input type="text" id="name" text="Nombre" placeholder="Aquiles Vengo" />
		<Input type="email" id="email" text="Correo Electrónico" placeholder="juan.guerra@gmail.com" />
		<Input type="password" id="password" text="Contraseña" placeholder="•••••••••" />
		<Input type="password" id="repeat" text="Repetir Contraseña" placeholder="•••••••••" />
		<button class="button" type="submit">Crear Cuenta</button>
		<a href="/login">Ya tengo cuenta</a>
	</form>
</main>

<style>
	header {
		display: flex;
		padding: 24px 16px;
		justify-content: center;
		align-items: center;
		line-height: 16px;
		font-weight: 600;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 0 16px;
		gap: 24px;
		align-items: center;
	}

	button {
		padding: 8px 16px;
		border: none;
		border-radius: var(--border-radius);
		background: var(--text);
		color: var(--background);
		font-weight: 600;
	}
	
	:global(body) {
		background:
		radial-gradient(circle at left bottom, #FF00F9, transparent 50%),
		radial-gradient(circle at right bottom, #2383FF, transparent 50%)
	}
</style>
