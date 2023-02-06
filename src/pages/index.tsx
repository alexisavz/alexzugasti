import * as React from "react";
import Layout from "../components/layout/layout";
import "./index.scss";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <div className="content">
        <p className="text-top">Hi I am</p>
        <h1 className="text-title">Alex Zugasti</h1>
        <p className="text-subtitle">I build amazing ideas</p>
        <p className="text-description">
          I am an enthusiast. Always trying to learn about new technologies and
          tools. Lately, I’ve been focusing a lot on web development, but I’m
          interested in a lot of different things. Some of my other projects may
          also include electronics and robotics. With a lot of different
          interests I’ve been wanting to make a place to recompile all of the
          things I work on. So, feel free to use this space to know and ask more
          about myself! Also, I commission websites!
        </p>
          <Link to="/contact">
            <button className="button">
            Contact Me!
            </button>
          </Link>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Alex Zugasti</title>;

export default IndexPage;
