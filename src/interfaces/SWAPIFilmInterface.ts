/* eslint-disable camelcase */

/**
 * - Interface que descreve um Film, retornado pela API SWAPI.
 *
 * @interface
 */
export default interface SWAPIFilmInterface {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}
