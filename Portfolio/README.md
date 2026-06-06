# Portfolio Editing Guide

This file explains where to change text in `index.html`.

## Name

Open `index.html` and find this comment:

```html
<!-- EDIT NAME HERE -->
```

Change the text inside:

```html
<h1 id="intro-title">Yino Liu</h1>
```

## Links

Find this comment:

```html
<!-- EDIT LINKS HERE: replace href values with your real CV, LinkedIn, GitHub, and email. -->
```

Change the `href="..."` parts. For example:

```html
<a href="https://github.com/your-name">GitHub</a>
```

## Projects

Find this comment:

```html
<!-- EDIT PROJECTS HERE: change the href, data-category, title, and subtitle for each project. -->
```

Each project starts with a line like this:

```html
<article class="work-item section-reveal" data-category="design">
```

Change `data-category` to one of these filter names:

```text
design
research
art
```

To change project text, edit the title inside `<h2>` and the description inside `<p class="subtitle">`.

To change which page a thumbnail opens, edit the `href` on the `<a class="thumbnail-link">` line.

## About Text

Find this comment near the bottom of `index.html`:

```html
<!-- EDIT ABOUT TEXT HERE: replace this placeholder with your real biography. -->
```

Replace the paragraph inside:

```html
<div class="about-box">
  <p>Your biography goes here.</p>
</div>
```

This is where you can write about your past work experience, architecture education, software skills, and current direction toward computational or interactive design.

## Filter Bar Text

The filter buttons are near the top of the project section:

```html
<button class="filter-button is-active" type="button" data-filter="all">All</button>
<button class="filter-button" type="button" data-filter="design">Design</button>
<button class="filter-button" type="button" data-filter="research">Research</button>
<button class="filter-button" type="button" data-filter="art">Art</button>
```

The visible words are `All`, `Design`, `Research`, and `Art`. The `data-filter` values must match the project `data-category` values.
