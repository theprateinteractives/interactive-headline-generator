import { gs, createGeneration } from '@drafty/generation-game';
import {
  interactiveKicker,
  quizStarters,
  targets,
  iWe,
  place,
  opinion,
  bestworst,
  nouns,
  bands,
  unicities,
  topics,
  courses,
  targetsPeople,
  newsPerson,
  newsStory,
  postrank,
  UniStinger,
  UniOp,
  person,
  meetings,
} from './data';
import './style.css';

interactiveManager.init().innerHTML = `<h1 class="idea"></h1><div><button class="refreshButton">brainstorm another</button></div>`;

const idea = document.querySelector('.idea');

const generation = createGeneration([
  gs`${interactiveKicker.map(s => s.toUpperCase())}: ${quizStarters} ${targets}?`,
  gs`${interactiveKicker.map(s => s.toUpperCase())}: Can you spot difference between ${targets} and ${targets}?`,
  gs`${iWe} went to a ${place} and it was ${opinion}`,
  gs`QUIZ: Are these quotes from ${targets} or are they ${bands} lyrics?`,
  gs`We asked ${targets} what they thought of ${targets}`,
  gs`We ranked the ${bestworst} ${nouns} ${postrank}` ,
  gs`${UniStinger} ${unicities} ${UniOp}`,
  gs`Every ${person} you'll ${meetings}`,
  gs`Why ${targets} are better than ${targets}`,
  gs`We got ${targetsPeople} to discuss ${nouns}`,
  gs`We got ${courses} students to discuss ${topics}`,
  gs`${unicities} ${newsPerson} ${newsStory}`,
  gs`We got ${targetsPeople} to discuss ${topics}`,
  gs`What ${['university', 'course']} ${['does the most drugs' , 'has the most sex', 'drinks the most', 'goes out the most', 'has the most single students', 'has the most fuckbois']}?`,
  gs`We went to ${place} and took ${['ketamine', 'MDMA', 'cocaine', 'acid']}`
]);

console.log(`[generation-game] total combinations: ${generation.totalCombinations}`);

idea.innerHTML = generation.generate();

document.querySelector('.refreshButton').addEventListener('click', () => {
  idea.innerHTML = generation.generate();
});

