interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonName: (name: string) => void;
	pokemonList: Pokemon[];
}
export default function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((poke) => (
				<button
					key={poke.name}
					type="button"
					onClick={() => setPokemonName(poke.name)}
				>
					{poke.name}
				</button>
			))}
		</nav>
	);
}
