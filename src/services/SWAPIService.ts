import axios from 'axios'
import SWAPIFilmInterface from '../interfaces/SWAPIFilmInterface'
import SWAPIPlanetInterface from '../interfaces/SWAPIPlanetInterface'

/**
 * - Interface que descreve o response da API SWAPI, ao acessar a url https://swapi.co/api/films
 *
 * @interface
 */
interface SWAPIFilmsInterface {
  count: number
  next: string | null
  previous: string | null
  results: SWAPIFilmInterface[]
}

/**
 * - Interface que descreve o response da API SWAPI, ao acessar a url https://swapi.co/api/planets
 *
 * @interface
 */
interface SWAPIPlanetsInterface {
  count: number
  next: string | null
  previous: string | null
  results: SWAPIPlanetInterface[]
}

/**
 * - Classe contendo responsável por manipular as requisições HTTP à API SWAPI.
 *
 * @class
 */
class SWAPIService {
  private PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
  private PLANETS_API_URL = 'https://swapi.co/api/planets'
  private FILMS_API_URL = 'https://swapi.co/api/films'

  /**
   * - Função que realiza uma requisição HTTP GET à url https://swapi.co/api/films, manipula seus
   * resultados para retornar um Array contendo todos os Films disponíveis pela API.
   *
   * @function
   * @async
   * @returns {Promise<SWAPIFilmInterface[]>}
   */
  public async getAllFilms (): Promise<SWAPIFilmInterface[]> {
    let response = await axios.get(this.PROXY_URL + this.FILMS_API_URL)
    let data: SWAPIFilmsInterface = response.data
    let results: SWAPIFilmInterface[] = [ ...data.results ]

    while (data.next !== null) {
      response = await axios.get(this.PROXY_URL + data.next)
      data = response.data
      results = results.concat(data.results)
    }

    return [ ...results ]
  }

  /**
   * - Função que realiza uma requisição HTTP GET à url https://swapi.co/api/planets, manipula seus
   * resultados para retornar um Array contendo todos os Planets disponíveis pela API.
   *
   * @async
   * @function
   * @returns {Promise<SWAPIPlanetInterface[]>}
   */
  public async getAllPlanets (): Promise<SWAPIPlanetInterface[]> {
    let response = await axios.get(this.PROXY_URL + this.PLANETS_API_URL)
    let data: SWAPIPlanetsInterface = response.data
    let results: SWAPIPlanetInterface[] = [ ...data.results ]

    while (data.next !== null) {
      response = await axios.get(this.PROXY_URL + data.next)
      data = response.data
      results = results.concat(data.results)
    }

    return [ ...results ]
  }
}

export default new SWAPIService()
