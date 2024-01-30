const Blog = (props) => {
  const { blogs } = props;
  return (
    <div>
      {blogs.map((blog) => (
        <Card blog={blog} />
      ))}
    </div>
  );
};
export default Blog;
export const getStaticsProps = async () => {
  const blog = await fetch("https://dev.to/api/articles?top=4&per_page=15");
  const blogs = await blog.json();
  const path=blogs[0].path;

  return {
    props: { blogs },
  };
};
