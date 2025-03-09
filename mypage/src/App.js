function App() {
  return (
    <div>
    {/* Navigation */}
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>

    {/* Home Section */}
    <section id="home">
      <h1>Hello. Welcome everyone.</h1>
      <p>This is the Home section.</p>
    </section>

    {/* About Section */}
    <section id="about">
      <h2>About Me</h2>
      <p>This is the About section. You can know more about me here.</p>
    </section>

    {/* Contact Section */}
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us!</p>
    </section>

    {/* Footer */}
    <footer>
      <p>All rights reserved.</p>
      <p>
        Follow on Social Media
        <br />
        <a href="" target="_blank">Facebook</a> <br />
        <a href="" target="_blank">Twitter</a> <br />
        <a href="" target="_blank">Instagram</a> <br />
      </p>
    </footer>
  </div>
);
}
  ;


export default App;
