module.exports = {
	book: { assets: "./book", css: [ "block.css" ] },
	hooks: {
		"page": function(page) {
			var regix = /(<p>!FILENAME\s([^\s]+)<\/p>)\n<pre>[\s\S]*?(<\/pre>)/;
			var replacer = function(filename){
				return '<div class="code-filename">' + filename + '</div>'; 
			}

			for(var i = 0; i < page.sections.length; i++){
				var section = page.sections[i];
				var tag = section.content.match(regix);

				if(tag){
					section.content = section.content.replace(tag[1], replacer(tag[2]));
				}	
			}

			return page;
		}
	}
};
