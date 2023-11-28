<script>
	import src from "$lib/images/logo.webp";
</script>

<header>
	<img {src} alt="Logo de Fake Uber" height="32" width="32">
	<h1>Fake Uber</h1>
</header>

<style>
	header {
		background: var(--text);
		display: flex;
		gap: 10px;
		padding: 12px 16px;
	}
	h1 {
		color: var(--background);
		font-size: 24px;
		line-height: 30px;
	}
</style>