<script>
	import { enhance } from '$app/forms';
	import "../mapbox.css";
	import mapboxgl from "mapbox-gl";
	import Header from "$lib/components/Header.svelte";
	import Input from "$lib/components/Input.svelte";
	import Bottomsheet from "$lib/components/Bottomsheet.svelte";
	import { calcularPrecioTaxi } from "$lib/utils";
	import Solicitud from "$lib/components/Solicitud.svelte";
	import { onMount, onDestroy } from "svelte";

	mapboxgl.accessToken =
		"pk.eyJ1IjoibGVzZWwyMiIsImEiOiJjbGkyMXI0dTgxMWlpM2NtdmwzaWludjNuIn0.N3IV_qsXWrO7wMqSSEnNHA";

	let map, container, o_marker, d_marker, o_el, d_el
	let o_lngLat = {
		lng: -71.533918,lat: -16.410665
	}
	let d_lngLat = {
		lng: -71.533918,lat: -16.410665
	}
	let showing_origin = false, showing_destinty = false

	onMount(() => {
		map = new mapboxgl.Map({
			container: container,
			center: [-71.533918, -16.410665],
			zoom: 13,
		});

		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true,
				},
				trackUserLocation: true,
				showUserHeading: true,
			}),
		);
	});

	onDestroy(() => {
		if (map) map.remove();
		if (o_marker) o_marker.remove();
		if (d_marker) d_marker.remove();
	});

	const moveOrigin = () => {
		const center = map.getCenter();
		o_marker.setLngLat(center);
		o_lngLat = center;
	}

	const moveDestiny = () => {
		const center = map.getCenter();
		d_marker.setLngLat(center);
		d_lngLat = center;
	}

	const handleOrigen = () => {
		if (showing_destinty) {
			showing_destinty = false;
			map.off('move', moveDestiny);
 		}
		if (!showing_origin) {
			if (!o_el) {
				o_el = document.createElement('div');
				o_el.className = 'marker';

				o_marker = new mapboxgl.Marker(o_el)
					.setLngLat([map.getCenter().lng, map.getCenter().lat])
					.addTo(map);
			}
			map.on('move', moveOrigin);
			showing_origin = true;
		}
	}

	const handleDestiny = () => {
		if (showing_origin) {
			showing_origin = false;
			map.off('move', moveOrigin);
 		}
		 if (!showing_destinty) {
			if (!d_el) {
				d_el = document.createElement('div');
				d_el.className = 'marker-destiny';

				d_marker = new mapboxgl.Marker(d_el)
					.setLngLat([map.getCenter().lng, map.getCenter().lat])
					.addTo(map);
			}
			map.on('move', moveOrigin);
			showing_destinty = true;
		}
	}

	$: origen = `${o_lngLat.lng}, ${o_lngLat.lat}`;
	$: destino = `${d_lngLat.lng}, ${d_lngLat.lat}`;
	$: estimado = calcularPrecioTaxi(o_lngLat.lat, o_lngLat.lng, d_lngLat.lat, d_lngLat.lng);
</script>

<svelte:head>
	<title>Fake Uber</title>
</svelte:head>

<Header />
<article>
	<div class="solicitudes">
		<!-- <Solicitud name="Pedro" dist="350m" oferta="12.50" />
		<Solicitud name="José" dist="700m" oferta="11.00" /> -->
	</div>
	<div class="map" bind:this={container}></div>
</article>
<Bottomsheet>
	<form method="post" use:enhance>
		<p>Escoge un punto de partida y uno de destino</p>
		<Input
			type="text"
			id="origin"
			text="Punto de Partida"
			placeholder="Seleccionar en el mapa"
			action={handleOrigen}
			value={o_marker ? origen : null}
		/>
		<Input
			type="text"
			id="destiny"
			text="Destino"
			placeholder="Seleccionar en el mapa"
			action={handleDestiny}
			value={d_marker ? destino : null}
		/>
		<div class="input-container">
			<label for="precio">Precio Estimado</label>
			<input type="text" id="precio" name="precio" placeholder="0.00" value={estimado} />
		</div>
		{#if showing_origin || showing_destinty}
			<button class="button" type="button" on:click={()=>{
				map.off('move', moveOrigin);
				map.off('move', moveDestiny);
				showing_origin = false;
				showing_destinty = false;
			}}>Listo</button>
		{:else}
			<button class="button" type="submit">Solicitar Viaje</button>
		{/if}
	</form>
</Bottomsheet>

<style>
	form {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 16px;
	}
	article {
		position: relative;
	}
	.solicitudes {
		position: absolute;
		inset: 0 0 auto;
		z-index: 1000;
	}
	.map {
		background: var(--input);
		height: 500px;
	}
	.input-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	input {
		width: 105px;
		text-align: right;
	}
</style>
