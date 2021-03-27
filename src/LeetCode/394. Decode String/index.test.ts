import { decodeString } from './index'

it('works', () => {
  expect(decodeString('1[a]2[bb]3[x]')).toEqual('abbbbxxx')
  expect(decodeString('3[a2[c]]')).toEqual('accaccacc')
})
