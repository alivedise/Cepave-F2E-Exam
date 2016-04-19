import moveArrayIndexToFirst from '../src/moveArrayIndexToFirst'
import {assert} from 'chai'

describe('#Test moveArrayIndexToFirst', ()=> {
  let arr
  before(() => {
    arr = [1, 2, 3, 4, 5]
  })

  it('basic index', ()=> {
    assert.deepEqual(moveArrayIndexToFirst(arr, 2), [3, 1, 2, 4, 5])
  })

  it('allow array argument', ()=> {
    assert.deepEqual(moveArrayIndexToFirst(arr, [2]), [3, 1, 2, 4, 5])
  })

  it('allow array argument2', ()=> {
    assert.deepEqual(moveArrayIndexToFirst(arr, [1, 3]), [2, 4, 1, 3, 5])
  })

  it('should be throw error if doesn\'t match any index', ()=> {
    assert.throws(()=> {
      moveArrayIndexToFirst(arr, -1)
    }, /has no match index/)
  })
})
