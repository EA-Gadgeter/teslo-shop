# Descripcion

## Ejecutar en desarrollo
1. Clonar el repositorio
2. Crear una copia del archivo *.env.example* y renombrarlo a *.env* remplazando las variables de entorno necesarias
3. Instalar dependencias ```pnpm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```pnpx prisma migrate dev```
6. Ejecutar el seed de la base de datos ```pnpm seed```
7. Ejecutar el proyecto ```pnpm dev```

## Ejectuar en producción
