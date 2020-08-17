import { longestSubstring } from './index'

it('works', () => {
	expect(longestSubstring('aaabbcccc', 3)).toEqual(4)
	expect(longestSubstring('aaabbccc', 3)).toEqual(3)
	expect(longestSubstring('ababb', 3)).toEqual(0)
	expect(longestSubstring('abaaabb', 3)).toEqual(7)
	expect(longestSubstring('bbccccbb', 4)).toEqual(8)
	expect(longestSubstring('bbaaacbd', 3)).toEqual(3)
})
