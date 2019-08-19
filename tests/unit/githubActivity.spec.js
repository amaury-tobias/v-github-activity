import { expect } from 'chai'
//import { shallowMount } from '@vue/test-utils'

import { hash, branch } from '../../src/utils/FormatTools'

describe('Format Tools hash() & branch()', () => {
  it('Format Tools Works Fine', () => {
    expect(hash('....////')).to.equal('..////')
    expect(branch('refs/heads/TEST')).to.equal('TEST')
  })
})
