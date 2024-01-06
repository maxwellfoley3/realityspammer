import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

const CSVSPage: React.FC<PageProps> = () => {
  return (
    <div className="container">
    <h1>Autology Manifest</h1>
		<div><a href="/">← Home</a></div>
		<p>
		We are in deep need of a new science of how man comes to define his own subjectivity within the social milieu. 		</p>
		<p>
		On the one hand, no man is an island. All our values and thoughts ultimately arise from a shared context, because we do not invent our own language. It is neither possible nor desirable to remove oneself from the social milieu -- there will always be "hidden" influences from the last person you have talked to. On the other hand, the condition of freedom is to be able to become the final determiner of one's values and decisions, otherwise one must have a master. 
		</p>
		<p>
		This is even more imperative because even if one <i>wanted</i> a master they are hard to come by these days, with the general decline in competent social authority. We predict soon that one will have no choice to <i>become</i> autological or be a slave to technological control systems like the Instagram algorithm, due to what we call an emerging "headless" subjectivity. Of course you can just shill out for an expensive therapist and hope for the best.
		</p>
		<p>
		Actually this would not be a science at all. It would be as Guattari calls it an “ethico-aesthetic paradigm”, because it would not presume to have the quality of scientific objectivity. It would be like a new language for describing the psychic world and guiding decisions.
		</p>
		<h2>Why existing frameworks are insufficient</h2>
		<h3>1. Standard Western therapeutic paradigm</h3>
		<p>
		This paradigm relies on a privileged observer subject who monitors the person's behavior like an object and uses heuristics to guide it towards a more desirable behavior. 
		</p>
		<p>
		If one does self-help in this paradigm, one essentially must create a splitting in the self between observer and observed. This in itself can cause unhappiness and dysfunction and there is no obvious meta-level answer for when the split should be open or mended. 
		</p>
		<p>
		Furthermore, one must adopt socially normative goals (stability, external markers of success, good relations with one's peers) as desirable
		</p>
			<h3>2. Psychoanalysis</h3>
		<p>
		Psychoanalysis is inspiring because it is not grounded on treating the psyche as an object studied by an observer, but rather exploring it through an intersubjective relation discovered in language
		</p>
		<p>
		However psychoanalysis has a bunch of problems
		</p>
		<p>
		a - tool of repression and social control
		</p>
		<p>
		b - you're not supposed to do it to yourself as self-help like people on discord want to, if you try that you just go in circles. It's all meant to be done by an analyst
		</p>
		<p>
		c - its canon is a huge mess of jargon which is very hard to find proper definitions for, like Freud never defines "ego". Every major figure has their own system which is spread throughout their work and various case studies. The confusing nature of the jargon leads to a lot of psychoanalytical discourse being pseudointellectual obscurantist pulp which is difficult to wade through (every system is going to have its body of b-tier literature that is just "hey, I can use this jargon too!" but in psychanalytic literature, this stuff is particularly bad)
		</p>
			<h3>
				3. Deleuze & Guattari schizoanalysis
			</h3>
		<p>
		This endeavor aims to take what is useful in psychoanalysis and rid it of its authoritarian aspects to become an analytical toolkit you can use yourself, or to examine society
		</p>
		<p>
		However it is never presented in an ultimately usable form. <i>Anti-Oedipus</i> and <i>A Thousand Plateaus</i> each have completely different conceptual frameworks, both of which have major flaws. Guattari's final ontology would be presented in the book <i>Schizoanalytic Cartographies</i>, which is mostly unreadable. The investigation is pointing in the right direction but the result is found wanting.
		</p>
			<h3>4. Spirituality and religion</h3>
		<p>
		Can be useful but is ultimately grounded on tradition and dogma, thus fails to be a vehicle for true psychological freedom.
		</p>
			<h2>Some factors of what is necessary</h2>
			<h3>
			Meta-decisional framework
			</h3>
		<p>
		One must make an infinite amount of decisions each day just to live. What are the criteria used to make these decisions? One oscillates between various norms, modeling other people's perspectives in one's head -- "I'd better not bring up politics anymore today, people will think I'm annoying". In the big picture, one is making various life plans, but how to know if these plans are sound?
		</p>
		<p>
		Every instance of decision bumps up against a need for a criteria. Hence the classic ultimate philosophical question: "What is the meaning" (ie purpose) "of life?"
		</p>
		<p>
		But the ultimate orientation of a living thing is perhaps not "philosophical" per se -- it is maybe not to be determined by argument; rather discovered.
		</p>
			<h3>Wall against psychosis</h3>
		<p>
		If you push for freedom too much in the psyche the result is psychosis, because you will find yourself outside of all structure.
		</p>
		<p>
		The mechanism to restore normal functioning in the psyche is typically to reintegrate social authority back into the psyche and use it as a psychic sensor.
		</p>
		<p>
		There must be a way to "construct one's own fortresses" that allows one to go on adventures into the unknown and return to sanity without introjecting social censorship. 
		</p>
			<h3>Auto-grounding</h3>
		<p>
		Autology cannot ground itself on another discipline. It exists within itself as one of its objects.
		</p>
		<p>
		There is no separating a surveyor of psychic experience from the terrain it surveys. There is only the psychic experience and its winding trail.
		</p>
		<p>
		This means we cannot escape the vicious circle described by Lacan when he said "there is no metalanguage to describe language"
		</p>
    </div>
		
  )
}

export const Head: HeadFC = () => <title>Autology Manifest</title>

export default CSVSPage