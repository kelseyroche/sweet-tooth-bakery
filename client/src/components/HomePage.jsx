import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "homePage"][0]{
          headline,
          heroImage{
            asset->{
              url
            }
          }
        }`
      )
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading homepage content...</p>;

  return (
    <div className="homepage">
      <h1>{data.headline}</h1>
        {data.heroImage?.asset?.url && (
        <img src={data.heroImage.asset.url} alt="Bakery hero" />
        )}
    </div>
  );
}