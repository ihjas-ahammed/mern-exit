import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/get")
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => fetchBlogs())
      .catch(err => console.log(err));
  };

  const handleUpdate = (id) => {
    const newTitle = prompt("Enter new title:");
    if (!newTitle) return;
    
    axios.put(`http://localhost:3001/update/${id}`, { title: newTitle })
      .then(() => fetchBlogs())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map(blog => (
        <div key={blog._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          {blog.img_url && <img src={blog.img_url} alt={blog.title} width="100" />}
          <button onClick={() => handleUpdate(blog._id)}>Update</button>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
