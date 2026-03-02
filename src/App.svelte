<script>
  import { puzzles } from "./data/puzzles";
  import Game from "./lib/Game.svelte";

  const puzzleStartDate = new Date('2026-03-01')
  const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
  const puzzleNumber = Math.floor( ( Number(today) - Number(puzzleStartDate) )/86400000 )
  // let puzzle = $state(puzzles[puzzleNumber])
  // puzzle.statements = puzzle.statements.map(s => Object.assign({}, s, { selected: false }))
  let puzzle = $state({
  ...puzzles[puzzleNumber],
  statements: puzzles[puzzleNumber].statements.map(s => ({ ...s, selected: false }))
})

</script>

<main>

  <Game puzzle={puzzle} puzzleNumber={puzzleNumber} />

  <br><br><br><button onclick={() => {localStorage.clear; window.location.reload()}}>DELETE LocalStorage</button>

</main>

<style>
main {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}
</style>
