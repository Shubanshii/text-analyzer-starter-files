// your code here!

$(document).ready(function(){
	$('form').submit(function(event){
		//prevent default isn't working as i want it to
		event.preventDefault();
		$('dl').removeClass('hidden');
		var message = $('textarea').val();
		var wordArray = [];
		var wordObject = {};
		//total number of characters to later be divided by the total number of words
		var charNum = 0;
	//console.log(message);
	function getTokens(rawString) {
		//console.log(rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort());
  // NB: `.filter(Boolean)` removes any falsy items from an array
  wordArray = rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
  
}
	getTokens(message);
	
	$('.js-word-count').append(wordArray.length);

	// console.log(wordArray.length);
	//This number will be reduced by 1 each time we find a repeat word
	var uniqueWordCount = wordArray.length;
	wordArray.forEach(function(word){
		charNum += word.length;
		if(word in wordObject) {
			uniqueWordCount--;
		}
		else{
			wordObject[word] = 1;
		}
		
	})
	console.log("the number of characters is" + charNum);
	var avgWordLength = charNum / wordArray.length;
	$('.js-unique-word-count').append(uniqueWordCount);
	$('.js-average-word-length').append(avgWordLength + ' characters');

})

});