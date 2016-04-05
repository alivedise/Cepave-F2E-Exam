const querystringParser = require('../src/querystringParser')
const {assert} = require('chai')

describe('#Test querystringParser', ()=> {

  it('parser url with string array/object', ()=> {
    const url = 'http://localhost:8080/test?a=1?&b={a:"1",b:2}&c=[1,2]#hash'
    assert.deepEqual(querystringParser(url), {
      a: '1?',
      b: {a: '1', b: 2},
      c: [1, 2]
    })
  })

  it('parser url 2', ()=> {
    const url = 'http://localhost:8080/test?x=1&y=2#hash'
    assert.deepEqual(querystringParser(url), {
      x: '1',
      y: '2',
    })
  })

  it('parser url with only ?', ()=> {
    const url = 'http://localhost:8080/test?'
    assert.deepEqual(querystringParser(url), {
    })
  })

  it('parser url with no querystring', ()=> {
    const url = 'http://localhost:8080/test'
    assert.deepEqual(querystringParser(url), {
    })
  })

  it('parser url normal', ()=> {
    const url = 'http://localhost:8080/test?a=?1&b=2'
    assert.deepEqual(querystringParser(url), {
      a: '?1',
      b: '2',
    })
  })
})
