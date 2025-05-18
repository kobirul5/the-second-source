<h1>CSS </h1>
  <h2> CSS Position Types</h2>

  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Position Type</th>
        <th>Meaning (Easy Words)</th>
        <th>Code Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>relative</code></td>
        <td>Moves a little from its normal spot</td>
        <td><pre><code>.box {
  position: relative;
  top: 10px;
  left: 10px;
}</code></pre></td>
      </tr>
      <tr>
        <td><code>absolute</code></td>
        <td>Sticks to the closest parent box</td>
        <td><pre><code>.box {
  position: absolute;
  top: 0;
  left: 0;
}</code></pre></td>
      </tr>
      <tr>
        <td><code>fixed</code></td>
        <td>Stays on the screen even when scrolling</td>
        <td><pre><code>.box {
  position: fixed;
  bottom: 10px;
  right: 10px;
}</code></pre></td>
      </tr>
    </tbody>
  </table>

  <hr>

  <h2>What is <code>z-index</code>?</h2>

  <p><code>z-index</code> controls which box or item appears <strong>on top</strong> when many items overlap.</p>

  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Term</th>
        <th>Meaning (Easy Words)</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>z-index</code></td>
        <td>Shows what comes on top like cake layers</td>
        <td><pre><code>.box {
  z-index: 2;
}</code></pre></td>
      </tr>
    </tbody>
  </table>

  <h3> Real Life Example of <code>z-index</code></h3>
  <ul>
    <li>When you open a <strong>popup</strong> or <strong>menu</strong> on a website — it comes <strong>on top</strong>.</li>
    <li>This happens using <code>z-index</code>.</li>
  </ul>

  <hr>

  <h1>JavaScript Basics (For Beginners)</h1>

  <h2>== vs ===</h2>
  <ul>
    <li><code>==</code> checks only values. It does not care about type.<br>
      <strong>Example:</strong> <code>5 == "5"</code> → true</li>
    <li><code>===</code> checks values and types. It is stricter.<br>
      <strong>Example:</strong> <code>5 === "5"</code> → false</li>
    <li><strong>So,</strong> <code>===</code> is more careful than <code>==</code>.</li>
  </ul>

  <h2> What is a Closure?</h2>
  <p>A closure is when a function remembers the things (like variables) from the place where it was made — even if it’s used later.</p>
  <p>Think of it like a child remembering what their parent told them, even when they are far away.</p>
  <p><strong>Closures help keep data safe and private.</strong></p>

  <h2> What is a Debounce Function?</h2>
  <p><strong>Debounce means:</strong><br>
  “Wait before doing something. If the same thing is asked again, restart the wait.”</p>
  <p>It is used when someone keeps clicking or typing quickly — debounce waits until the person stops and then does the job.</p>
  <p><strong>Example:</strong> Typing in a search box — debounce waits until you stop typing before searching.</p>

  <h2> What is the Event Loop?</h2>
  <p>JavaScript can do many things at the same time.</p>
  <p>The <strong>event loop</strong> helps JavaScript run code, wait for things (like timers), and then go back to finish the waiting jobs later.</p>
  <p><strong>Example:</strong> If you tell it to wait 1 second and print something, JavaScript will continue other work and come back later to print that thing.</p>
  <p>It makes JavaScript fast and smooth.</p>

