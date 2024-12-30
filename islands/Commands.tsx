function Commands() {
  return (
    <div>
        <p>Type a command to know more</p>
        <pre>projects    view coding projects</pre>
        <pre>skills      view the list of skills</pre>
        <pre>status      find what I am currently working on</pre>
        <pre>dev         find me on dev.to</pre>
        <pre>clear       clear terminal</pre>
        <label>{`>`}</label>
        <input type="text" class="command-input" name="command-input" />
    </div>
  )
}

export default Commands