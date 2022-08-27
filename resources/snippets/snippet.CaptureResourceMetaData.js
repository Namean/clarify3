console.log(document.title);
console.log(window.location.href);
let dt = new Date();
console.log(dt.getTime());

obj = {
    title: document.title,
    url: window.location.href,
    visitedAt: new Date(),
    hostname: window.location.hostname,

    displayAllMetaTags: () => {
      [...document.querySelectorAll('meta')].map(x => console.log(x));  
    },
    returnAllMetaTags: () => {
        let buffer;
        buffer = [];
        [...document.querySelectorAll('meta')].map(x => buffer.push(x));
        return buffer;
    },

    
    formatForMarkdownDoc: (self) => {
        console.log(`# document.title
document.url


### ${self.title}
{
	"title": "${self.title}",
	"url": "${self.url}",
	"visitedAt": ${self.visitedAt.getTime()},
	"author": "",
    "hostname": ${self.hostname}
	"publisher": "",
	"isMedia": false,
	"postDate": "",
	"codeSnippetsArray": [],
}
`)
    }
}

// console.log(obj.formatForMarkdownDoc(obj));
let data = obj.returnAllMetaTags();
