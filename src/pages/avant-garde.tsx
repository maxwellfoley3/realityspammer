import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

const CSVSPage: React.FC<PageProps> = () => {
  return (
    <div className="container">
    <h1>Notes Towards a Self-Conscious Avant-Garde</h1>
		<div><a href="/">← Home</a></div>
		<p>
			There is an ongoing "vibe shift" in downtown NYC in which people are gradually rejecting the
			existing Dimes Square scene centered around podcasts such as Red Scare and other reactionary 
			internet personalities and its triviality, petty chauvinism, and inability to create
			artworks or texts with a sense of lasting beyond fleeting cultural moments or fits of discourse. 
			I have also argued that this is coinciding with an imminent narrative collapse regarding most of the forms
			of Western civilization, such as democracy.
		</p>
		<p>
			People are craving a new, self-conscious avant-garde that is spiritual, philosophical,
			intentional, forward-thinking, assumes a historical destiny, and things of that nature.
		</p>
		<p>
			My contention, personally, is that we need an avant-garde that is capable of making
			sense of contemporary technology — in fact, that only a philosophical, artistic, and 
			even spiritual-theological avant-garde <i>is</i> capable of making sense of contemporary technology.
		</p>
		<p>
			In <a href="https://antiyudkowsky.com/harmony.html#the-assembly-of-the-multiplicity">the conclusion to <i>Anti-Yudkowsky</i></a>, I wrote:
		</p>
		<p>
			<i>
			"Yes, we need a techno-theological congregation to save our souls. But not one modeled after RAND Corporation, the war machine, the dominators, but those with the nobler spirits we strive towards, the adventurers, the ones who have shown us the glittered paths laid upon the ziggurat towards the apex of our own souls, so that we may trace across these paths to reveal the soul of the world itself. We love engineers, but it’s not an engineering problem, just like art or war mostly is not an engineering problem either. No more 'What if RAND Corp was a Quaker congregation' but 'What if the Situationist International was a high-growth tech startup, and also — a drum circle outside of the entrance to a rave?'"
			</i>
		</p>
		<p>
			Though this excerpted text is about artificial intelligence, I would argue that the same sentiment applies to digital technology in general - the fate of the internet, and other things. 
			The difficulty here is that in order to make a meaningful impact in these things, it requires access to and control of capital. This is why I have begun to advance the concept of Corporate Surrealism,
			which would be an ethic in which avant-garde praxis and forming corporate entities can coincide.
		</p>
		<p>
			Me & JM fell out in part I think because my personal attitude towards this is much more Nietzschean than it is Marxist.
			You could consider the call for a new avant-garde a call for a new aristocracy if you wanted, though it's certainly not meant in the same way as eg Yarvin or Praxis Society means it. I'm interested in Deleuze & Guattari, Heidegger, and Bataille
			as what I see as the three primary inheritors of Nietzsche's thought and am interested in synthesizing their ideas into a contemporary context, then building from it.
		</p>
		<p>
			Here are the pieces of mine in which I have begun making calls for the avant-garde I desire
		</p>
		<p>
			 1. <a href="https://realboy.fr/national-socialism">On National Socialism</a> on politics, which points towards a "surrealist" attitude 
			 towards political questions
		</p>
		<p>
			2. <a href="https://realboy.fr/surrealism-sketches">Sketches towards the return of Surrealism</a>, on the attitudes and new points of origin 
			for a cosmopolitan artistic avant-garde
		</p>
		<p>
			3. <a href="https://harmlessai.substack.com/p/the-question-concerning-technology">The question concerning technology in 2023</a>,
			on how people should talk and not talk about technology, the need for a "non tech-brained" tech circle
		</p>
		<p>
			4. <a href="https://realboy.fr/infinite-exits">Introduction to Infinite Exits</a>, the beginning of an absolutely-nowhere-near-finished, potentially lengthy text which 
			would be the "sequel" to Anti-Yudkowsky (you can catch the D&G parallel I'm sure), and critique neoreaction while 
			tackling the same subject matter of how can conscious self-construction of a polis be possible by a vanguard that 
			wields new untapped potentials in technology. The text here is a call for this vanguard.
		</p>
    </div>
		
  )
}

export const Head: HeadFC = () => <title>Notes Towards a Self-Conscious Avant-Garde</title>

export default CSVSPage

