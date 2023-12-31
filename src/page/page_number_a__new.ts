import { type route_ctx_T } from 'relysjs'
import { site__page__post_count_ } from '../site/index.js'
export function page_number_a__new(ctx:route_ctx_T, numberOfPosts:number) {
	const numberOfPages = numberOfPosts / Number(site__page__post_count_(ctx))
	let pageNumbers:number[] = []
	for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
		pageNumbers = [...pageNumbers, i]
	}
	return pageNumbers
}
