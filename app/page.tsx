const checkboxes = [
  "You say yes before checking your calendar.",
  "You treat a client request like an emergency because waiting or the possibility of disappointing them feels uncomfortable.",
  "You carry work that someone else could own because it seems faster to do it yourself.",
  "You spend your best energy delivering for clients while the next version of your own business gets pushed to the back burner, every.single.passing.quarter.",
  "You know you need to hold the boundary, raise the rate, delegate the work, change the offer, or have the conversation.",
  "You are not confused about what needs to change.",
  "You just cannot seem to make yourself do it.",
];

const fears = [
  "What if the client is disappointed?",
  "What if you lose momentum?",
  "What if making the change creates more work before it creates relief?",
  "What if everything really does depend on you?",
];

const possibilities = [
  "More energy.",
  "More creativity.",
  "More room to think and develop the next evolution of your business",
  "More time with the people you love.",
  "More mornings that do not begin inside Slack.",
  "More afternoons that belong to your actual life.",
];

const evidence = [
  "The pattern is not who you are.",
  "The change may be more manageable than you think.",
  "You do not have to change everything at once.",
  "A different way of working can be safe.",
  "You can care deeply about your clients without becoming responsible for everything.",
  "Your business is allowed to change because you are changing.",
  "Your life is allowed to take up space now, not after the inbox is empty.",
];

