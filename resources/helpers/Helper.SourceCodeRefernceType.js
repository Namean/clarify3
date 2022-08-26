// createCodeSnippetArray


const sourceCodeStringReferenceType(id, sourceCodeArray) {

}


const createCodeSnippetArray(rawSourceCode) {
	
	//TODO handleInputStringValdation();
	//TODO handleInputStringSanitization();

	const sourceCodeString = rawSourceCode;
	return sourceCodeString.split('\n');

}
