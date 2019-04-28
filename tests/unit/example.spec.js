import { shallowMount } from '@vue/test-utils'
import Show from '@/components/Show.vue'
import Home from '@/views/Home.vue'

describe('Show.vue', () => {
  const items = [
    {
      id: 1,
      stock: 15,
      color: 'green',
      productImage: 'greensocks.png'

    },
    {
      id: 2,
      stock: 0,
      color: 'blue',
      productImage: 'bluesocks.png'

    }
  ]
  let wrapper
  const assert = require('chai').assert
  beforeEach(function () {
    wrapper = shallowMount(Show, { propsData: { items } })
  })
  it('check the method gets a propper url for the images', () => {
    assert.exists(wrapper.vm.getImgUrl('greensocks.png'), 'the url is not conected to an existing image')
  })
  it('check if the img value changes after selecting another color', () => {
    wrapper.find('#blue').trigger('click')
    assert.equal(wrapper.vm.img, 'bluesocks.png', 'not correct image afther selecting blue color')
    wrapper.find('#green').trigger('click')
    assert.equal(wrapper.vm.img, 'greensocks.png', 'not correct image afther selecting green color')
  })
  it('check if we generate a color button for every subcategory in the item', () => {
    assert.equal(items.length, wrapper.findAll('.color-box').length, 'Not a button for every item subcategory')
  })
})
describe('Home.vue', () => {
  let wrapper
  const assert = require('chai').assert
  beforeEach(function () {
    wrapper = shallowMount(Home)
  })
  it('addtocart button works properly', () => {
    wrapper.vm.selected = 1
    assert.equal(wrapper.vm.cart, 0, 'the cart does not start empty')
    wrapper.vm.updateCart()
    assert.equal(wrapper.vm.cart, 0, 'you can add to cart products that are not available')
    wrapper.vm.selected = 0
    wrapper.vm.updateCart()
    assert.equal(wrapper.vm.cart, 1, 'cart is not being modified afther click')
    assert.decreasesBy(wrapper.vm.updateCart, wrapper.vm.inventory.socks[0], 'stock', 1,
      'stock is not decreasing by one after adding to cart')
  })
  it('selection updates properly', () => {
    wrapper.vm.selected = 0
    wrapper.vm.updateSelection(1)
    assert.equal(wrapper.vm.selected, 1, 'selection is not updated')
  })
})
