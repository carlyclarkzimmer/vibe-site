const conversations = [
  {
    number: "01",
    title: "The pattern",
    copy: "The productive-looking behavior—overdelivering, micromanaging, constant availability—that was quietly keeping them stuck.",
  },
  {
    number: "02",
    title: "The interrupt",
    copy: "The boundary, rate increase, conversation, delegation, or decision that made the change concrete and possible.",
  },
  {
    number: "03",
    title: "The fear",
    copy: "What they thought would happen, what actually happened, and the evidence they collected on the other side.",
  },
  {
    number: "04",
    title: "What opened up",
    copy: "Clearer decisions, sustainable growth, creative energy, relationships, health, mornings, gardens—and an actual life.",
  },
];

const guests = [
  { initials: "01", pattern: "A pattern interrupted", outcome: "A life reopened" },
  { initials: "02", pattern: "A boundary reclaimed", outcome: "A business strengthened" },
  { initials: "03", pattern: "An old role released", outcome: "A new season begun" },
];

function Spark() {
  return <span className="spark" aria-hidden="true">✦</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top">Beyond <i>the</i> Bottleneck</a>
        <div className="nav-links">
          <a href="#stories">The series</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#register">Listen free <span>↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A free audio series <span /> Listen on your own time</p>
          <h1>Beyond <em>the</em><br />Bottleneck</h1>
          <div className="hero-bottom">
            <p className="dek">How thriving online business owners stopped turning their <em>freedom</em> back into a job—and what opened up when they did.</p>
            <a className="button" href="#register">Join the listening tour <span>↗</span></a>
          </div>
        </div>
        <figure className="hero-art">
          <img src="/beyond-the-bottleneck-cover.png" alt="Beyond the Bottleneck audio series cover featuring the host" />
          <figcaption><span>Short, honest conversations</span><span>Begins soon</span></figcaption>
        </figure>
      </section>

      <section className="ticker" aria-label="Series themes">
        <div>Boundaries <Spark /> Creativity <Spark /> Sustainable growth <Spark /> A life outside the inbox <Spark /> Boundaries <Spark /> Creativity</div>
      </section>

      <section className="intro section">
        <p className="kicker">The business is working.</p>
        <h2>You may even be booked out.<br /><em>And yet, you’re never really off the clock.</em></h2>
        <div className="intro-grid">
          <p className="lead">You built your business for more freedom, more control over your time, and more room for the parts of life that matter.</p>
          <div>
            <p>Somewhere along the way, you became the person every request, deadline, decision, and loose end depends on. Your capability built the business. Now, it may be the very thing limiting it.</p>
            <p>Beyond the Bottleneck is about the moment capable business owners recognized that pattern, changed the way they worked, and made room for something more.</p>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <span className="quote-mark">“</span>
        <blockquote>What if the change is not as hard as <em>continuing this way?</em></blockquote>
        <Spark />
      </section>

      <section className="stories section dark" id="stories">
        <div className="section-heading">
          <div>
            <p className="kicker gold">Inside the series</p>
            <h2>Real stories about the moment things <em>finally changed.</em></h2>
          </div>
          <p>Not polished stories from people who never struggle. Thank God. Honest conversations about one specific pattern, the decision that interrupted it, and what became possible afterward.</p>
        </div>
        <div className="story-list">
          {conversations.map((item) => (
            <article className="story" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="arrow">↘</span>
            </article>
          ))}
        </div>
      </section>

      <section className="not-productivity">
        <div className="np-title">
          <p className="kicker">A necessary distinction</p>
          <h2>This is not another<br /><em>productivity event.</em></h2>
        </div>
        <div className="np-copy">
          <p className="lead">You probably already know how to be productive. That is not the problem.</p>
          <p>The behaviors that made you successful may now be the same behaviors taking your freedom away. This series is not about squeezing more work into your life. It is about seeing what becomes possible when success no longer depends on your overfunctioning.</p>
          <ul>
            <li><Spark /> The pattern is not simply who you are.</li>
            <li><Spark /> A different way of working can be safe.</li>
            <li><Spark /> Your life is allowed to take up space now.</li>
          </ul>
          <a className="text-link" href="#register">Yes, I want to listen <span>→</span></a>
        </div>
      </section>

      <section className="guests section">
        <div className="section-heading">
          <div>
            <p className="kicker">The contributors</p>
            <h2>Meet the business owners who <em>made the change.</em></h2>
          </div>
          <p>Contributor portraits and stories are coming soon. Each conversation centers the moment she stopped postponing the change she knew she needed to make.</p>
        </div>
        <div className="guest-grid">
          {guests.map((guest) => (
            <article className="guest" key={guest.initials}>
              <div className="portrait-placeholder"><span>{guest.initials}</span><Spark /></div>
              <p className="guest-label">Featured conversation</p>
              <h3>Contributor name</h3>
              <dl>
                <div><dt>The pattern</dt><dd>{guest.pattern}</dd></div>
                <div><dt>What opened up</dt><dd>{guest.outcome}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-image">
          <img src="/beyond-the-bottleneck-cover.png" alt="Portrait of the creator of Beyond the Bottleneck" />
        </div>
        <div className="about-copy">
          <p className="kicker gold">Why I created this</p>
          <h2>I had to stop confusing support with <em>constant availability.</em></h2>
          <p>During the pandemic, my coaching practice grew quickly. I was spending close to eight hours a day on Zoom and carrying everyone else’s urgency in my body—calling it commitment.</p>
          <p>I clarified my containers, set cleaner boundaries, and handed ownership back to my clients. I became a better coach. I got parts of my life back. And after twelve years, I started painting again.</p>
          <p className="about-callout">I know how easy it is to leave one cage and accidentally build another.</p>
          <p>That is why I care about the way a business feels behind the scenes: in your calendar, your body, your relationships, and whether you can close the laptop without mentally staying at work all night.</p>
        </div>
      </section>

      <section className="imagine section">
        <p className="kicker">On the other side</p>
        <h2>Imagine what could <em>return.</em></h2>
        <div className="return-grid">
          {["The project you keep postponing", "More presence with your family", "Energy, health, and room to think", "The feeling that your day is yours again"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
          ))}
        </div>
        <p className="closing-thought">These things are not frivolous. They are part of the life your business was supposed to help you create.</p>
      </section>

      <section className="register" id="register">
        <div className="register-copy">
          <p className="kicker gold">Join Beyond the Bottleneck</p>
          <h2>There may be a whole lot of life waiting for you <em>on the other side.</em></h2>
          <p>Hear how thriving online business owners stopped turning their freedom back into a job, what they changed, and what opened up when they did.</p>
        </div>
        <form className="signup" action="#register">
          <label htmlFor="email">Your email address</label>
          <div>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
            <button type="submit">Register for free <span>↗</span></button>
          </div>
          <p><Spark /> Begins soon &nbsp;·&nbsp; Short audio interviews &nbsp;·&nbsp; Listen on your schedule</p>
        </form>
      </section>

      <footer>
        <a className="wordmark light" href="#top">Beyond <i>the</i> Bottleneck</a>
        <p>Success should leave room for your actual life.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
