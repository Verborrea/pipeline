# Aplicación para el clliente

## Usuario y contraseña:
alan.monroy@ucsp.edu.pe
chinese-firedrill-25

Python-2.7.18  Python-2.7.18.tgz  kafka-producer-node  kafka_2.12-2.6.2  producer

<!-- Aquí está el kafka para ver el consumidor en consola -->
cd kafka_2.12-2.6.2/

./bin/kafka-console-consumer.sh --bootstrap-server b-1.kafkacluster.wsfvqn.c8.kafka.us-east-1.amazonaws.com:9092,b-3.kafkacluster.wsfvqn.c8.kafka.us-east-1.amazonaws.com:9092,b-2.kafkacluster.wsfvqn.c8.kafka.us-east-1.amazonaws.com:9092 --topic solicitudViaje

<!-- Para correr el productor -->
cd producer/
pnpm run dev --host

http://44.205.15.248:5173/

<!-- Productor -->
src/routes/+page.svelte			// frontend
src/routes/+page.server.js		// backend

<!-- Consumidor -->
src/routes/consumidor/+page.svelte		// frontend
src/lib/Messages.svelte					// backend