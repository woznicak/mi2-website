There are a few layouts available. Applying any of these to a newly created page will require adding a small 
JavaScript snippet immediately below the page title, see examples below. Whenever possible, when creating a new 
page, copy a chunk of an 
existing page to make sure it works properly and update it with desired content. 

Available layouts:

- default - follows the home page layout. Suitable for long blocks of text; enlarges the first paragraph a little. 
  Reusing this layout does not require adding any snippets to markdown.
- research-grants-layout - TODO
- trainigs-layout - TODO
- teaching-layout - TODO

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

- team-page - this one is complicated, and it is not recommended to create a new page based on it. 

  **Important notes:** 
  - Section 
    title changes might require coresponding updates in `team-page.css`. For example if `Alumni` section was renamed 
    to `Employees`, then all ocurrences 
    of `#alumni` in `team.css`
    need to be replaced with `#employees`. Same for the other sections.
  - Changing first or second 
    person's name 
    will require 
    reflecting the 
    change in team.css
    file. For example if Przemysław Biecek was to be replaced by Florence Nightingale, and `### Przemysław Biecek {-}
    ` was replaced by `### Florence Nightingale {-}`, then all the ocurrences of `przemysław-biecek` in `team.css`
    need to be replaced with `florence-nightingale`. Same for the second person. 
