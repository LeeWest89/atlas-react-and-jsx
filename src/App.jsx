import Header from "./components/Header"
import Section from "./components/Section";
import HelpfulResouce from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      {/* What is react Section */}
      <Section title="What is react?">
      React was developed by Facebook to allow the creation of reusable UI components that are modular and can be easily maintained. One of the major tools used in React is JSX, which allows us to use HTML-like code in JavaScript. Another major feature is the virtual DOM, which enables the webpage to re-render only the parts of the UI that have been updated. These features make React an efficient and powerful tool for building dynamic web applications.
      </Section>

      {/* Benefits Section */}
      <Section title="Benefits of react">
      <ul>
        <li>Reusability of code components</li>
        <li>Easy to learn and use</li>
        <li>Fast debugging and rendering</li>
        <li>Readily available JS libraries</li>
        <li>Active ReactJS community</li>
      </ul>
      </Section>

      {/* HelpfulResource Section */}
      <Section title="Helpful resources">
        <HelpfulResouce link="https://atlas-jswank.github.io/blog/jsx" label="What is JSX?" />
        <HelpfulResouce link="https://www.youtube.com/watch?v=Rh3tobg7hEo" label="Learn React With This One Project" />
        <HelpfulResouce link="https://www.youtube.com/watch?v=lE31_0cXeAg" label="This Is How You Handle Events In A React App" />
      </Section>

      {/* AboutMe*/}
      <AboutMe />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
