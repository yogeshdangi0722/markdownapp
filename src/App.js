import React, { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const App = () => {
  const [markdown,setmardown] = useState("## hello world");
  return (
    <main>
    
    <div className='heading'>
    <h2>Markdown Application</h2>
    </div>
    <section className='markdown'>
    <textarea className='input' value={markdown} onChange={(e)=>{setmardown(e.target.value)}}></textarea>
    <article className='result'>
    <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
    </section>
    </main>
  )
}

export default App