import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

const CSVSPage: React.FC<PageProps> = () => {
  return (
    <div className="container">
    <h1>York</h1>
		<div><a href="/">← Home</a></div>
		<p>
		Project codenamed "York" because I need a name to think of it as, and I've been listening to Thom Yorke all day plus we live in New York
		</p>
		<h3>
		Ontology
		</h3>
		<p>
		Imagine that all of social media is an acyclic graph. A STEM has LEAVES, which are essentially its child comments. Each leaf is its own stem
		</p>
		<p>
		Stem has title (optional), body, and a preference for how its leaves are ranked (chronological, popularity upvotes-only (likes), or upvote-downvote, or fixed (specifies a certain amount of leaves in a certain order)). The TRUNK stores the likes across all its leaves -- the leaves do not store the amount of their own likes
		</p>
		<p>
		This exists on top of the hyperlink structure of the web in general
		</p>
		<p>
		From this basic ontology, you can deduce basically all diverging social platforms as cases of decisions plus visual decisions — Twitter, Tumblr, 4chan, 8chan, Reddit, Youtube, BBS forums
		</p>
		<h3>
		Purpose
		</h3>
		<p>
		Make it very easy to integrate social-media like features (comment sections, discussion boards) into people's websites within which they would have complete control over the visual decision in order to contextualize the information on it
		</p>
		<p>
		It's like Myspace again. You get to decide what it looks like
		</p>
		<p>
		These discussion boards would sort of weave in with one another because their comments break off and form new boards thus making them not silo-d
		</p>
		<h3>
		Infrastructure
		</h3>
		<p>
		Would need to have a back end software which is the node in which things are hosted, and then a UI toolkit to integrate it into your site
		</p>
		<p>
		There could be a hosted service for people who don't want to do much configuration of it themselves
		</p>
		<p>
		A centralized service run by the company who develops these things could host a feed and discovery hub that makes money on advertising logic
		</p>
		<h3>Identity</h3>
		<p>
		Assume a single cryptographic identity system across the entire network. Can just piggyback off of Ethereum
		</p>
		<h3>Hosting</h3>
		<p>
		The fediverse doesn’t really solve any problems because all it does is make it so multiple servers are competing to host your conversation and they all have weird rules/problems. Really you want to just make it easy to host your own conversation
		</p>
		<p>
		When you first publish a leaf on someone’s stem, it will be hosted on their server. But you can take ownership of it to place it on your own server instead. There will be some indication in the UI that the ownership has moved cross-server
		</p>
		<p>
		You can control who adds leaves on your server 
		</p>
		<h3>Notifications</h3>
		<p>
		Some notification agent would have to be running for each user that maintains a connection to the servers he has recently published comments on notifying him if there is a response. Maybe this would require an account w the centralized feed service
		</p>
    </div>
		
  )
}

export const Head: HeadFC = () => <title>York</title>

export default CSVSPage