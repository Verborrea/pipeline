<script>
	export let name, dist, oferta;
</script>

<article>
	<section>
		<h2>{name} a {dist}</h2>
		<p>Viaje a S/{oferta}</p>
	</section>
	<button class="button" type="button">Aceptar viaje</button>
</article>

<style>
	article {
		background: #ffffffab;
		display: flex;
		padding: 16px;
		align-items: center;
		justify-content: space-between;
	}
	h2 {
		font-size: 20px;
		line-height: 26px;
	}
	p {
		color: var(--secondary);
	}
</style>