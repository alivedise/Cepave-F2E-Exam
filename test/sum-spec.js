import sum from '../src/sum'
import {assert} from 'chai'

describe('Test #sum', ()=> {
  it('Basic sum', ()=> {
    assert.strictEqual(sum(2, 5), 7)
  })

  it('sum return as Function', ()=> {
    assert.strictEqual(sum(2)(5), 7)
  })

  it('Basic sum with multi arguments', ()=> {
    assert.strictEqual(sum(2, 5, 3, 10), 20)
  })

  it('Basic sum with array arguments', ()=> {
    assert.strictEqual(sum([2, 5, 3, 10]), 20)
  })
})
