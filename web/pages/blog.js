import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Menu from "../components/shared/Menu";
import Link from "next/link";
import groq from "groq";
import client from "../client";

const Blog = props => {
  const { posts = [] } = props;
  return (
    <BaseLayout>
      <div className='blog-menu'>
        <Container>
          <Row>
            <Col sm='12'>
              <Menu />
            </Col>
          </Row>
        </Container>
      </div>
      <section className='p-50'>
        <Container>
          <Row>
            <Col sm='12'>
              <h2 className='ml-30'>Blog</h2>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
              {posts.map(
                ({ _id, title = "", slug = "", _updatedAt = "" }) =>
                  slug && (
                    <li key={_id}>
                      <Link href='/post/[slug]' as={`/post/${slug.current}`}>
                        <a>{title}</a>
                      </Link>{" "}
                      ({new Date(_updatedAt).toDateString()})
                    </li>
                  )
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col md='8'></Col>
          <Col md='4'></Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

Blog.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
});

export default Blog;
