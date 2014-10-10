# Gitbook Plugin: Add Filename to Codeblock

This is a gitbook plugin.

Add filename to	codeblock.

## Usage

You can install this plugin via NPM and save it to `package.json`.

```
$ npm install gitbook-plugin-codeblock-filename --save
```

Add the plugin to your `book.json`:

```
{
	plugins: [ "codeblock-filename" ] 
}
```

Then, you need only to insert before codeblock the code below.

<pre><code>
!FILENAME filename
```
codeblock
```
</code></pre>

You can see the filename on top of the codeblock.

## Example

write the code ↓

<pre><code>
!FILENAME test.js
```
var a = 10;
a = a + 1;

console.log(a);
```
</code></pre>

the result ↓

![screenshot](screenshot.png)
