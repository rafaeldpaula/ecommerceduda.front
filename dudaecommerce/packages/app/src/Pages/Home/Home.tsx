import * as Style from "./style";
import RMCarousel from "react-multi-carousel";
import { useRef } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export interface HomeProps {
  adMaterials: { title: string; image: string; link: string }[];
}

const Home: React.FC<HomeProps> = ({ adMaterials }) => {
  const carouselRef = useRef<RMCarousel>(null);
  const next = () => {
    if (carouselRef) {
      const nextSlide = (carouselRef.current?.state?.currentSlide ?? 0) + 1;
      carouselRef.current?.next(nextSlide);
    }
  };

  const previous = () => {
    const previousSlide = (carouselRef.current?.state?.currentSlide ?? 0) - 1;
    carouselRef.current?.previous(previousSlide);
  };
  return (
    <>
      <Style.Container>
        <Style.GroupButtons>
          <Style.Arrow onClick={previous}> {"< "} </Style.Arrow>
          <Style.Arrow onClick={next}> {" >"} </Style.Arrow>
        </Style.GroupButtons>
      </Style.Container>
      <Style.StyledCarousel
        arrows={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        centerMode={true}
        slidesToSlide={1}
        ref={carouselRef}
      >
        {adMaterials.map((adMaterial, index) => (
          <div style={{ padding: "0 15px", overflow: "hidden" }} key={index}>
            <a
              href={adMaterial.link}
              style={{ display: "flex", cursor: "pointer" }}
            >
              <img
                src={adMaterial.image}
                alt="default"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  position: "relative",
                }}
              />
            </a>
          </div>
        ))}
      </Style.StyledCarousel>
    </>
  );
};

export default Home;
