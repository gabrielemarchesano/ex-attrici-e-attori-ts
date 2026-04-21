type Person = {
  readonly id: number,
  readonly name: string,
  birth_year: number,
  death_year?: number,
  biography: string,
  image: string
};

type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: "American"| "British"| "Australian"| "Italo-American"| "South African"| "French"| "Indian"| "German"| "Spanish"| "South Korean"| "Chinese"
}