const guests = ["01", "02", "03"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="monogram" href="#top">b.</a>
        <div className="nav-center">
          <a href="#for-you">Who it’s for</a>
          <a href="#inside">Inside the series</a>
          <a href="#about">About Carly</a>
        </div>
        <a className="nav-button" href="#register">Listen free</a>
      </nav>

      <header className="hero" id="top">
        <img className="hero-photo" src="/carly-hero.jpg" alt="Carly Clark Zimmer smiling outdoors" />
        <div className="hero-shade" />
        <div className="hero-brand">BEYOND THE BOTTLENECK</div>
        <div className="hero-copy">
          <p className="eyebrow">A free, bingeable audio series</p>
          <h1>Beyond <i>the</i><br />Bottleneck</h1>
          <p className="hero-sub">How thriving online business owners stopped turning their freedom back into a job, and what opened up when they did</p>
          <a className="outline-button light" href="#register">Join the listening tour</a>
        </div>
        <div className="hero-date">
          <span>Begins</span>
          <strong>October 5th</strong>
          <span>Listen on your own time</span>
        </div>
      </header>

      <section className="opening editorial-section">
        <p className="eyebrow">You took the leap</p>
        <h2>You left corporate to start your own business and create <i>more freedom</i> in your life.</h2>
        <div className="columns">
          <p>But somewhere along the way, you became the person every client has on speed dial, the one who says yes to tight deadlines even though it means staying up until 3am, the one who always delivers.</p>
          <div>
            <p>This reputation is one of the reasons your business is successful, yet resentment is starting to build, the walk you keep planning is pushed until “tomorrow,” and you’re working on weekends instead of spending time with the people you love.</p>
            <p className="serif-callout">You never really feel off the clock.</p>
          </div>
        </div>
      </section>

      <section className="series-intro">
        <div className="series-card">
          <span className="vertical-label">SHORT AUDIO SERIES</span>
          <h2>Honest conversations. <i>Actual change.</i></h2>
          <p>Beyond the Bottleneck is a short audio series featuring honest conversations with online business owners who were once in you’re shoes. They recognized the pattern keeping them overextended, changed the way they worked, and created more room for growth, creativity, relationships, rest, and an actual life outside of business. And now can honestly share that they are thriving!</p>
          <a className="text-link" href="#register">Join the listening tour →</a>
        </div>
        <div className="series-word">listen</div>
      </section>

      <div className="ticker" aria-label="Series details">
        <div>FREE AUDIO SERIES <b>✦</b> BEGINS OCTOBER 5TH <b>✦</b> LISTEN ON YOUR OWN TIME <b>✦</b> FREE AUDIO SERIES <b>✦</b> BEGINS OCTOBER 5TH <b>✦</b> LISTEN ON YOUR OWN TIME <b>✦</b></div>
      </div>

      <section className="for-you editorial-section" id="for-you">
        <div className="split-heading">
          <p className="eyebrow">Who this is for</p>
          <h2>What got you here<br /><i>won’t get you there.</i></h2>
        </div>
        <div className="for-you-copy">
          <p className="large-copy">If you the description above feels a little too close for comfort, you’re going to want to lean in and listen to these extraordinary business owners who had the courage to make powerful changes.</p>
          <p>They got back in the driver&apos;s seat of their own business and started making decisions from a place of alignment, not pressure, proving or fear of failure.</p>
          <p>Now don’t get me wrong, all of those feelings where there, but they stopped letting them lead.</p>
          <h3>How do you know if this will be worth your time? Track how many boxes you check:</h3>
        </div>
        <div className="checklist">
          {checkboxes.map((item) => <div key={item}><span>□</span><p>{item}</p></div>)}
        </div>
        <p className="center-statement">If being capable is starting to feel like a never-ending Slack request trap, <i>this series is for you.</i></p>
      </section>

      <section className="question-section">
        <div className="question-copy">
          <p>Because the current pattern may be exhausting, but it is familiar, so you keep going.</p>
          <p>The change feels big and risky, and you just don’t feel like you have time to make this a priority.</p>
          <div className="fear-list">{fears.map((fear) => <span key={fear}>{fear}</span>)}</div>
          <p>So you keep going.</p>
        </div>
        <div className="question-title">
          <p className="eyebrow">The question at the heart of it all</p>
          <h2>What if the change is not as hard as <i>continuing this way?</i></h2>
        </div>
      </section>

      <section className="what-if editorial-section">
        <div className="what-if-grid">
          <p>What if the boundary you have spent six months worrying about takes one uncomfortable conversation?</p>
          <p>What if the thing you are afraid to delegate works perfectly well without you?</p>
          <p>What if someone has a feeling about your decision and you survive it?</p>
          <p>What if the new way feels difficult for a day, or a week, and then starts getting easier?</p>
        </div>
        <h2>And what if, on the other side of that decision, there is not only a stronger business?<br /><i>What if there is also more of you?</i></h2>
        <div className="possibilities">{possibilities.map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div>
        <a className="button" href="#register">Yes, I want to listen</a>
      </section>

      <section className="inside" id="inside">
        <div className="inside-title">
          <p className="eyebrow">Inside Beyond the Bottleneck</p>
          <h2>Real stories about the moment things <i>finally changed.</i></h2>
        </div>
        <div className="inside-copy">
          <p>Inside Beyond the Bottleneck, you will hear from online business owners who reached a point where they could no longer ignore what their way of working was costing them.</p>
          <p>These are not polished stories about people who have mastered every part of business and never struggle anymore.</p>
          <p className="large-copy">And thank the goddesses for that!</p>
          <p>This series isn’t about people eliminating bottlenecks completely- that’s just not possible. But sharing how they identify them quicker and move through the interruption faster is the pathway I want you to see ahead.</p>
          <p>These are honest conversations about one specific pattern, the decision that interrupted it, and what became possible afterward.</p>
        </div>
        <div className="hear-list">
          <p>You will hear about</p>
          {["The specific change they made", "What they were afraid would happen", "How they respond to new bottlenecks now", "What opened up in their business and their life once they made the change."].map((item, i) =>
            <div key={item}><span>0{i + 1}</span><h3>{item}</h3></div>
          )}
        </div>
      </section>

      <section className="evidence editorial-section">
        <p className="eyebrow">Designed for recognition</p>
        <h2>Stop obeying the pattern that keeps your business dependent on <i>your overfunctioning.</i></h2>
        <p className="evidence-intro">Beyond the Bottleneck is intentionally designed to help you recognize the pattern that keeps your business dependent on your overfunctioning and seeing what becomes possible when you stop obeying it.</p>
        <h3>You will leave with clearer evidence that:</h3>
        <div className="evidence-grid">{evidence.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
        <a className="button" href="#register">Join Beyond the Bottleneck</a>
      </section>

      <section className="contributors">
        <div className="contributors-heading">
          <p className="eyebrow">The conversations</p>
          <h2>Meet the business owners who <i>made the change.</i></h2>
          <p>These conversations are not organized around how impressive someone looks online. They are organized around the moment she stopped postponing the change she knew she needed to make.</p>
        </div>
        <div className="guest-grid">
          {guests.map((guest) => (
            <article key={guest}>
              <div className="guest-photo"><span>{guest}</span></div>
              <p className="eyebrow">Featured contributor</p>
              <h3>Contributor name</h3>
              <p><b>Role or business</b></p>
              <p>The pattern she interrupted: [specific pattern]</p>
              <p>What opened up: [specific business and life outcome]</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-photo-wrap">
          <img src="/carly-supporting.jpg" alt="Carly Clark Zimmer seated on stone steps" />
          <span>about the creator</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Why I created Beyond the Bottleneck</p>
          <h2>I used to think being excellent meant being available <i>all the time.</i></h2>
          <p>During the pandemic, my coaching practice grew quickly.</p>
          <p>I was living in Ireland and working with clients across all kinds of time zones. At the same time, I was supporting large cohorts of students and a team of associate coaches inside a coaching school experiencing its highest enrollment numbers ever, while also being in charge of all program coordination. (I know… it’s too much. But I thought I could handle it back then.)</p>
          <p>I was spending close to eight hours a day on Zoom.</p>
          <p>But the real weight was not only the work.</p>
          <p className="short-lines">I felt responsible for everyone.<br />Their fear.<br />Their pivots.<br />Their launches.<br />Their confidence.<br />Their income.<br />Their next steps.</p>
          <p>At first, I thought I was being a great coach. I was helpful, responsive, generous, and deeply invested.</p>
          <p className="pullquote">Eventually, I realized I was carrying everyone else’s urgency in my body and calling it commitment.</p>
          <p>I had built a business around meaningful work, but the way I was running it was slowly taking me out.</p>
        </div>
      </section>

      <section className="story editorial-section">
        <div className="story-columns">
          <div>
            <p>I had to learn how to release what was never mine to hold.</p>
            <p>I had to stop confusing support with constant availability.</p>
            <p>I had to get honest about what was truly urgent, what I was making urgent in my own mind, and what belonged to someone else.</p>
            <p>I clarified what my coaching containers were actually for. I set cleaner boundaries around communication. I stopped making myself the emergency contact for everyone’s business, emotions, and decisions.</p>
            <p>I learned how to hand ownership back to my clients without becoming cold, detached, or unavailable.</p>
          </div>
          <div>
            <h2>And it changed <i>everything.</i></h2>
            <p>I became a better coach because I became clearer, more grounded, and more honest about what was mine to hold.</p>
            <p>I also got parts of my life back.</p>
            <p>Not because I suddenly found some magical extra hours hidden in the week. Because I finally stopped giving every available part of myself to work.</p>
            <p>I started painting again, and that because evidence that I had a life outside of business.</p>
            <p>It reminded me that creativity, beauty, joy, rest, and aliveness were allowed to belong to me too.</p>
          </div>
        </div>
      </section>

      <section className="cage">
        <p className="eyebrow">Why this matters</p>
        <h2>I know how easy it is to leave one cage and <i>accidentally build another.</i></h2>
        <div className="cage-lines">
          <span>The client becomes the boss.</span>
          <span>The inbox becomes the time clock.</span>
          <span>Responsiveness becomes the performance review.</span>
          <span>Rest becomes something you have to earn.</span>
        </div>
        <p>I created Beyond the Bottleneck because I want us to talk honestly about how that happens and, much more importantly, how people change it.</p>
      </section>

      <section className="belief editorial-section">
        <div>
          <p>Today, I help booked-out service providers and founders stop treating every client request like an emergency, identify the behavior patterns keeping them overextended, and restore the structure of their business so success no longer depends on self-abandonment.</p>
        </div>
        <div>
          <p className="eyebrow">My work is built on a simple belief</p>
          <h2>Transformation happens through evidence and intentional repetition, <i>not more information.</i></h2>
          <p>You change when you let the request wait and discover that nothing collapses.</p>
          <p>You change when you make the decision you have been postponing and feel the space it creates.</p>
          <p className="serif-callout">One small interrupt becomes evidence.<br />Enough evidence becomes a new way of working.</p>
        </div>
      </section>

      <section className="register" id="register">
        <p className="eyebrow">Join me for Beyond the Bottleneck</p>
        <h2>There may be a whole lot of life waiting for you <i>on the other side.</i></h2>
        <p>Join me for Beyond the Bottleneck and hear how thriving online business owners stopped turning their freedom back into a job, what they changed, and what opened up when they did.</p>
        <form action="#register">
          <label htmlFor="email">Email address</label>
          <div><input id="email" name="email" type="email" placeholder="you@example.com" required /><button type="submit">Register for free</button></div>
        </form>
        <div className="register-details"><span>Begins October 5th</span><span>Short audio interviews, each 20 minutes or less.</span><span>Listen on your own schedule</span></div>
        <p className="final-line">Because the change you keep putting off may not be nearly as hard as continuing to live inside the pattern.</p>
      </section>

      <footer>
        <a className="monogram" href="#top">b.</a>
        <p>Beyond the Bottleneck © 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
