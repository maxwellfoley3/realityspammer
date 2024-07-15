import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

const IndexPage: React.FC<PageProps> = ({ data, location}) => {
  return (
    <div className="container">
    <h1>Realworld 🤯 </h1>
    <p>Hello, I go on the internet by Realityspammer.</p>
    <p>This is the home page for my various projects. I am working on a writing-machine which consists of several co-enveloping assemblages.</p>
    <p>Generally speaking I am interested in sociocultural structures and technology. I hope for my writing to establish lines to traverse upon which we may discover new evolutionary trajectories for these systems.</p>
    <p><a href="https://twitter.com/realityspammer">Twitter</a></p>
    <p><a href="https://realitygamer.substack.com">Substack</a></p>
    <p><a href="https://instagram.com/realityspammer">Instagram</a></p>
    <h3>Blog</h3>
    <li><i>July 15, 2024</i><span className="dot-separator">•</span> <a href="/blog/art-and-duty">Art and Duty</a></li>
    <li><i>May 22, 2024</i><span className="dot-separator">•</span> <a href="/blog/2024-may">X app memetico-political analysis May 2024</a></li>
    <li><i>April 23, 2024</i> <span className="dot-separator">•</span> <a href="/blog/network-solipsism">Network Solipsism</a></li>
    <li><i>February 20, 2024</i> <span className="dot-separator">•</span> <a href="/blog/elon-takeover">Just to state the obvious, Elon’s takeover of Twitter is a major historical event</a></li>
    <li><i>February 15, 2024</i> <span className="dot-separator">•</span> <a href="/blog/knockdown-center">Tisakorean, 100 Gecs, and Liturgy</a></li>
    <li><i>January 20, 2024</i> <span className="dot-separator">•</span> <a href="/blog/after-optimism">After Optimism</a></li>
    <li><i>December 22, 2023</i> <span className="dot-separator">•</span> <a href="/blog/what-is-deleuze">What is Deleuze doing? Or trying to do?</a></li>
    <li><i>December 16, 2023</i> <span className="dot-separator">•</span> <a href="/blog/hello-world">New Blog Hello World</a></li>
    <h3>AI Harmony <span style={{fontSize:'12px'}}>(for Harmless AI)</span></h3>
    <li>1. <a href="https://harmlessai.substack.com/p/the-dangers-of-a-safe-large-language">The Dangers of a Safe Large Language Model</a></li>
    <li>2. <a href="https://harmlessai.substack.com/p/is-gpt-3-a-wordcel-and-silicon-valleys">Is GPT-3 a Wordcel?</a></li>
    <li>3. <a href="https://antiyudkowsky.com">Anti-Yudkowsky</a></li>
    <li>4. <a href="/ai-harmony-research">The AI Harmony Research Program</a></li>
    <li>5. <a href="/what-is-ai-harmony">What is AI Harmony? And where to begin?</a></li>
    <h3>Realboyism</h3>
    <li><a href="https://realitygamer.substack.com/p/based-deleuze">Based Deleuze</a></li>
    <li>1. <a href="https://realitygamer.substack.com/p/realboyism-fall-of-the-fall-agi-drugs">Fall of the Fall & AGI Drugs You Should Try It</a></li>
    <li>2. Canal Street Fashion</li>
    <h3>Corporate Surrealism <span style={{fontSize:'12px'}}>(in association with Harmless AI and Wagon Box)</span> </h3>
    <li>1. Towards a Form of Life</li>
    <li>2. <a href="/corporate-surrealist-vibe-shift">The Corporate Surrealist Vibe Shift</a></li>
    <li>3. Capitalism vs. Anti-Capitalism</li>
    <li>4. <a href="/national-socialism">Against National Socialism</a></li>
    <li>5. Towards a Corporate Surrealist Ontology, through Bataille</li>
    <li>6. Towards a Corporate Surrealist Ontology, through Hjemslev</li>
    <h3>Web4</h3>
    <li>1. Rooms</li>
    <li>2. Towards an Ontology of Social Media</li> 
    <h3>Guattari Gang</h3>
    <li>🌏 Guattari Glossary</li>
    <li>1. <a href="/guattari-gang">Guattari Gang</a></li>
    <li>2. <a href="/anti-oedipus">Reflections on Anti-Oedipus</a></li>
    <h3>Podcast appearances</h3>
    <li><i>August 28, 2023</i> <span className="dot-separator">•</span> <a href="https://www.patreon.com/posts/168-i-mega-gamer-88066848">Contain</a></li>
    <li><i>June 15, 2022</i> <span className="dot-separator">•</span> <a href="https://castbox.fm/episode/The-BUNTZCAST-1%3A-Reality-Gamer-id4980025-id506814280?country=us">Buntzcast</a></li>
    {
      /*
      <h3>Universalist Christianity <span style={{fontSize:'12px'}}>(for Wagon Box)</span></h3>
      <li>1. <a href="/universalist-christianity">Towards Universalist Christianity</a></li>
      */
    }
    </div>
    
  )
}

export const Head: HeadFC = () => <title>Realworld</title>

export default IndexPage

