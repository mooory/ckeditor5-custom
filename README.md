CKEditor 5 classic editor build
========================================

[![Join the chat at https://gitter.im/ckeditor/ckeditor5](https://badges.gitter.im/ckeditor/ckeditor5.svg)](https://gitter.im/ckeditor/ckeditor5?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-classic.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)
[![Dependency Status](https://david-dm.org/ckeditor/ckeditor5-build-classic/status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-classic)
[![devDependency Status](https://david-dm.org/ckeditor/ckeditor5-build-classic/dev-status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-classic?type=dev)

The classic editor build for CKEditor 5. Read more about the [classic editor build](https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/builds/guides/overview.html#Classic-editor) and see the [demo](https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/examples/builds/classic-editor.html).

## Documentation

See:

* [Installation](https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
* [Basic API](https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
* [Creating custom builds](https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/builds/guides/development/custom-builds.html) for how to customize the build (configure and rebuild the editor bundle).

## Quick start

First, install the build from npm:

```
npm install --save ckeditor5-custom
```

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/ckeditor5-custom/build/ckeditor.js"></script>
<script>
	ClassicEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
</script>
```

Or in your JavaScript application:

```js
import ClassicEditor from 'ckeditor5-custom';

// Or using CommonJS verion:
// const ClassicEditor = require( 'ckeditor5-custom' );

ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
```

config like:

const ck_config = {
	toolbar: [ 'headings', 'bold', 'italic', 'underline', 'link', 'code', 'bulletedList', 'numberedList','blockQuote','insertImage', '|', 'alignLeft','alignCenter','alignRight', 'alignJustify','|','undo', 'redo'],
    heading: {
        options: [
            { modelElement: 'paragraph', title: '段落', class: 'ck-heading_paragraph' },
            { modelElement: 'heading1', viewElement: 'h2', title: '标题 1', class: 'ck-heading_heading1' },
            { modelElement: 'heading2', viewElement: 'h3', title: '标题 2', class: 'ck-heading_heading2' },
            { modelElement: 'heading3', viewElement: 'h4', title: '标题 3', class: 'ck-heading_heading3' }
        ]
    },
    image: {
        toolbar: [
            'imageTextAlternative',
            '|',
            'imageStyleFull',
            'imageStyleAlignLeft',
            'imageStyleAlignCenter',
            'imageStyleAlignRight'
        ],
        styles: [
            'imageStyleFull',
            'imageStyleAlignLeft',
            'imageStyleAlignCenter',
            'imageStyleAlignRight'
        ]
    },
    alignment: {
        styles:['left','center','right', 'justify']
    },
    ckfinder: {
        uploadUrl: 
    }
}

then you can use config to create you own application:
ClassicEditor
	.create( document.querySelector( '#editor' ) , ck_config )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the GPL, LGPL and MPL licenses, at your choice. For full details about the license, please check the `LICENSE.md` file.
