/* eslint-disable camelcase */

/**
 * - Interface que descreve um Planet, retornado pela API SWAPI.
 *
 * @interface
 */
export default interface SWAPIPlanetInterface {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  ulr: string
}
