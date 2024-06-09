let user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    age: 30,
  };
  
  let admin: {
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
  } = {
    name: "Taylor Otwell",
    email: "taylorotwell@laravel.com",
    age: 38,
    isAdmin: true,
  };
  
  let post: {
    title: string;
    body: string;
    author: string;
    likes: number;
    isPublished: boolean;
    imageUrl?: string;
  } = {
    title: "Post title",
    body: "Post body",
    author: "John Doe",
    likes: 5,
    isPublished: true,
    imageUrl: "https://example.com/post/image.png"
  };
  