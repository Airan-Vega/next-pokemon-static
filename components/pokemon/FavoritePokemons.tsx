import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";

interface PropsI {
	pokemons: number[];
}

export const FavoritePokemons: FC<PropsI> = ({ pokemons }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{pokemons.map((id: number) => (
				<FavoriteCardPokemon key={id} pokemonId={id} />
			))}
		</Grid.Container>
	);
};
