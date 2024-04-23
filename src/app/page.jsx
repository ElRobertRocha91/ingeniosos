import Carousel from "../components/Carousel/Carousel";
import About from "../components/About/About";

// Load the courses of database from Server-Side Rendering 
async function loadCourses() {
  const res = await fetch("http://localhost:3000/api/cursos");
  // console.log(res);
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  
  return data;
}

export default async function Home() {
  const courses = await loadCourses();
  return (
    <main className="h-screen">
      <div className="absolute w-full h-full">
        <h1>Ingeniosos</h1>
        <div>{courses}</div>
      </div>
      <Carousel />
      <About />
    </main>
  );
}
