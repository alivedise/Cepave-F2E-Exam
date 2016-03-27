const omitFuncs = require('../src/omitFuncs')
const {assert} = require('chai')

describe('#Test omitFuncs', ()=> {
  let props
  beforeEach(()=> {
    props = {
      a: 1,
      b: 2,
      deepFunc: {
        a() {},
        b() {},
        c: 1,
      },
      c() {},
      d() {},
    }
  })

  it('should be omitted funcs with deep', ()=> {
    assert.deepEqual(omitFuncs(props), {
      a:1,
      b:2,
      deepFunc: {
        c: 1
      }
    })
  })

  it('should be omitted funcs with deep2', ()=> {
    assert.deepEqual(omitFuncs({
      x: 'x',
      y: 'y',
      xy: {
        zz() {},
      },
      z() {},
    }), {
      x: 'x',
      y: 'y',
      xy: {}
    })
  })

  it('should be omitted funcs deep with null and undefined', ()=> {
    assert.deepEqual(omitFuncs({
      x: 'x',
      y: 'y',
      xy: {
        zz() {},
      },
      z() {},
      ox: undefined,
      xx: null,
    }), {
      x: 'x',
      y: 'y',
      xy: {},
      ox: undefined,
      xx: null,
    })
  })

  it('it doesnt effect the origin props', ()=> {
    const newProps = omitFuncs(props)
    newProps.deepFunc.a = 'a'
    newProps.deepFunc.b = 'b'

    assert(props.a === 1)
    assert(props.b === 2)
    assert.isFunction(props.c)
    assert.isFunction(props.d)
    assert.isFunction(props.deepFunc.a)
    assert.isFunction(props.deepFunc.b)
  })
})
