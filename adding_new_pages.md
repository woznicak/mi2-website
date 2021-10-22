#Adding new pages

There are a few layouts available. Applying any non-default layout to a new page will require adding a small JavaScript snippet see examples below. Whenever possible, when creating a new page, copy a chunk of an existing page to make sure it works properly and update it with desired content. 

**Available layouts:**

* [Default](#default)
* [Two Columns](#two-columns)
* [Research Grants](#research-grants)
* [Teaching](#teaching)
* [Seaminars](#seminars)
* [Team](#Team)

___

#### Default

Follows the home page layout. Suitable for long blocks of text. Reusing this layout does not require adding any snippets to markdown.

#### Two Columns

Use to display a list with images and descriptions, as in papers or books pages.

Snippet to add to a new page:
```mdxjs
## __PAGE_TITLE__ {-}

<script>
  document.body.classList.add("two-columns")
  document.querySelector(".page-inner section > *:first-child").classList.add("two-columns-layout")
</script>

(... rest of page content)
```
Each section should match the following pattern:

```html
<div>
  <img src="__IMAGE_URL__">
  <p>
    __OPTIONAL_TEXT_BEFORE_URL__
    <a href="__TARGET_URL__">__URL_TEXT__</a>
  </p>
  <p>__DESCRIPTION__</p>
  <p><i>__SMALLER_TEXT__</i></p>
</div>
```
#### Research Grants

Snippet to add to a new page:

```mdxjs
## __PAGE_TITLE__ {-}

<script>
    document.body.classList.add("research-grants-page")
    document.querySelector(".page-inner section > *:first-child").classList.add("research-grants-layout")
</script>
```
Each section should match the following pattern:

```mdx
### __TITLE__ {-}
#### __SUBTITLE__ {-}

![](__IMAGE_URL__)

__CONTENT__
```

#### Teaching
Snippet to add to a new page:
```mdxjs
## __PAGE_TITLE__ {-}

<script>
      document.body.classList.add("teaching-page")
      document.querySelector(".page-inner section > *:first-child").classList.add("teaching-layout")
</script>
```
#### Seminars

This simple layout does not require adding any snippets, but needs to follow the below pattern for the topmost 
content with the image (note the **lack of indentation**):

```mdxjs
<div class="two-column-entry">
<div class="two-column-entry-image">
<img src="__IMAGE_URL__">
</div>
<div class="two-column-entry-text">
__TEXT_CONTENT_NEXT_TO_IMAGE__
</div>
</div>

__OTPIONAL_FOLLOWING_MARKDOWN_CONTENT__

```
#### Team
This one is complicated, and it is not recommended to create a new page based on it. 

**&nbsp;&nbsp;&nbsp;Notes:** 
   - Section title changes might require coresponding updates in `team-page.css`. For example if `Alumni` section was renamed to `Employees`, then all ocurrences of `#alumni` in `team.css`need to be replaced with `#employees`. Same for the other sections.
   - Changing first or second person's name will require reflecting the change in team.css file. For example if Przemysław Biecek was to be replaced by Florence Nightingale, and `### Przemysław Biecek {-}
      ` was replaced by `### Florence Nightingale {-}`, then all the ocurrences of `przemysław-biecek` in `team.css`
      need to be replaced with `florence-nightingale`. Same for the second person. 

