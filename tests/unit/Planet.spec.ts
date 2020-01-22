import { shallowMount } from '@vue/test-utils'
import Planet from '@/components/Planet.vue'
import PlanetInfo from '@/components/PlanetInfo.vue'
import PlanetNextButton from '@/components/PlanetNextButton.vue'
import PlanetInterface from '@/interfaces/PlanetInterface'

const factory = (values = {}) => {
  return shallowMount(Planet, {
    propsData: { ...values }
  })
}

describe('Planetinfo.vue', () => {
  const planets: PlanetInterface[] = [
    {
      name: 'Test',
      population: 1,
      climate: ['test'],
      terrain: ['test'],
      featuredInFilms: ['test']
    }
  ]

  it('deveria montar o componente como uma instância vue', () => {
    const wrapper = factory({ planets })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('deveria conter o nome Planet', () => {
    const wrapper = factory({ planets })
    expect(wrapper.name()).toBe('Planet')
  })

  it('deveria conter o componente PlanetInfo', () => {
    const wrapper = factory({ planets })
    const planetInfo = wrapper.find(PlanetInfo)
    expect(planetInfo.is(PlanetInfo)).toBe(true)
  })

  it('deveria conter o componente PlanetNextButton', () => {
    const wrapper = factory({ planets })
    const planetNextButton = wrapper.find(PlanetNextButton)
    expect(planetNextButton.is(PlanetNextButton)).toBe(true)
  })
})
