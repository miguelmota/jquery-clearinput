# jQuery ClearInput v0.0.1

A simple jQuery plugin to clear input fields

## Demo

[http://lab.miguelmota.com/jquery-clearinput](http://lab.miguelmota.com/jquery-clearinput)

## Install 

Available via [bower](http://bower.io/)

```bash
bower install jquery-clearinput
```

## Usage

HTML

```html
<input type="text" data-clearable> 
```

```html
<script src="jquery.js"></script>
<script src="jquery.clearinput.js"></script>
```

JavaScript

```javascript
$('[data-clearable]').clearinput({
  callback: function() {
    console.log('cleared');
  }
});
```

```javascript
Options:

callback      : {function} - executes after each clear
iconClass     : {string} - class for clear icon link  default: 'clearinput'
focusOnClear  : {bool} - focus input after each clear. default: true
```

# License

Released under the MIT License.