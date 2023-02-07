import * as React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import RenderDate from "../components/renderDate/renderDate";
import "./experience.scss";

const ExperiencePage = ({ data }: { data: any }) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-title">Experience</h1>
        <h3 className="text-sub">
          Here is some of my previous and current experience out there!
        </h3>
        <div>
          {data.allSanityExperiences.nodes.map((node: any) => {
            return (
              <>
                <div className="experience">
                  <h3 className="experience-title">{node.title}</h3>
                  <RenderDate data={node.startedAt} until={"month"} text={"Started At: "}/>
                  {node.endedAt &&
                  <RenderDate data={node.startedAt} until={"month"} text={"Ended At: "}/>}
                  <PortableText value={node._rawContent} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Experience</title>;

export default ExperiencePage;

export const query = graphql`
  query ExperiencesQuery {
    allSanityExperiences(sort: {startedAt: DESC}) {
      nodes {
        _rawContent
        title
        startedAt
        endedAt
      }
    }
  }
`;
