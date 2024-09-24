const BlogPost = ({ title, excerpt }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{excerpt}</p>
    <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">Read more</a>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "The Importance of Prototyping for Startups",
      excerpt: "Learn why prototyping is crucial for startups and how it can save you time and money in the long run."
    },
    {
      title: "How to Choose the Right MVP Strategy",
      excerpt: "Discover different MVP strategies and find out which one is best suited for your startup's needs."
    },
    {
      title: "Design Thinking: What Startups Need to Know",
      excerpt: "Explore the principles of design thinking and how they can be applied to create innovative solutions for your startup."
    },
    {
      title: "Product Testing: A Startup's Guide",
      excerpt: "Get insights into effective product testing methods that can help validate your ideas and improve your offerings."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Stay Ahead of the Curve</h1>
      <p className="text-xl mb-12 text-center">Explore our blog for industry insights, product development tips, and startup success stories.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
    </div>
  );
};

export default Blog;