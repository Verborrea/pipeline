<script>
	import src from "$lib/images/logo.webp";
	import Input from "$lib/components/Input.svelte";
</script>

<svelte:head>
	<title>Fake Uber - Iniciar Sesión</title>
</svelte:head>

<header>Iniciar Sesión</header>
<main>
	<form>
		<img {src} alt="Logo de Fake Uber" height="100" width="100" />
		<h1 class="logo">Fake Uber</h1>
		<Input type="email" id="email" text="Correo Electrónico" placeholder="juan.guerra@gmail.com" />
		<Input type="password" id="password" text="Contraseña" placeholder="•••••••••" />
		<button class="button" type="submit">Ingresar</button>
		<a href="/register">¿Y si no tengo cuenta?</a>
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
	
	:global(body) {
		background:
		radial-gradient(circle at left bottom, #FF00F9, transparent 50%),
		radial-gradient(circle at right bottom, #2383FF, transparent 50%)
	}
</style>
