import { z } from 'astro:content'
export interface Post {
	id:string
	slug:string
	body:string
	collection:string
	data:{
		title:string
		description:string
		pubDate:Date // astro compatibility
		updated_date?:Date
		hero_image?:string
		tags:string[]
		slug?:string
	}
}
