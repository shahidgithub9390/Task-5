import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

const APIIntegration = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    const fetchPhotos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setPhotos(data);
    };

    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data);
    };

    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    const fetchComments = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      setComments(data);
    };

    const fetchAlbums = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      setAlbums(data);
    };

    fetchPosts();
    fetchPhotos();
    fetchTodos();
    fetchUsers();
    fetchComments();
    fetchAlbums();
  }, []);

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <div className="flex justify-center mb-4">
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 mr-2 ${activeTab === 'posts' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 mr-2 ${activeTab === 'photos' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('photos')}
        >
          Photos
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 mr-2 ${activeTab === 'todos' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('todos')}
        >
          Todos
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 mr-2 ${activeTab === 'users' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 mr-2 ${activeTab === 'comments' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('comments')}
        >
          Comments
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 ${activeTab === 'albums' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setActiveTab('albums')}
        >
          Albums
        </button>
      </div>

      {activeTab === 'posts' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="bg-gray-100 p-4 mb-2 rounded-lg">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'photos' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Photos</h2>
          <ul>
            {photos.map((photo) => (
              <li key={photo.id} className="bg-gray-100 p-4 mb-2 rounded-lg">
                <h3 className="text-lg font-bold">{photo.title}</h3>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'todos' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Todos</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="bg-gray-100 p-4 mb-2 rounded-lg">
                <h3 className="text-lg font-bold">{todo.title}</h3>
                <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'users' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="bg-gray-100 p-4 mb-2 rounded-lg">
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'comments' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-4 mb-2 rounded-lg">
                <h3 className="text-lg font-bold">{comment.name}</h3>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'albums' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Albums</h2>
          <ul>
            {albums.map((album) => (
              <li key={album.id} className="bg-gray-100 p-4 mb-2 rounded-lg">
                <h3 className="text-lg font-bold">{album.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default APIIntegration;