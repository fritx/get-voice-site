# get-voice-site

Get human voice with http request

Based on [fritx/get-voice](https://github.com/fritx/get-voice)

## API

```html
<audio type="audio/mp3" src="{get-voice-site}/?q=BlaBlaBla"></audio>
```

Or:

```js
function say(text){
  var query = encodeURIComponent(text)
  $('<audio type="audio/mp3" autoplay>')
    .attr('src', '{get-voice-site}/?q=' + query)
    .on('ended', function(){
      $(this).remove()
    })
    .appendTo(document.body)
}
```
