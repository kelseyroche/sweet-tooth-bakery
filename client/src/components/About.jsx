// import { useEffect, useState } from "react";
// import { client } from "../sanityClient";

// function About() {
//   const [aboutData, setAboutData] = useState(null);

//   useEffect(() => {
//     client
//       .fetch(`*[_type == "aboutPage"][0]{
//         title,
//         body,
//         image {
//           asset -> {
//             url
//           }
//         }
//       }`)
//       .then((data) => setAboutData(data))
//       .catch(console.error);
//   }, []);

//   if (!aboutData) return <p>Loading about content...</p>;

//   return (
//     <div className="about">
//       <h2>{aboutData.title}</h2>
//       <p>{aboutData.body}</p>
//       {aboutData.image?.asset?.url && (
//         <img src={aboutData.image.asset.url} alt="About us" width="300" />
//       )}
//     </div>
//   );
// }

// export default About;

import { useEffect, useState } from "react";
import { client } from "../sanityClient";

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "aboutPage"][0]{
        title,
        body,
        image {
          asset -> {
            url
          }
        }
      }`)
      .then((data) => setAboutData(data))
      .catch(console.error);
  }, []);

  if (!aboutData) return <p>Loading about content...</p>;

  return (
    <div className="about">
      <h2>{aboutData.title}</h2>
      {aboutData.body ? (
        <p>{aboutData.body}</p>
      ) : (
        <p><em>No about text provided yet.</em></p>
      )}
      {aboutData.image?.asset?.url && (
        <img src={aboutData.image.asset.url} alt="About us" width="300" />
      )}
    </div>
  );
}

export default About;