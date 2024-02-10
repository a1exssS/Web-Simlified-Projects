import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import cls from './ImageSlider.module.css'

export interface imagesProps {
	images: {
		url: string;
		alt: string
	}[]
}

export const ImageSlider = ({ images }: imagesProps) => {

	const [imageIndex, setImageIndex] = useState(0)

	const showNext = () => {
		if (images.length - 1 <= imageIndex) {
			return setImageIndex(0)
		}
		setImageIndex((next) => next + 1)
	}
	const showPrev = () => {
		if (imageIndex <= 0) {
			return setImageIndex(images.length - 1)
		}
		setImageIndex((prev) => prev - 1)
	}

	return (
		<section style={{ width: "100%", height: "100%", position: "relative" }}>
			<div className={cls.ImageBoxHolder}>
				{images.map(({ url, alt }) => (
					<img style={{ translate: `${-100 * imageIndex}%` }} loading='lazy' key={url} className={cls.images} src={url} alt={alt} />
				))}
			</div>
			<button aria-label='Go to previous image' onClick={showPrev} className={cls.imageButtons} style={{ left: 0 }}><ArrowBigLeft aria-hidden /></button>
			<button aria-label='Go to next image' onClick={showNext} className={cls.imageButtons} style={{ right: 0 }}><ArrowBigRight aria-hidden /></button>
			<div className={cls.SliderButtons}>
				{images.map((_, index) => (
					<button aria-label={`Go to ${index + 1} image`} className={cls.SliderButton} key={index} onClick={() => setImageIndex(index)}>{index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}</button>
				))}
			</div>
		</section>
	)
}
