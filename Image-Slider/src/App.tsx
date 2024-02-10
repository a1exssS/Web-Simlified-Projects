import React from 'react'
import { ImageSlider } from './ImageSlider'
import anime1 from './images/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjirō-hd-wallpaper-preview.jpg'
import anime2 from './images/anime-anime-girls-original-characters-short-hair-wallpaper-preview.jpg'
import anime3 from './images/digital-art-artwork-women-cityscape-wallpaper-preview.jpg'
import anime4 from './images/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview.jpg'
import cls from './App.module.css'

const IMAGES = [
	{ url: anime1, alt: 'anime image 1' },
	{ url: anime2, alt: 'anime image 2' },
	{ url: anime3, alt: 'anime image 3' },
	{ url: anime4, alt: 'anime image 4' }]

export const App = () => {
	return (
		<div className={cls.ImageBox}>
			<ImageSlider images={IMAGES} />
		</div>
	)
}
