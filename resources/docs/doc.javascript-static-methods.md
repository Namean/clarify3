# JavaScript static methods
https://www.javascripttutorial.net/es6/javascript-static-method/#:~:text=Summary%201%20JavaScript%20static%20methods%20are%20shared%20among,in%20a%20class%20constructor%20or%20an%20instance%20method.


### Document Information
```json

{
	"title": "JavaScript Static Methods",
	"url": "https://docs.pytest.org/en/7.1.x/getting-started.html#getstarted",
	"author": "",
	"publisher": "",
	"isMedia": false,
	"postDate": "",
	"codeSnippetsArray": [],
}


```



```javascript
// Pre-ES6 static method

function Person(name) {
	this.name = name;
}

Person.prototype.getName = function() {
	return this.name;
}

```

The following adds a static method called createAnonymous() to the Person type:

```javascript
Person.createAnonymous = function(gender) {
	let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
	return new Person(name);
}

var anonymous = Person.createAnonymous();
```


### JavaScript static methods in ES6
```javascript
class Person {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}
	static createAnonymous(gender) {
		let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
		return new Person(name);
	}
}
```

To invode the static method, you use the following syntax:
```javascript
let anonymous = Person.createAnonymous('male');
```

If you attempt to call the static method from an instance of the class, you'll get an error.
// For example:
```javascript
let person = new Person('James Doe');
let anonymous = person.createAnonymous('male');
```

Calling a static method from the class constructor or an instance method

To call a static method from a class constructor or an instance method, you use the class name, followed by the . and the static method

```javascript
className.staticMethodName();
```
Alternativly, you can use the following syntax:
this.constructor.staticMethodName();

### Summary

 - JavaScript static methods are shared among instances of a class. Therefore, they are bound to the class.

 - Call the static methods via the class name, not the instance of that class.

 - Use classname.staticMethodname() or this.constructor.staticMethodName() to

 - call a static method in a class constructor or an instance method.
