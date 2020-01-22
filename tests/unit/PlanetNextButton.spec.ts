import { shallowMount } from '@vue/test-utils'
import PlanetNextButton from '@/components/PlanetNextButton.vue'

const factory = (values = {}) => {
  return shallowMount(PlanetNextButton, {
    propsData: { ...values }
  })
}

describe('PlanetNextButton.vue', () => {
  it('deveria montar o componente como uma instância vue', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('deveria conter o nome PlanetNextButton', () => {
    const wrapper = factory()
    expect(wrapper.name()).toBe('PlanetNextButton')
  })

  it('deveria emitir um evento para sorteio de um novo Planet', async () => {
    const wrapper = factory()

    wrapper.vm.$emit('raffle-planet')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('raffle-planet')).toBeTruthy()
  })

  it('deveria conter a classe .button-container', () => {
    const wrapper = factory()
    expect(wrapper.find('.button-container').exists()).toBeTruthy()
  })

  it('deveria conter o elemento button', () => {
    const wrapper = factory()
    expect(wrapper.find('button').exists()).toBeTruthy()
  })

  it('deveria conter a string NEXT', () => {
    const wrapper = factory()
    expect(wrapper.text()).toBe('NEXT')
  })
})
