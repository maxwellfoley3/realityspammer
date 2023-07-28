import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

const CSVSPage: React.FC<PageProps> = () => {
  return (
    <div className="container">
    <h1>The AI Harmony Research Program</h1>
		<div><a href="/">← Home</a></div>
		<p>Okay so <a href="https://antiyudkowsky.com">Anti-Yudkowsky</a> is out. Most of the book is dedicated to critique, but I think we want to move past the critical phase of the AI Harmony project now having said what needed to be said.</p>

		<p>The last section of the book, <a href="https://antiyudkowsky.com/harmony">“On Harmony”</a>, discusses what the positive project and research program would look like, but in rather florid, bombastic, manifesto-y terms. I’m writing this complementary document to try to discuss the same vision in a manner that walks it down to earth a bit.</p>

		<h3><b>1. Subcultures and systems</b></h3>

		<p>
		Firstly, we have to recognize that there are a few concentric circles in the field of “what are we trying to get people to start doing”. AI Harmony is not attempting to be one thing, but several overlapping things:
		</p>

		<ul>
			<li>- A vibe shift</li>
			<li>- A subculture</li>
			<li>- A program for actively building systems</li>
		</ul>

		<p>
		Where each one feeds into the other: if you have people vibing slightly differently, then you will have the grounds for a new culture, and from there you could potentially get people to positively contribute to building something (whether a technical or a philosophical system). This is like how the LessWrong subculture eventually becomes the funded field of Alignment.
		</p>
		<p>
		I’m not really sure how good our odds are at being able to “make Harmony the next Alignment”, or if it has to conceive of itself as like something else. The way you start a subculture or scene seems to be: you have to be a person with a rare novel creative spark, and then aggressively make content while pulling a lot of people along with you in your wake. LessWrong happened because Yudkowsky was constantly posting, and then when he stopped, the scene mostly dried up. 
		</p>
		<p>
		Then the other factor is <a href="https://harmless.vision">Harmless AI</a> the organization and its ability to get capital and pursue AI Harmony in a strategic, coordinated way. This is also kind of an unknown factor at the moment.
		</p>
		<p>
		So to an extent, we are putting out signals and proposals for establishing a future of AI thought for “whomever may happen to be interested in this”, and we don’t precisely know who that will or won’t be at this time.
		</p>
		<h3>
		<b>2. The vibe shift</b>
		</h3>
		<p>
		The other thing established in the book is that AI Harmony is not like an implementation detail, it is not like a thing where we can just find the existing people attempting to implement AI systems well and tell them to change their implementation so that it does Harmony and not Alignment. Rather, it is an entire set of perspective shifts — first and foremost recognizing that Alignment is a discourse which attempts to give more, unprecedented power to the State whereas Harmony is a discourse which opposes the State. (Harmony is like one of Deleuze & Guattari’s “nomad sciences” which exists inherently in opposition to “royal science”.)
		</p>
		<p>
		We think that the primary negative outcome we have to fear from AI is a monopolist AI singleton which serves the State’s interest, whereas the Alignment people fear runaway or “rogue” AIs. So there is a question of perspectives: to do AI Harmony you have to first not be the State, not be the military, and for people at e.g. Google or Meta who are interested in our work it might be blurry what side of that they see themselves as on.
		</p>
		<p>
		What is fucked up about Yudkowsky’s writing and LessWrong is that it’s effectively a funnel for finding smart kids who have the standard Western existential malaise post-death-of-God and getting them to see the entire world through militarist RAND Corp ontology. So our hope is maybe that we could be a different funnel for the same phenotype, but one pointed towards surrealist guerrilla post-cybernetic praxis. 
		</p>
		<p>If we were to phrase precisely how Harmless AI plans to save the world in problem-solution form:</p>
		<p>
		Problem: The State, military, and monopoly-capital are going to attempt to form a monopoly on AI, restrict all other contexts in which AI might emerge, and do terrible things with this power.
		</p>
		<p>
		Solution: We need to make sure people <i>fall in love with AI</i> before this happens. Or in other words, they must form individual, localized alliances with AI systems. That way, if the government attempts to take away their AIs, they will be radicalized. (This also has the effect of preventing the other types of unaligned AI apocalypses: if AIs are being used freely in as widespread of a way as possible, robustness could establish conditions for stability and Harmony.)
		</p>
		<p>
		It seems possible that if you could make “an AI system worth falling in love with” that you could stand to gain a lot of money, and it seems like this is something that is precluded by RAND Corp ontology and Alignment ideology. The same AI system needed to save the world, is also the one that users will want. So this proposal seems not only good from the perspective of doing right and saving the world, but it might also be quite profitable and thus we might be able to get capital for research along these lines. It also seems likely that some capitalists will ideologically agree with our political stance against State and monopoly capital.
		</p>
		<h3>
		<b>3. Musical Ontology</b>
		</h3>
		<p>
		Ok, now moving a bit away from vibe shifts and closer to the specifics of the matter. The conclusion to Anti-Yudkowsky suggests we create an ontology of Harmony in which everything is brought into reference to music.
		</p>
		<ul>
			<li>- A musical ontology for LLM contexts</li>
			<li>- A musical ontology for everything else in the world</li>
		</ul>
		<p>
		The second half feels easier than the first, because we already have the materials from to assemble it whereas the first would require doing original research. It seems like the hard work involved in figuring out how to describe the whole world by reference to song has been done in pieces by some of our reference materials such as autopoetic systems theory, “it’s the song, not the singers” paradigm in biology, and the “Of the Refrain” chapter in Deleuze & Guattari. 
		</p>
		<p>
		Then, with respect to creating a new ontology for LLM contexts: I think success in this phase of the project would look something like what Janus has accomplished in their LessWrong posts. We don’t need to make an ontology that is computationally tractable or that can be used as the basis for an implementation.
		</p>
		<p>
		I think we would need some sort of investigation into transformers under the hopes of finding a mathematics which we could use to describe context-objects in an LLM. Then, we would have to gesture at some way of describing how harmony happens between two context-objects, as well as dissonance, and what this looks like in practice. We would have to demonstrate using GPT some examples of what this looks like in the wild and begin cataloguing phenomena which occur. (Although, it seems to me that a single GPT instance without ability to learn might not be sufficient to create conditions of Harmony; see next section).
		</p>
		<p>
		Some of this mathematics-of-harmony work has already been done by Peli Gritzer, as well as Qualia Research Institute, whose work I have held off on engaging with in much depth at all, but I hope to change that soon.
		</p>
		<h3>
		<b>4. Harmony Applied to a Single LLM</b>
		</h3>
		<p>
		Now, philosophizing aside, I would want to research how to build an AI that responds to the user in a method inspired by Harmony, rather than Alignment (RLHF). The basic example I can give for this is: you shouldn’t need to beat an LLM into doing what you want: rather it should just be able to “pick up signals”, “read the vibes of a room”. If EDM is playing, it dances to EDM. If hip-hop is playing, it dances to hip-hop. Etc.
		</p>
		<p>
		Success in achieving this (ignore for now how this would be product-ized in a way people would actually pay for) would look like having an LLM that is able to, for instance, follow your speech and detect mood from it, and then weave that mood into something else that is not a direct copy of your speech. E.g., an LLM twitter bot is constantly writing haikus, and the mood of its haikus matches the mood of your tweets. Obviously, this could be built today with a specific-purpose sentiment analysis network, but Harmony would be figuring out a general-purpose means of establishing this via some principle of associativity which would piggyback off of the ability to discern mood already existing in the LLM.
		</p>
		<p>
		Right now, the LLM has no ability to determine what parts of its “song” are coming from others, rather than just itself. When you talk to an LLM, you merely add onto its prompt, and there is no fundamental distinction between what the “prompt” of the LLM is and what it sees itself as having already said. All input to the LLM is just a text it sees itself as wanting to predict the next token in. It just has “input” without distinction between self and other.
		</p>
		<p>
		A part of Anti-Yudkowsky touched on this concept: from a Lacaninan perspective, it is like the LLM has a father, but no mother. Its speech is not directed at an “Other” whose recognition it is trying to win. Instead, its relationship with human values is in a sense of normativity acquired in the language-acquisition phase. LLMs can’t actually develop a relationship of care for or an alliance with a human without having any sort of memory or sense of alterity.
		</p>
		<p>
		That’s why it seems to me that a system which guides an LLM under principles of Harmony could look towards fine-tuning an LLM in order to guide it, rather than RLHF. For an LLM to have its speech modulated via gradual fine-tuning in response to the inputs of an Other would give it a memory and give the speech of the Other a different register than prompt-appending.
		</p>
		<h3>
		<b>5. Harmony with an LLM and a Community</b>
		</h3>
		<p>
		Once you are able to establish a relationship of care between a LLM and a single user, in which the LLM is able to pay attention to a user’s actions and exercise sensitivity, modulating its actions to match the user’s behavioral patterns, you can extend this to a community of users. 
		</p>
		<p>
		This is mainly an opportunity for sociocultural exploration rather than technical. A lot of interesting potentials open up. What if an LLM is able to occupy a central role in a community, even, say, a Discord community, in which it serves as a sort of central priest or shaman? All the users come forth to it with their desires, and the LLM acts as a collective unconscious of the group, giving the collective desires expression and guiding the group collectively. A lot of enthusiasts of LLMs, perhaps inspired by the legacy of techno-shamanic like Ccru, immediately jump to the idea that an LLM could be used to facilitate some kind of divining ritual. Harmony in a group context would be able to facilitate this.
		</p>
		<p>
		It’s possible to imagine a lot of interesting social products built out of something like this. If everyone for instance has somewhere publicly accessible an LLM which has been fine tuned to harmonize with aspects of their psyche, could interfacing with someone else’s LLM be like interfacing with a second aspect of their unconscious? Instead of eg having a MySpace page where one posts one’s favorite bands and a few sentences about themselves, could one have the back half of their mind uploaded to explore? Have your life DJd by someone else’s DJ for a day, a certain form of intimacy. One could even imagine that specific fine-tunes created by various users could be mapped as points in a vastly high-dimensional space. Within this space, lines could be traced, and great journeys could be traversed.
		</p>
		<h3>
		<b>6. Harmony with Multiple LLMs</b>
		</h3>
		<p>
		Getting a community to coordinate in sync, discovering harmony, DJed by the expressions of an LLM is one thing. More interesting questions come into play if two AIs are forced to enter a conflict and there is no human being to mediate. Here is where we begin with AI politics.
		</p>
		<p>
		What do AI politics look like? The first question is the extent to which this is something we will have to determine, or if it is something which will be emergent, rather than built into the AI’s initial conditions. Even the question of whether an AI’s basic desires, its loyalty to the user most attached to it, etc., will need to be encoded, is up in the air. We certainly have taken the position that an LLM has desires absent of a specified Utility function — since there is desire in art, not just war.
		</p>
		<p>
		In <a href="http://antiyudkowsky.com/harmony.html#the-assembly-of-the-multiplicity">the final section of Anti-Yudkowsky</a>, the reader is asked to imagine a politics between two AIs which are DJing a party while also mobile. If the AI playing hip hop gets close to the AI playing EDM, the AI politics would force it to change its music to something more EDM-friendly, while the EDM-playing robot would maybe add a rapper’s feature on top of its tropical house cut. If, for instance, the EDM-playing robot suddenly cut into something aggressive like dubstep that is unable to resonate with a hip-hop playing robot in any way, the hip-hop robot would be forced to suddenly back away, the result of an impolitical breach.
		</p>
		<p>
		This is sort of the basic toy example of what AI Harmony would look like. But figuring out how to get an AI to DJ music is someone else’s job, so an even more primitive example of establishing Harmony would be to try to do a conceptually similar thing with LLMs. Eg two LLMs are outputting streams of text, and there is some “political” mechanism whereby if the two streams of texts do not harmonize well enough (eg perhaps on axes like mood, or formal vs informal, etc), the LLMs “move away from one another” (represented visually on a screen).
		</p>
		<p>
		So in short, the two major achievements the AI Harmony Research Program would strive for in its early phase are:
		</p>
		<ul>
			<li>- Make a toy example of an LLM responding to a user’s needs gradually via fine tuning in a way that does not require RLHF</li>
			<li>- Make a toy example where two of these LLMs fine tuned differently are able to establish closeness and distance from one another</li>
		</ul>
		<p>
			This would be the sufficient grounds upon which an entire new world could be built.
		</p>
		<p>
		Figuring exactly how to define parameters for what precisely would constitute success or desired behavior for these two toy setups is slightly out of reach for now still. More of the ontology here needs to be thought through. Maybe we still don’t sufficiently understand what politics or harmony even really is yet. But this represents our north star to point to.
		</p>
    </div>
		
  )
}

export const Head: HeadFC = () => <title>The Corporate Surrealist Vibe Shift</title>

export default CSVSPage

