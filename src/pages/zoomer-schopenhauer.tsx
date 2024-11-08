import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../index.scss"

const CSVSPage: React.FC<PageProps> = () => {
  return (
    <div className="container">
    <h1>Zoomer Schopenhauer (Dialogues pt. 1)</h1>
		<div><a href="/">← Home</a></div>
		<p>
            <i>
                I'm trying something new where we I start a series on here where I interview my peers who are pursuing interesting lines of thinking or research, in the arts, sciences, philosphy, whatever it may be. 
            </i>
            <i>
                "Writing" is in an interesting place right now. The internet has a bad ecology at the moment; really it's had a bad ecology or a while. People asking big questions and thinking outside the box, or whatever have you, are having a hard time finding each other... leaving interesting people isolated and cynical. Facing a culture-war paradigm where everything must position themselves somewhere against "left" and "right" — two quasi-arbitrary categories continuously elevated to trans-historical absolutes — we have been bracketed into an oppositional discourse which has been impossible to escape from.
            </i>
            <i>
                At some point, the blogosphere died, and then at some other point, it was singlehandedly revived by Substack. Why am I not writing on Substack? Maybe because everyone else is, and because it's so easy to make your own HTML website, and yet no one is doing that. It's a protest against slop, or trends, or even curation entirely, or something like that.
            </i>
            <i>
                Where are we supposed to talk to each other? In group chats? In Discords? In the Substack comment section? Nothing feels exactly quite right. There is plausibly a way that with the right plumbing, a "Republic of Letters" could be created on the internet somehow, and a new renaissance could be birthed. Or maybe this is a fantasy. Writing this now, three days after the Trump victory in America, the future of culture and its ecology feels totally unpredictable, and like anything can shift.
            </i>
            <i>
                As you'll see in the following conversation, Zoomer Schopenhauer, an online philosopher who describes himself as a "futurist internet nomad", has been asking the same questions, though from an askance angle. Where do the nomadic intellectuals of the future find each other? And when we find each other, what do we do?
            </i>
            <hr/>
        </p>
		<div><a href="/">← Home</a></div>
    </div>
		
  )
}

export const Head: HeadFC = () => <title>Zoomer Schopenhauer (Dialogues pt. 1)</title>

export default CSVSPage

