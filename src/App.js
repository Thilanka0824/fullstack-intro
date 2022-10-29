import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import BlogList from "./Components/BlogList";
import BlogListCard from "./Components/BlogListCard";
import OptionBar from "./Components/OptionBar";

const sampleBlogs = [
  {
    createdAt: "2022-06-30T04:03:07.069Z",
    author: "Marion Roberts DDS",
    text: "Vitae quaerat nostrum dolor. Eius non totam autem unde ea consequatur quia. Laborum exercitationem sed.\nQui quam corrupti voluptatem autem. Voluptatum in et voluptas quisquam id doloremque nostrum unde. Consequuntur ea qui.\nSed consequuntur voluptas nemo ea laborum neque distinctio quo iusto. Temporibus aut quisquam. Laboriosam fugit eum sint corporis sequi minus iste molestiae quos. Quae aut earum quasi facilis hic et.",
    title: "sapiente",
    id: "1",
  },
  {
    createdAt: "2022-06-30T04:16:20.950Z",
    author: "Dr. Martha Herman",
    text: "Et consequatur earum et in quam. Tenetur ipsam dolores. Eius aperiam est.\nRerum laborum ut. Accusantium amet qui impedit laudantium. Aut et minus perspiciatis voluptates. Mollitia modi maiores non. Qui animi assumenda distinctio repellendus reiciendis tenetur esse quia magnam. Quo natus minus sed.\nEa quod nulla hic est et libero enim et. Occaecati voluptas ut minus impedit aperiam. Dolore atque cumque ut accusamus enim. Dicta qui minima et doloremque quam veniam voluptatibus. Nihil repellat et. Laboriosam quia voluptatem.",
    title: "nemo",
    id: "2",
  },
  {
    createdAt: "2022-06-30T09:57:45.633Z",
    author: "Francis McDermott",
    text: "Consequatur nostrum adipisci doloribus commodi. Dolore enim minus. Assumenda sint molestiae. Voluptatem repellat ad. Quasi incidunt accusantium ipsum voluptate aut modi.\nSed id labore recusandae commodi. Ullam neque ab. At similique veritatis. Voluptas similique deserunt nihil praesentium qui. Dolore velit ea doloremque quae quo modi.\nOccaecati id nobis architecto ut beatae et. Consequuntur aut eveniet cum optio. Non dolores asperiores optio consequatur sequi.",
    title: "omnis",
    id: "3",
  },
  {
    createdAt: "2022-06-30T01:29:57.446Z",
    author: "Miss Rickey Schmidt",
    text: "In corrupti adipisci. Qui eaque voluptatem at. Libero et omnis ullam. Soluta quas provident iste autem quae saepe et dolor.\nDolores quos voluptate quibusdam qui harum inventore. Quae pariatur reprehenderit dignissimos non qui itaque veniam quod magni. Deserunt veritatis qui natus eligendi. Aut adipisci eum voluptatem libero similique. Aut delectus nam. Ullam dolor nostrum consectetur aut sit illum magni.\nCum nemo harum earum sed. Nobis et in cumque placeat. Odio alias sint ab. Ratione amet fuga vitae aut dolorum.",
    title: "expedita",
    id: "4",
  },
  {
    createdAt: "2022-06-29T19:17:08.325Z",
    author: "Marcella Jacobson",
    text: "Voluptatibus laboriosam culpa ut aut ea ipsum alias itaque. Placeat qui et. Quam ipsa non unde fugiat cupiditate dignissimos.\nUt ut rerum veniam sit deserunt. Molestiae ut quis molestiae quis autem aliquid. Non beatae sequi minus voluptatem enim accusantium quia dolorem.\nDolorum vel aperiam est pariatur id. Sunt et nam. Sit eligendi dolorem ullam dicta quo ipsa omnis. Assumenda accusantium tempora qui temporibus cum rerum error necessitatibus. Nisi consectetur fuga qui nisi eaque maxime quia pariatur.",
    title: "similique",
    id: "5",
  },
];

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [blogs, setBlogs] = useState([...sampleBlogs]);
  const [urlParamString, setUrlParamString] = useState("");

  const generateUrlParams = (limit, page, sortBy, order) => {}

  useEffect(() => {
    // useEffect should usually come after setting useState

    const fetchBlogs = async () => {
      //console.log('urlEndpoint', urlEndpoint)

      const result = await fetch(`${urlEndpoint}/blogs`);
      //console.log('result', result)

      const fetchedBlogs = await result.json();
      setBlogs(fetchedBlogs);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="App-header">
      <OptionBar />
      <BlogList blogs={blogs} />
      <Footer />
    </div>
  );
};

export default App;
/*
# Fullstack Intro Day 2

## .env files
- _Reminder_: .env files hold our environment variables. When we start a server/terminal process, the variables in a .env file are loaded into the global scope and are accessable using the process.env.VARIABLE_NAME syntax. When we create a .env file in our file system, it will go on the top level of our repository; i.e, the same file level as the package.json. 
  - _Note_: After you create a .env file in your folder, you need to restart the terminal process for your environment variables to be loaded into the scope.
- _Requirement_: React applications REQUIRE environment variables to be prepended with the string REACT_APP. I.E. All environment variables you will create for react MUST start with REACT_APP. Everything after the REACT_APP prefix is up to you to name for your variable.
- All environment variables coming from the .env file will be strings

## useEffect
- _Convention_: (and due to variable scope), useEffect goes into the body of a component (above the JSX return) and below the state variables.
- The starting definition for useEffect will always be:
  - useEffect(()=>{}, [])
  - The first argument is the effect function and the second argument is the dependency array.
- _Convention_: If there is an async function that is going to be invoked in the useEffect, the function definition should go inside of the useEffect effect function. The async function is then invoked inside of the useEffect effect function after the definition.

## React Component Composition
- The top most code for react components will be the props or destructured props.
- After the destructured props comes the state variables.
- After the state variables comes the useEffects.
- After the useEffects comes any handler functions or pre-processing code for variables that are rendered in the JSX.
- Last comes the JSX return statement.

## fetch
- The fetch API is a globally available API to browser applications. I.E. If you are running a browser client app such as a react app or a jQuery app, the fetch API will be available to you. The fetch API is a lightweight module that allows you to make HTTP requests to specific urls along with optional parameters.
  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- For react applications, your fetch async functions/invocations are going to live inside of an async function that lives inside of a useEffect.
- _Convention_: Since await fetch() returns the response data, we assign that response data to a variable called result.
- If the response to the fetch() has an OK status/status code (such as 200), the payload/body of the fetch will be retrieved by calling the awaited .json() method on result. Usually we assign that to a variable whose name represents the data we are expecting.
 */
