<script>
  let { showInstructions = $bindable() } = $props()
</script>

<div class="modal-overlay">
  <section class="instructions-container">
    <button class="btn-close" onclick={() => showInstructions = false}>✕</button>
    <h1>Welcome to 4 Facts and a Fib! 🤓</h1>
    <h3>How to Play</h3>
    <div class="instructions-body">
      <p>You'll be presented with 5 statements — 4 facts and 1 fib. Your goal is to identify all 4 facts.</p>
      <ul>
        <li>Select any statements you believe are facts and hit <strong>Submit Guess</strong></li>
        <li>Submitting fewer than 4 helps you confirm facts and narrow things down</li>
        <li>The fewer guesses and less time you take, the higher your score</li>
        <li>Once you've found all 4 facts, you win!</li>
      </ul>
      <p>A new puzzle is available every day. Good luck! 🧠</p>
    </div>
  </section>
</div>

<style>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 1rem;
  }

  .instructions-container {
    background: var(--bg);
    border-radius: 12px;
    padding: 2rem;
    max-width: 500px;
    width: 100%;
    position: relative;
    box-shadow: var(--shadow);
  }

  .btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--text-muted);
    padding: 0.25rem 0.5rem;
  }

  .btn-close:hover {
    color: var(--text);
  }

  h1 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    padding-right: 2rem;
  }

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  .instructions-body p {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  ul {
    margin: 0 0 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    font-size: 0.95rem;
    line-height: 1.5;
  }
</style>