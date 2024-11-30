import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import useSWR from "swr";

export default function ProductDetail() {
  const params = useParams();
  console.log("params", params);
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
  const product = data?.data;
  console.log("data ha ye mera", product);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main>
      <div className="product min-h-[500px] w-full flex  gap-4 container-x mt-20">
        <div className="product-images flex gap-6 items-center justify-center w-[60%] min-h-[500px]  ">
         {product?.images?.length > 1 ? <div className="w-[170px] h-full  ">
            <div className="w-full flex flex-col gap-3 ">
              {product?.images?.map((image, i) => (
                <img
                 key={i}
                  src={image}
                  alt=""
                  className="bg-secondary rounded"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div> : null}
          <div className="h-full w-[470px] bg-secondary rounded flex items-center">
            <img
              src={selectedImage || product?.images[0]}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="product-detail w-[40%] min-h-[500px]  flex flex-col gap-1">
          <h2 className="text-lg font-semibold">{product?.title}</h2>
          <div className="flex text-center items-center text-[#FFAD33] gap-2 ">
          <ReactStars
            count={5}
            value={product?.rating}
            edit={false}
            size={20}
            color2={"#FFAD33"}
          />
          <span className=" text-gray-500 font-semibold text-sm">
            ({product?.rating})
          </span>
        </div>
        <p>{`$${product?.price}`}</p>
        <p className="text-sm mt-3 max-w-96">{product?.description}</p>
        </div>
      </div>
    </main>
  );
}
