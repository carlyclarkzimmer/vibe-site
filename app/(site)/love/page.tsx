import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "A Love Letter to Éire | Carly Clark Zimmer",
  description: "Carly Clark Zimmer’s love letter to Ireland, the place where her soul came home.",
  alternates: { canonical: "https://carlyclarkzimmer.com/love/" },
};

export default function LoveLetterPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/carly-about-ireland.jpg"
          alt="Carly photographing the Cliffs of Moher in Ireland"
          fill
          sizes="100vw"
          priority
          unoptimized
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>A personal essay</p>
          <h1>A Love Letter to <em>Éire</em></h1>
          <p className={styles.byline}>By Carly Clark Zimmer</p>
        </div>
      </header>

      <article className={styles.letter} aria-label="A Love Letter to Éire">
        <div className={styles.letterBody}>
          <p>By the time you read this, I’ll be on my way back to America, wearing my Aran Jumper like a tourist. I wear it proudly.</p>
          <p>I think back to the woman I was before moving here from New York. Brave and adventurous to move to another country without ever setting foot on the soil before landing on your shores with only a few suitcases and a heart full of ambition.</p>
          <p>The first few weeks I wept while walking the windy Prom. Not from sadness, grief, or loneliness, but from the unmistakable feeling of being here before. Like something in my bones was remembering, from lifetimes ago.</p>
          <p>My soul had come home.</p>
          <p>The first night as I watched the sun go down on Galway Bay, there was a horse on Grattan Beach and I thought to myself “Did I just arrive in a magical land where scenes from movies are a part of real life?”</p>
          <p>I pinched myself to make sure I was awake.</p>
          <p>Over the next few weeks as I walked through the bog in Barna, a white horse made its way through the thicket of hawthorn trees to greet me. I pinched myself again.</p>
          <p>A clear weekend had us heading out to Connemara to find the secret camping spot mentioned at Carroll’s the night before.</p>
          <p>“Past Keogh’s, take a right by the broken-down stone barn. Keep going until you see the green cow bucket. Take another right, and you will find heaven on earth.”</p>
          <p>We arrived at the quiet cove. A popular surfing spot. With the Wild Atlantic on one side and the Twelve Bens on the other.</p>
          <p>I watched the sunset over the sea that night, at the edge of the known world.</p>
          <p>As the campfire crackled, and the sheep grazed, the neighbors quietly played trad music, I asked myself, “Is this real?”</p>
          <p>At first, I thought it was the novelty of a new country.</p>
          <p>But no.</p>
          <p>Ireland is different.</p>
          <p>Its mysterious—wild yet tender, rugged yet full of warmth. A land of lashing winds and soft laughter, where the sea bites but the people embrace. A place where beauty is both raw and soothing, where the rain stings your skin and the music mends your soul.</p>
          <p>You feel it in the smallest moments, the ones that seem ordinary but are anything but.</p>
          <p>Like the locals pausing on the Prom to snap a picture of the sunrise while the miraculously well-behaved dogs quietly walk themselves.</p>
          <p>The yips and yelps of sea swimmers as they take their daily dip in the icy waters.</p>
          <p>I used to think they were extreme.</p>
          <p>Until one day I was convinced to “give it a go” by the encouraging mermaids at Blackrock.</p>
          <p>Now, the sea calls: “Come here to me and calm your mind by dipping your head beneath the waves.”</p>
          <p>I listen.</p>
          <p>A few moments in the bouncy tide snaps me into the present moment and resets my priorities.</p>
          <p>I’ve learned there are many types of rain here.</p>
          <p>Soft rain, spitting rain, pissing rain, lashing rain, bucketing rain, hammering rain, sideways rain, pelting rain, and my personal favorite… a dry rain.</p>
          <p>And the sun shower. One of the most magical moments of all. When the sun is out, it’s raining, and you can feel a rainbow brewing somewhere in the sky.</p>
          <p>I’ve seen hundreds and chased handfuls along the winding, narrow roads as they dance through Clare.</p>
          <p>As I return to New York, the Irish pub takes on a new meaning. A gathering place to watch the match, to celebrate important moments, grieve during the hard ones, solve the world&apos;s problems, or sit quietly by the fire, and wait five minutes for rain to pass.</p>
          <p>I’ve had spontaneous sessions tucked into a coveted snug at Neachtain’s, letting my to-do list slip away to savor the moment and have the craic with friends.</p>
          <p>I’ll never forget one of the most magical moments of all. Sitting in a pub on a rainy day near Strandhill in Mayo.</p>
          <p>It was a Sunday.</p>
          <p>A group of older men were sharing stories and pints in the back room.</p>
          <p>As the bowl of homemade chowder warmed my bones, one of them broke into a song.</p>
          <p>They all joined, in perfect harmony. Their own kind of church.</p>
          <p>I cried a little bit, deeply understanding why so many artists, musicians and poets are inspired by the land, the people, and the feeling Ireland brings to your soul.</p>
          <p>I leave this land with a thirst not just for a perfectly poured pint of the black stuff, but for the craic! Understanding its many layers has lightened my heart—I don’t take myself as seriously as I did before living in my beloved Galway.</p>
          <p>Maybe it’s because my dear friends know exactly how to take the piss out of a foreigner like me—until I finally exhale and laugh right along with them.</p>
          <p>I leave with hundreds and thousands of inside jokes that will forever bring a gentle smile to my face no matter where I am in the world, reminding me of my soul family.</p>
          <p>As I continue my travels around the world, I’ve learned that home is in my heart, my friends and family are with me always, and that there’s more to life than working, ambition, and striving. And if there’s going to be a life hereafter, let me make my heaven in that dear land across the Irish Sea.</p>

          <p>Grá go deo,</p>
          <p>Carly</p>
        </div>
      </article>
    </main>
  );
}
