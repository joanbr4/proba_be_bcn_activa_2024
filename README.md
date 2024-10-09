# API ITACADEMY HACKATOON

## Passos nesecaris avans d'arrancar el projecte

1. Primer de tot, s'ha de tenir el [NodeJs] instalat amb un IDE com el [VSCode]

2. El [Docker Desktop] instalat, que ens permetrà correr bases de dades en contenidor virtuals

3. En la terminal, verificar que tenim la paqueteria pnpm instalat `pnpm -v`, sino s'ha d'instalar:

```sh
npm i pnpm -g
```

3. Clonar la repo del projecte:

```sh
  git clone https://github.com/joanbr4/proba_be_bcn_activa_2024.git
```

4. Instalar totes les dependencies del projecte:

```sh
pnpm install
```

## Como arrancar el projecte?

Per arrancar el projecte, una vegada tot instalat, es questió d'arrancar el servidor. Iniciarem la base de dades amb MongoDB i seguidament el servidor/ API amb el següent script:

```sh
pnpm _up
```

Si sols volem arrancar el projecte:

```sh
pnpm dev
```

[NodeJs](https://nodejs.org/en/download/package-manager/current)
[VSCode](https://code.visualstudio.com/download)
[Docker Desktop](https://www.docker.com/products/docker-desktop/)
