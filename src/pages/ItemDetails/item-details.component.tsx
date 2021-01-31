import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStoreData } from "../../store/shop.reducer";
import "./item-details.styles.css";

const ItemDetailsComponent = () => {
  const { exploreItemId } = useParams();
  const { data, loading } = useSelector(selectStoreData);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="item-details__alignment">
      {Object.entries(data)
        .filter((datum: any) => {
          return datum[1].unique_id.includes(exploreItemId);
        })
        .map(([key, value]: [any, any]) => {
          const images = value.product_image_url.split("|");
          return (
            <div key={key}>
              <Container>
                <div className="item-details-inner__alignment">
                  <div className="item-details-inner__item">
                    <MDBCarousel
                      activeItem={1}
                      length={images.length}
                      showControls={true}
                      showIndicators={true}
                      className="z-depth-1"
                    >
                      <MDBCarouselInner>
                        {console.log(images)}
                        {images.map((img: any, index: number) => {
                          console.log(img, index);
                          return (
                            <MDBCarouselItem key={index} itemId={index + 1}>
                              <MDBView>
                                <img
                                  className="d-block w-100"
                                  src={img}
                                  alt={value.product_name}
                                />
                              </MDBView>
                            </MDBCarouselItem>
                          );
                        })}
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </div>
                  <div>
                    <h1>Hello World</h1>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
    </div>
  );
};

export default ItemDetailsComponent;
