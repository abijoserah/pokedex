type Pokemon = {
	name: string;
	imgSrc?: string;
};

type PokemonCardProps = {
	pokemon: Pokemon;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}
