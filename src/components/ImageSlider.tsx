import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/vendor/carousel';
import Image, { StaticImageData } from 'next/image';

type ImageSliderProps = {
  images: StaticImageData[];
};

const ImageSlider = (props: ImageSliderProps) => {
  const { images } = props;

  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i}>
            <Image
              className="rounded-xl border border-zinc-800"
              src={image}
              alt="image"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageSlider;
