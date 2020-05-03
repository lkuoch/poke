import React, { useEffect } from "react";
import Swiper from "swiper";

function Gallery({ imageLinks }: { imageLinks: Array<string> }) {
  // Instantiate Gallery
  useEffect(() => {
    if (imageLinks)
      new Swiper(".swiper-container", {
        grabCursor: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true
      });
  }, [imageLinks]);

  return (
    <div className="swiper-container ui segment">
      <div className="swiper-wrapper">
        {imageLinks!.map((x, i) => (
          <div key={i} className="swiper-slide">
            <img
              src={x}
              alt="pokemon"
              onError={(x: any) =>
                x.target.parentNode.parentNode && x.target.parentNode.parentNode.removeChild(x.target.parentNode)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Gallery);
