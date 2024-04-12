function calculateDosha() {
  // Get the selected options
  const answers = document.querySelectorAll('input[class="answer"]:checked');
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.style.display = 'none';
  const resultsDiv = document.querySelector("#result");
  resultsDiv.style.visibility = "visible";
  // Count the occurrences of A, B, and C
  let countA = 0, countB = 0, countC = 0;
  answers.forEach(answer => {
    if (answer.value === 'A') { countA++; }
    else if (answer.value === 'B') { countB++; }
    else if (answer.value === 'C') { countC++; }
  });

  // Determine the predominant dosha
  let dosha = '';
  if (countA > countB && countA > countC) { 
    dosha = 'Vata Dosha';
    resultsDiv.innerHTML = `<h2>Your Predominant Dosha is: ${dosha}. <br> </h2><p>Vata is one of the three doshas in Ayurveda, associated with the elements of air and space. It governs movement in the body and mind. When in balance, it promotes creativity and energy, but imbalances can lead to anxiety, restlessness, and physical issues like dry skin. Balancing Vata involves warm, nourishing foods, regular routines, rest, and grounding activities. Ayurveda tailors recommendations based on an individual's unique constitution.</p>`;
  }
  else if (countB > countA && countB > countC) { 
    dosha = 'Pitta Dosha';
    resultsDiv.innerHTML = `<h2>Your Predominant Dosha is: ${dosha}.</h2> <br> <p>Pitta is one of the three doshas in Ayurveda, associated with the elements of fire and water. It governs metabolism, digestion, and body temperature. In balance, Pitta promotes intelligence and courage, but imbalances can lead to irritability, inflammation, and digestive issues. Balancing Pitta involves cooling foods, a calm environment, and stress management. Ayurveda provides personalized recommendations based on an individual's constitution.</p>`;
   }
  else if (countC > countA && countC > countB) { 
    dosha = 'Kapha Dosha';
    resultsDiv.innerHTML = `<h2>Your Predominant Dosha is: ${dosha}. </h2><br> <p>Kapha is one of the three doshas in Ayurveda, associated with the elements of earth and water. It governs stability, structure, and lubrication in the body. In balance, Kapha promotes calmness and endurance, but imbalances can lead to lethargy, weight gain, and respiratory issues. Balancing Kapha involves a diet emphasizing warmth, stimulation, and regular exercise. Ayurveda tailors recommendations based on an individual's unique constitution.</p>`;
   }
  else { 
    dosha = 'Balanced Doshas';
    resultsDiv.innerHTML = `<h2>Your Predominant Dosha is: ${dosha}. </h2><br> <p>
    Balanced doshas in Ayurveda signify a state where Vata, Pitta, and Kapha are in harmony. This balance promotes overall well-being. Balanced Vata fosters creativity and energy, balanced Pitta supports intelligence and digestion, and balanced Kapha ensures stability and endurance. Lifestyle choices, diet, and practices that suit an individual's unique constitution help maintain doshic equilibrium in Ayurveda.</p>`;

  // Update the 'results' div with the dosha indication
  
  
  }
}