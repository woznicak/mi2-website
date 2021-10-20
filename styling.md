There are a few layouts available. Applying any of these to a newly created page will require adding a small 
JavaScript snippet immediately below the page title, see examples below. 

Available layouts:

- default - follows the home page layout. Suitable for long blocks of text; enlarges the first paragraph a little. 
  Reusing this layout does not require adding any JavaScript snippets to markdown. 

- two-columns-layout - used to display a list with images and descriptions, as in papers or books pages.
Snippet to add to a new page:
```js
## PAGE TITLE GOES HERE {-}

<script>
  document.body.classList.add("two-columns")
  document.querySelector(".page-inner section > *:first-child").classList.add("two-columns-layout")
</script>

(... rest of page content)
```

- team-page - the trickiest one, changing first or second person's name will require reflecting the change in team.css
  file. For example if Przemysław Biecek was to be replaced by Florence Nightingale, and `### Przemysław Biecek {-}
  ` was replaced by `### Florence Nightingale {-}`, then all the ocurrences of `przemysław-biecek` in `team.css`
  need to be replaced with `florence-nightingale`. Same for the second person. 
