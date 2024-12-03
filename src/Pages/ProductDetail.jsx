import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import useSWR from "swr";
  
import { IoHeartOutline } from "react-icons/io5";


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
  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(product?.minimumOrderQuantity)
  }, [data]);

  return (
    <main>
      <div className="product min-h-[500px] w-[calc(100%-28px)] flex mx-7 mt-20">
        <div className="product-images flex gap-6 items-center justify-center w-[60%] min-h-[500px] ">
          {product?.images?.length > 1 ? (
            <div className="w-[20%] h-full  ">
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
            </div>
          ) : null}
          <div className="h-full w-[470px] bg-secondary rounded flex items-center justify-center">
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
          <p className="text-2xl">{`$${(product?.price * count).toFixed(2)}`}</p>
          <p className="text-sm mt-3 max-w-[400px] border-b border-y-gray-400 pb-4">
            {product?.description}
          </p>
          <div className="flex gap-3 items-center !mt-5">
            <div className="w-40 h-11 border border-gray-400 rounded flex ">
              <button className="w-[40%] text-3xl border-r border-r-gray-400" onClick={()=>{
                if(count < 2 || count <= product?.minimumOrderQuantity) return;
                setCount(count-1)}}>
                -
              </button>
              <p className="w-[60%] text-center text-xl font-medium pt-2">{count}</p>
              <button className="w-[40%] bg-primary text-3xl text-white" onClick={()=>setCount(count+1)}>
                +
              </button>
            </div>
            <div>
              <button className="w-44 h-11 bg-primary rounded text-white">
                Buy Now
              </button>
            </div>
            <div>
               <a href="" className="w-10 h-10 text-2xl icons flex items-center justify-center border border-gray-400 rounded">
                  <IoHeartOutline className=" text-2xl " />
                  </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
