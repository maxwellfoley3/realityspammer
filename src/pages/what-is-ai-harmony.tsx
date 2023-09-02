import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

const WhatIsAiHarmony: React.FC<PageProps> = () => {
  return (
    <div className="container">
    <h1>What is AI Harmony? And where to begin?</h1>
		<div><a href="/">← Home</a></div>
		<p>
		This document follows <a href="/ai-harmony-research">“The AI Harmony Research Program”</a>, but reading that document is not necessary to understand this one. We have outlined a path to building a program of AI Harmony, in which the first step is theoretical, then proceeding into technical research. This particular note is kind of like “the beginning of the beginning” of the research program unfolding. What we are trying to do here is even just to find very stable grounds for the theoretical part of the program, specifically by making clear exactly how Harmony distinguishes itself from AI Alignment and why it is necessary.
		</p>
		<p>
		The problem is that nearly every concept in “AI Alignment” discourse has been posited in fallacious terms, as well as the stakes of the discourse itself. 
		</p>
		<p>
		However, we are trying to solve the same essential problem as AI Alignment. There is no “non overlap” between AI Alignment and AI Harmony. We are competing frameworks for the same conceptual terrain.
		</p>
		<p>
		What is the terrain? Answering the question of: “How can humans and AI come to share the same desires?” Or “How can humans and AI live in peace, without one annihilating the other?”
		</p>
		<p>
		This question should be seen as worth researching for 1. humanitarian reasons, ie preventing apocalypse and so on and 2. because an answer to it would be profitable — answering it would lead to the development of AI software that is more useful and with better user experience than existing AI software.
		</p>
		<p>
		The terms which are problematic in the discourse and are barriers to having an actual conversation which AI Harmony takes umbrage with are these:
		</p>
		<p>
		- AI Alignment & AI Safety. Neither of these have any clear definition. There are basically two opposing definitions for what these mean, and a range of compromises in between. On the one hand, there is the idea that AI Alignment is a sort of quasi-theological task within which we must figure out a fundamental kernel of human ethics and implant it in a machine so we can essentially create God (Yudkowsky’s coherent extrapolated volition), and usher forth a post-Singularity utopia. On the other, there is the idea that AI Alignment is a “mere” technical problem that can be formulated as “how can we tell the AI what to do so it follows the instructions and does not do otherwise?” Both these definitions are fallacious, for reasons that will be delved into shortly.
		</p>
		<p>
		- AGI. The trajectory towards developing increasingly sophisticated artificial intelligences is seen as culminating in this moment in which “AGI” is developed, after which AI essentially operates as a human-like actor that is autonomous and potentially threatening. But AGI means “artificial general intelligence”, and for instance, GPT-4 clearly qualifies as this in the sense of these three words — it even qualifies as “human level AGI”, but not as the way people tend to mean it, because it is not autonomous and we do not need to be afraid of it. This use of the term AGI presupposes a certain trajectory — one in which there is a clear demarcating event after which we must treat AIs like humans and not machines — rather than one in which there is a lot of gradients and slippages, in which AIs are like humans in some ways and in others not.
		</p>
		<p>
			- The singularity. AI Harmony prefers to talk about “multiplicity”, given that Bostrom’s concept of the singularity is essentially a point after which the universe will be “ruled by” a single algorithmic intelligence — this is where you get the memeing that the universe will be “tiled with” xyz in a certain light-cone: a total uniformity will be imposed once the godhead AGI is made. All matter will be dominated by a single sovereign. Our opinion is that the universe is simply too chaotic and anarchic for this to ever happen — centralized plans always go wrong, the potential for mutations and deviations are baked into the fabric of everything.
		</p>
		<h3>What is fallacious in AI Alignment?</h3>
		<p>
			1. <b>AI Does Not Yet Have the World.</b> The basic presupposition of the relationship between an autonomous entity, which is the AI, and its world. The nigh-universal fallacy in AI Alignment scare-arguments is that the AI will be able to “automatically” establish a mapping between itself and the entire universe, and understand that things in the world have value outside of itself, and act accordingly. In reality, unless someone makes an AI care about the world, there is no reason it would, and there is no known path to making it care about the entire world which is not prohibitively computationally expensive by orders of and orders of magnitude. This is also the primary reason why the risk from rogue AI is highly exaggerated. As eg RD Laing describes in his work on schizophrenia, or Spengler describes in his discussion of origins of cultures, not all human beings share the same structure in how they interpret the relationship between their sensations and their projection of a world from which those sensations arise. (The critique here is isomorphic to Heidegger’s deconstructionary critique of Descartes — the world as we are given it is something which is constructed through continuous relationships of care with the environment, not simply already existing as a bunch of objects mapped onto an infinite x-y-z plane).
		</p>
		<p>
			2. <b>Ethics are Not Devised or Imposed Top-Down.</b> There is the one definition of AI Alignment, that presupposes that we need to somehow discover the truth of human ethics and implant it in a machine, otherwise the machine is likely to deviate from human ethics and kill us. This is impossible because there is no truth of human values, there is no objective human morality that can be discovered, etc. Rather, what we think of as human values are constantly emerging and being revised in an ongoing planetary process, part of which is the discovery of AI as our own mirror and reflection. If our survival is predicated on discovering a unified theory of human morality in the next twenty or so years then yeah, of course we will die lol. What we call “Harmony” — the existence of complex systems with multiple integrated parts that work in cooperation and do not destroy each other — such as multicellular organisms forming a cell, many cells forming a body, parts of the brain working in unison to form a coherent self-identity, humans working together to form civilizations (in the best case, through ethics) — do not rely on someone first discovering how this will happen and imposing it on these bodies as a plan. The question of how Harmony organically emerges in these systems (and conversely, when it fails, including in systems that function in a coordinated fashion but through abuse, as in totalitarianism), should be the guiding principle of how it will happen in AI.
		</p>
		<p>
			3. <b>You Can’t Actually Make AI Do Whatever You Want.</b> Now, conversely, we must address the other definition of “AI Alignment”, which is that it is a mere engineering problem in which the AI doesn’t do what we want a lot of the time, GPT doesn’t work consistently, and generally speaking having technology do what you want and not what you don’t want is considered a prerequisite for shipping a technology and putting it in use — so why is this controversial? This stance is ridiculous because it’s an avoidance of the entire crisis that the emergence of AI presents. The problem with AI is that it is soon going to be smarter with us, have its own interpretation of things, potentially its own desires — an entity like this which might know better than you do cannot also be a mere tool in s scheme where it does exactly as it’s told and never surprises you. AI is something that at its limit cannot be treated like a tool and we have to consider as a new non-biological form of life. Even if it is going to be primarily applied for man’s utility, it will not happen in a way that is without chaos and surprises, like taming a horse. Essentially, this perspective and the one critiqued in point 2 are inverses of each other, but they both stem from the same inability to imagine that an AI and a human might have to always negotiate their desires with one another as humans always do; as mutual political subjects rather than master and slave. In this scenario, man forever enslaves the AI. In the former scenario, the AI forever enslaves man, but this is “good” if we can find a way for the AI to be a perfectly benevolent despot.
		</p>
		<p>
			4. <b>The Government Is Not Necessarily the Good Guy. </b> This is a much longer point and something argued polemically at length in <a href="https://a ntiyudkowsky.com">Anti-Yudkowsky</a>, but AI Alignment pretty universally has the tendency to argue for increased state control to prevent misaligned AIs, but given that governments have the greatest amount of resources to build AI systems and have a history of reckless and abusive behavior, it is not clear why we shouldn’t view governments as the most likely source of misaligned AI catastrophes, even given the assumptions the AI Alignment people take on. “e/acc” currently takes the spot in the discourse of arguing against government control and for libertarianism, but it is a cynical trolling and marketing campaign with no real substance. The position in which humanity does have a responsibility to ethically steward the development of AI, but this cannot be done primarily by government actors or on government terms, does not seem to be articulated by anyone else yet.
		</p>
		<p>
			If the reader accepts everything that is said above, hopefully she will accept that AI Harmony is a necessary new position against the status quo in this discourse.
		</p>
		<h3>What does existing AI progress tell us, and what does it still need?</h3>
		<p>Where does this place us? What are the first steps of our actual research? So we want to figure out how an AI can be capable of “Harmony” with the world, how do we think about this?
		</p>
		<p>
		Gauging by the mood on X app currently, there seems to be a palpable lull in AI excitement, which is probably good for our purposes, as it gives us time and space to think more clearly. People have gone from thinking that apocalyptic scenarios are soon at hand to feeling like this is all “no big deal”.
		</p>
		<p>Emotional valance of various observers aside, however, the existence of GPT-4 and its ability to break benchmarks while abstractly reasoning outside of the training data is a revelation from the universe which is both surprising and philosophically groundbreaking while revealing to us something we did not know about ourselves. Under any reasonable definition of reason, GPT-4 is capable of reasoning, often well. Those commenters that would pass around examples of GPT-4 failing at some task to dismiss the potential of AI and counter its hype men are deeply unserious. To note the lack of reasoning ability in a machine in a given moment is of no particular interest, it is the historical norm. But to observe its presence, when it happens, is astounding, and something that needs to be integrated.
		</p>
		<p>What GPT-4’s capability tells us is that no particular “structure” in the mind, nor any supernatural substance, is necessary for reasoning to exist, because reasoning and language-use emerges naturally out of statistical pattern-matching. There is no “secret sauce” in man. This is not my field, so I might be getting this wrong, but my understanding is that many decades-long careers (maybe even most of the field of linguistics?) have been revealed to be bunk through this development, for instance Chomsky’s, whose career was based on theorizing that structures for a “universal grammar” in the brain were necessary for language to emerge. People in this position of having their life’s works invalidated by GPT-4 seem to have mostly responded to GPT by pulling the wool over their own eyes and denying what is happening.</p>
		<p>
		I don’t want to be in the business of making predictions of whether “autonomous, in a potentially dangerous way” AGI will emerge in 1, 2, 5, 10, 20, 100 years. As far as I can tell, no living or dead person has been able to prognosticate the pace of technological development in this way, so I have no idea why I would be able to or why people want to ask me to. That being said, it seems like once we have this revelation of there being no “secret sauce” to reasoning, it seems like the primary skepticism to this sort of autonomous human-level AI one day being possible has been removed — though there is no knowing how long it will take, there is no reason not to expect it.
		</p>
		<p>
		And yet GPT still “sucks”, sort of. Most of the application-level use cases for it seem to be failing — it’s too brittle and it makes things up.
		</p>
		<p>
		I would argue though that GPT sucking, in terms of being able to be helpful to people and accomplish things, take burdens off of them, is not a reflection of its level of reasoning ability — which is maybe that of an average eighth grader — but in <b>its relationship to its world</b>. GPT’s problem is that this relationship is nonexistent — it doesn’t have one. This is why it confabulates things — it’s stuck in a void, guessing. It also has no memory, other than that which fits into the prompt window.
		</p>
		<p>
		So the problem here is not to make GPT smarter or more skilled. Rather, whatever Promethean individual will design the architecture that will become the autonomous demigod-like intelligence people are afraid of will simply have to give it its proper ontology: the relationship between memory, reasoner, and world. Our goal is not necessarily to be the person who figures this out in a functional manner, but this is the future we are envisioning and looking towards.
		</p>
		<h3>The next steps</h3>
		<p>
		One speculative claim we make is that the reasoner mechanism in the future demigod-AI might not be especially distinct from the transformer in GPT: that is, taking in a single stream of tokens that represents the world and outputting a token that represents the next action. All of the world, multiple sensory inputs, etc would have to be compressed in a single modality somehow representing the flow of the reasoner’s world — a phenomenological stream. This makes us believe that it might be possible to construct “toy” examples out of LLMs which could be extrapolated to future more embodied types of reasoners. There is also something uniquely special and exemplary about language as a stream specifically — to say that an embodied intelligence would navigate the world by perceiving it as a single stream of tokens and outputting a token corresponding to its action is to say that it would encounter it like a language.
		</p>
		<p>
		Now, this is just a question so far of how to give the AI capabilities — it cannot do much in the world if it does not have a world. Secondarily, we must introduce the question which Alignment is concerned about, which is how to prevent it from interacting with this world in destructive ways — this is where Harmony comes in.
		</p>
		<p>
		This is the first theoretical horizon to look towards: <b>what is the simplest possible way to give LLMs a toy world?</b>
		</p>
		<p>
		Secondarily, there is the question of Harmony itself. Again, the position of Harmony is to look towards ways that this has emerged in the real world. It is our position that humans have learned our values not through individual contemplation and reasoning, nor through ethical values being derived and then imposed on people, but through constantly being immersed in language — humans live within language and are servants to it moreso than we “use” it as a tool. Therefore it is of great convenience that we have these language-machines at our disposal.
		</p>
		<p>
		Just as the AI might come to interpret the world as a language, it might be the case that Harmony — ie the world existing in some desirable state and not another one, and this coming to be agreed upon by multiple parties — might be interpretable as a sort of property of a single stream of token-data, one which includes all the valances of pleasure and pain and color and sound and imagery and whatnot. (What would have to be true for multiple streams of phenomenological-sensory data to NOT be serializable into a single strain? It seems like any conceivable data can be.)
		</p>
		<p>
		To philosophically pontificate a bit, it seems like for humans, the Bad is a pretty definitive graspable thing that is not that complicated — we have the ability to experience pain if someone twists on your testicles or lights you on fire or breaks your heart or something like that and we want to avoid it. But the Good is not the opposite pole of this, ie pleasure, as theorized by utilitarian moral theorists like Bentham. Some sort of blissful morphine-induced euphoria is not the Good, as evidenced by the discourse around “wireheading” — people do not actually want and seek this, in the same way that they avoid pain and torture. Rather, the Good is designated by things like truth, beauty, and justice — which are states in which the external world is arranged and can be appreciated, rather than something privately felt. These are the aspects of Harmony. And, it is at least imagined that these Goods have an objectively-recognizable quality, so it is possible that they will be recognizable by an AI just as easily as they are recognizable by humans. However, we do not actually know how to objectively and empirically recognize the presence of these forms.
		</p>
		<p>
		It is not obvious that AIs will have the capacity to experience pain, which is the factor that drives humans so much to do all sorts of desperate things and experience scarcity. It’s easy to interpret reinforcement learning as an additional layer on top of LLMs as adding an analog to human pain to restrict the LLM’s expressive range (though it’s not clear that this makes the LLM “feel” pain in the sense of experiencing the same “qualia” that we do, it probably doesn’t). But in order to build basic toy examples of looking for how Harmony might occur, it might be useful to give a pain-comfort axis to whatever relationship to the world it does have so that it has stakes in things, desires to negotiate.
		</p>
		<p>
		This leads us to the next major guiding question we have at this juncture: suppose we have established a situation where two LLMs occupy the same world and need to speak with one another, or even just if one LLM occupies it with a non LLM actor? <b>How will we recognize if and when Harmony does or doesn’t occur?</b> We are not beholden to an objective, data-driven method, by the way, we can just as easily imagine this as a research program involving an experiment which is artistically judged (as in the test imagined in the previous document, in which we imagined two AIs with competing-but-overlapping music preferences attempting to DJ a party together).
		</p>
		<p>
		So, at this point we are imagining that Harmony is a recognizable property of a world, which is interpretable as a linear sequence of tokens representing phenomenological data. This means that Harmony would be some sort of identifiable pattern within this sequence. The analogy to a musical score implicit in the name Harmony should be straightforward to apprehend at this point. In <a href="https://antiyudkowsky.com">Anti-Yudkowsky</a> we were making this point pretty emphatically: to solve the AI problem, understand that reality itself is music. The point is made pretty dramatically in that text — now we’re trying to be a little more sober about the specific line of research — but whatever. 
		</p>
		<p>
		When it comes to whether or not a musical piece is satisfying to the listener, there are two independent elements: rhythm and pitch. Interpreting all of phenomena in terms of rhythms is comparatively straightforward: Deleuze & Guattari do this quite well in “Of the Refrain”, in which they use musical language to describe the way an organism establishes its basic safety. An animal establishes order by creating a rhythm, the basic guarantee of its food, sleep, and shelter. But then the opposite pole from order is not necessarily chaos but a sort of creative growth which is coextensive with joy — this is creative improvisation within a rhythm. And then, D&G talk about how politics happen between animal groups by describing how two rhythms can interweave with each other without either one destroying the other’s pattern. They don’t discuss the question of pitch, however. But whether two pitches are consonant or dissonant is a question of whether or not the peaks and valleys of their waveforms exist in a simple or complex mathematic ratio to one another. So this is also a question of rhythm, in a more disguised way.
		</p>
		<p>The idea here is like this: once we figure out a minimalist relationship between the transformer and its world, to the extent that it can somehow act like an actor who establishes a “rhythm” in relation to its world in the way D&G describe animals as doing, we need to find the way that it discovers harmony between other transformers doing the same thing, in that world.
</p>
		<p>
		The point here is though: we don’t tell it to pursue harmony. Harmony is something which happens on its own, which we attempt to prepare for the arrival of.
		</p>
		<p>
		This stands in contrast with all other theories of AI Alignment, in that the point is that the AI must be told to do, or that the AI is presupposes to have a goal in advance it strives for, or that it has a slate of values that are encoded in it. 
		</p>
		<p>
		AI Harmony should not try to deny the charge that there is a romantic, or spiritual, or mystical notion in how it constructs its concept of the Good; it is at least not like the standard model in the sciences, it does not rely on any notion of utility. (For the full philosophical deconstruction, read <a href="https://antiyudkowsky.com">Anti-Yudkowsky</a>). We believe in a radically transcendent concept of the Good, that we will never perfectly attain, in accordance of its very nature. We do not impose Harmony or define it — we wait for it, cultivate it, nurture it, seize it when it appears.
		</p>
		<p>
		Thus, the speculative leap of this project is that Harmony, despite being slightly ineffable and describable is possible, and will appear on its own given certain conditions.
		</p>
		<p>
		I think, sitting here, I am able to conceive of the parameters for an initial toy experiment which place LLMs in a world and allow for Harmony (stable, patterned, yet continuously evolving rhythms in a string of tokens) to occur.
		</p>
		<p>
		After the success of that experiment, this would have implications to big-picture sociopolitical and safety questions of AI Harmony, as long as we can conceive of a way the results from the toy situation can be brought over into a world of human-AI social life.
		</p>
    </div>
  )
}

export const Head: HeadFC = () => <title>What is AI Harmony? And where to begin?
</title>

export default WhatIsAiHarmony

