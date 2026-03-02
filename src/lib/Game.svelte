<script>
  import { onMount } from "svelte"
  let { puzzle, puzzleNumber } = $props()
  let timer
  let time = $state(0)
  let lsItem = JSON.parse(localStorage.getItem('4faaf'))

  let score = $state(0)

  let win = $state(false)

  let guesses = $state(0)

  let showInstructions = $state(true)

  function loadFromStorage() {
    if (lsItem && lsItem.p === puzzleNumber) {
      time = lsItem.t
      guesses = lsItem.g
      score = lsItem.s
      win = lsItem.w
      showInstructions = false
      for (let i = 0; i < puzzle.statements.length; i++) {
        puzzle.statements[i].selected = lsItem.ss[i]
      }
    }
  }

  loadFromStorage()

  onMount(() => {
    if (win) {
      return
    }
    timer = setInterval(() => {
      time++
    }, 1000)
    return () => clearInterval(timer)
  })

  function submitGuess() {
    guesses++

    // win con is selected = true for all except for fact = false.
    let truths = puzzle.statements.filter(s => s.fact === true)
    let fib = puzzle.statements.filter(s => s.fact === false)

    if ( !truths.find(t => t.selected === false) && fib.find(f => f.selected === false) ) {
      clearInterval(timer)
      score = 1000 - ( time<6 ? 0 : (time-5) * 3 ) - ( guesses===1 ? 0 : (guesses-1)*90 )
      win = true
    } else if (fib.find(f => f.selected === false)){
      alert('Facts, but find more!')
    } else {
      alert('Keep trying :]')
    }
    localStorage.setItem('4faaf', JSON.stringify({p: puzzleNumber, t: time, g: guesses, s: score, w: win, ss: puzzle.statements.map(s => s.selected)}))

  }

  function copyScore() {
    let msg = `4 Facts and a Fib - Day ${puzzleNumber+1}
⏱️ ${time}s | 🎯 ${guesses} guesses | ⭐ ${score}pts
4factsandafib.games.techforge365.com`
    
    navigator.clipboard.writeText(msg)
  }

</script>

<section class="game-container">

  <header class="game-header">
    <h1>4 Facts and a Fib</h1>
    <p class="day-number">Day {puzzleNumber + 1}</p>
  </header>

  <div class="stats-bar">
    <span>⏱️ {time}s</span>
    <span>🎯 {guesses} guesses</span>
  </div>

  {#if win}
    <div class="win-banner">
      <strong>⭐ {score} pts</strong>
    </div>
  {/if}

  {#if !win}
    <div class="statements">
      {#each puzzle.statements as s}
        <button class="statement-card" class:selected={s.selected} onclick={() => s.selected = !s.selected}>
          {s.text}
        </button>
      {/each}
    </div>
    <button class="submit-btn" onclick={submitGuess}>Submit Guess</button>
  {:else}
    <div class="statements">
      {#each puzzle.statements as s}
        <div class="statement-card" class:fact={s.fact} class:fib={!s.fact}>
          {s.text}
        </div>
      {/each}
    </div>
    <p class="fib-explanation">{puzzle.fibExplanation}</p>
    <button class="share-btn" onclick={copyScore}>Copy Score</button>
  {/if}

</section>

<style>
.game-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.game-header {
  text-align: center;
  margin-bottom: 0.5rem;
}

.game-header h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--text);
}

.day-number {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.win-banner {
  text-align: center;
  padding: 1rem;
  background: var(--accent);
  color: #ffffff;
  border-radius: 8px;
  font-size: 1.25rem;
}

.statements {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.statement-card {
  width: 100%;
  padding: 1rem 1.25rem;
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 10px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.statement-card:hover {
  border-color: var(--accent);
}

.statement-card.selected {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, var(--surface));
}

.statement-card.fact {
  border-color: var(--fact);
  color: var(--fact);
}

.statement-card.fib {
  border-color: var(--fib);
  color: var(--fib);
  text-decoration: line-through;
}

.submit-btn,
.share-btn {
  width: 100%;
  padding: 0.9rem;
  background: var(--accent);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  font-family: Georgia, 'Times New Roman', serif;
}

.submit-btn:hover,
.share-btn:hover {
  background: var(--accent-hover);
}

.fib-explanation {
  font-size: 0.9rem;
  color: var(--text-muted);
  padding: 1rem;
  background: var(--surface);
  border-radius: 8px;
  border-left: 3px solid var(--fib);
  line-height: 1.6;
}
</style>