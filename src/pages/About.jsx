import './about.css';
export default function About() {
  return (
    <main className="about" role="main">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <h1 className="title">About Eventify</h1>

      <section id="main-content" className="text">
        <p>
          <strong>Eventify</strong> is a sample event management app built to
          demonstrate <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> best
          practices. We’ve improved it step by step from a “bad” version with
          poor HTML and low accessibility to a better structured, inclusive
          experience.
        </p>
      </section>

      <section aria-labelledby="features-heading">
        <h2 id="features-heading">Accessibility Features</h2>
        <ul>
          <li>Semantic HTML5 structure (headings, sections, landmarks)</li>
          <li>Keyboard navigable links and buttons with visible focus styles</li>
          <li>Alt text for all images</li>
          <li>High color contrast ratios</li>
          <li>Responsive design without horizontal scroll</li>
          <li>Skip links to jump directly to main content</li>
        </ul>
      </section>

      <section aria-labelledby="keyboard-heading">
        <h2 id="keyboard-heading">Keyboard Navigation</h2>
        <p>
          All interactive elements, such as <kbd>Tab</kbd> navigation, links, and
          buttons, are fully usable with a keyboard. Try pressing{" "}
          <kbd>Tab</kbd> to move between items and <kbd>Enter</kbd> to activate
          them.
        </p>
        <button
          type="button"
          onClick={() => alert("Button activated via keyboard or mouse!")}
        >
          Test Keyboard Button
        </button>
      </section>

      <section aria-labelledby="quote-heading">
        <h2 id="quote-heading">Why Accessibility Matters</h2>
        <blockquote>
          “The power of the Web is in its universality. Access by everyone
          regardless of disability is an essential aspect.”
          <footer>— Tim Berners-Lee, W3C Director</footer>
        </blockquote>
      </section>

      <section aria-labelledby="team-heading">
        <h2 id="team-heading">Our Team</h2>
        <article>
          <figure>
            <img
              src="https://picsum.photos/200/200?random=5"
              alt="Portrait of our lead developer"
              width="200"
              height="200"
              loading="lazy"
            />
            <figcaption>
              Rajendra — Lead Developer passionate about inclusive design.
            </figcaption>
          </figure>
        </article>
      </section>
    </main>
  );
}
