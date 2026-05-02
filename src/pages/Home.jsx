import {
  Hero,
  Products,
  BlogPost,
  CustomerReviews,
} from "../components/homeComponents";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <BlogPost />
      <CustomerReviews />
    </>
  );
}
