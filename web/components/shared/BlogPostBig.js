import React, { Component } from "react";

import Link from "next/link";

const BLOG_POSTS_PATH = "../../content/blogs";

const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../../content/blogs", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/blogs/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class BlogPostBig extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }
  render() {
    const { postsList } = this.props;
    return (
      <>
        {postsList.map(post => {
          return (
            <ul>
              <Link href={`blog/${post.slug}`}>
                <a>
                  <img src={post.attributes.thumbnail} />
                  <h2>{post.attributes.title}</h2>
                  <p>{post.attributes.category}</p>
                </a>
              </Link>
            </ul>
          );
        })}
      </>
    );
  }
}
