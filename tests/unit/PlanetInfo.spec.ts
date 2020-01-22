import { shallowMount } from '@vue/test-utils'
import PlanetInfo from '@/components/PlanetInfo.vue'
import PlanetInterface from '@/interfaces/PlanetInterface'

const factory = (values = {}) => {
  return shallowMount(PlanetInfo, {
    propsData: { ...values }
  })
}

describe('Planetinfo.vue', () => {
  const planet: PlanetInterface = {
    name: 'Test',
    population: 1,
    climate: ['test'],
    terrain: ['test'],
    featuredInFilms: ['test']
  }

  const classes: string[] = ['.card', '.card-content', '.list-info']
  const elements: string[] = ['h4', 'p', 'span', 'ul', 'li', 'label', 'input']

  it('deveria montar o componente como uma instância vue', () => {
    const wrapper = factory({ planet })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('deveria conter o nome PlanetInfo', () => {
    const wrapper = factory({ planet })
    expect(wrapper.name()).toBe('PlanetInfo')
  })

  it('deveria montar o componente com a prop passada', () => {
    const wrapper = factory({ planet })
    expect(wrapper.props('planet')).toBe(planet)
  })

  it('deveria contar as classes .card, .card-content e list-info', () => {
    const wrapper = factory({ planet })

    for (const _class of classes) {
      expect(wrapper.find(_class).exists()).toBeTruthy()
    }
  })

  it('deveria conter os elementos de uma lista', () => {
    const wrapper = factory({ planet })

    for (const element of elements) {
      expect(wrapper.contains(element)).toBeTruthy()
    }
  })
})
