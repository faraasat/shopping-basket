import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";
import { Container, Icon } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStoreData } from "../../store/shop.reducer";
import "./item-details.styles.css";
import HomeIcon from "@material-ui/icons/ArrowForward";

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
                                  draggable={false}
                                />
                              </MDBView>
                            </MDBCarouselItem>
                          );
                        })}
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </div>
                  <div className="item-details-inner__details">
                    <p className="item-details-inner__details-name">
                      {value.product_name}
                    </p>
                    <p className="item-details-inner__details-brand">
                      {value.product_brand}&nbsp;&nbsp;&nbsp;
                      <a
                        href={value.product_url}
                        target="_blank"
                        rel="noreferrer"
                        className="item-details-inner__details-brand__outgo"
                      >
                        <Icon component={HomeIcon} />
                      </a>
                    </p>
                    <p className="item-details-inner__details-price">
                      <span>Unit Price: </span>
                      {value.product_price}
                    </p>
                    <p className="item-details-inner__details-sku">
                      <span>SKU: </span>
                      {value.sku}
                    </p>
                    <p className="item-details-inner__details-available">
                      <span>Availability: </span>
                      {value.product_available_inventory}
                    </p>
                    <p className="item-details-inner__details-rating">
                      <span>Ratings: </span>
                      {value.product_rating}
                    </p>
                    <p className="item-details-inner__details-model">
                      <span>Model Number: </span>
                      {value.product_model_number
                        ? value.product_model_number
                        : "Not Available"}
                    </p>
                    <p className="item-details-inner__details-description">
                      <span>Product Description: </span>
                      {value.product_description}
                    </p>
                    <p className="item-details-inner__details-contents">
                      <span>Product Contents: </span>
                      {value.product_contents}
                    </p>
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

//     "product_category": "Home > Home Décor > Photo Frames",
//     "product_brand": "Koala Superstore",
//     "product_name": " 6-inch Photo Frame Lovely Bear Painted Photoframe and Home Decoration, Blue ",
//     "product_price": "51.40",
//     "sku": "B07DXHZH1C",
//     "product_url": "https://www.amazon.com.au/6-inch-Lovely-Painted-Photoframe-Decoration/dp/B07DXHZH1C/",
//     "product_description": "Ships from Hongkong. These picture frames look wonderful as a statement piece in any room of your home. Perfect to decorate your home/office/corridor/pub/coffee shop. Transform the look of your home or office with this traditional frame. A excellent gift send to friends,families. You deserve to have it.",
//     "product_available_inventory": "999999999",
//     "product_image_url": "https://images-na.ssl-images-amazon.com/images/I/51pC6ZDYrdL._.jpg|https://images-na.ssl-images-amazon.com/images/I/51mePnbVP0L._.jpg",
//     "product_model_number": "",
//     "product_tags": " 6-inch Photo Frame Lovely Bear Painted Photoframe and Home Decoration, Blue ",
//     "product_contents": " Size: 14.5*7CM/5.7*2.7inch. Material: Resin. These picture frames look wonderful as a statement piece in any room of your home. Have a design sense of beauty. A excellent gift send to friends,families. Photo frame can help you carry more beautiful memories. Loading EDP related metadata ",
//     "product_rating": "13a29d5ab2463799f82515bd6027660b"
