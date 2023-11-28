export function calcularPrecioTaxi(lat1, lon1, lat2, lon2) {
	// Radio de la Tierra en kilómetros
	const radioTierra = 6371.0;

	// Convertir las coordenadas de grados a radianes
	const lat1Rad = (lat1 * Math.PI) / 180;
	const lon1Rad = (lon1 * Math.PI) / 180;
	const lat2Rad = (lat2 * Math.PI) / 180;
	const lon2Rad = (lon2 * Math.PI) / 180;

	// Calcular la diferencia de latitud y longitud
	const dLat = lat2Rad - lat1Rad;
	const dLon = lon2Rad - lon1Rad;

	// Calcular la distancia entre los dos puntos utilizando la fórmula de Haversine
	const a =
		Math.sin(dLat / 2) ** 2 +
		Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
	const distancia = 2 * radioTierra * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	if (!distancia) return "0.00";

	// Tarifa base y tarifa por kilómetro (ajusta estos valores según tu ubicación)
	const tarifaBase = 5.00; // Tarifa base en la moneda local
	const tarifaPorKilometro = 1.50; // Tarifa por kilómetro en la moneda local

	// Calcular el precio de la carrera
	let precio = tarifaBase + distancia * tarifaPorKilometro;

	// Redondear el precio a dos decimales
	precio = Math.round(precio * 100) / 100;

	return precio;
}

export function uuidv4() {
	return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
}