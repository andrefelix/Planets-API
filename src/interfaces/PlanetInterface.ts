/**
 * - Interface que descreve as propriedades de um Planet.
 *
 * @interface
 */
export default interface PlanetInterface {
  name: string
  population: number | undefined
  climate: string[]
  terrain: string[]
  featuredInFilms: string[]
}
