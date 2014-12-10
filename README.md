# get-voice-site

Get human voice with http request

Based on [fritx/get-voice](https://github.com/fritx/get-voice)

Current demo: <http://voice.coding.io?q=check-it-out>

## API

`GET {site}/?q=we-will-rock`

Or: `GET {site}/?q=we will rock`

Or just safer: `GET {site}/?q=we%20will%20rock`

```html
<audio controls type="audio/mp3" src="{site}/?q=bazinga"></audio>
```

Or with more fun:

```js
function say(text){
  var query = encodeURIComponent(text)
  $('<audio autoplay type="audio/mp3">')
    .attr('src', '{site}/?q=' + query)
    .on('ended', function(){
      $(this).remove()
    })
    .appendTo(document.body)
}
```
