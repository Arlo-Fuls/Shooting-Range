# To Do

<!-- STYLING -->
- Add speech bubble at contact section (CSS)
- check if a green left border next to the trainer text can look cool
- Check if greener tint to the dark grey looks better
- Check animation on accordion pannels

<!-- INFORMATION -->
- Check that all information in the main page is complete
- check FAQ info
- Check of ander photo moet gebruik by road enterance vir range guide pt1

<!-- ADD OR FIX CONTENT -->
- Add second image on pricing section, one at bottom left, other top right - photo van rooi trailer (tweak overall positioning)
- Fix FAQ Assegai stretching
- Fix FAQ :after breakpoints

<!-- ACCESSIBILITY -->
- Check all alt text for images
- Check section linking met aria
- Check if should aria-hide content when inert as well

<!-- OPTIMIZATION -->
- optimize images
  - crop image on home page (bullets) to be more square
- update SVGs
- Check Deprecation Warning in vs code console
- Fix errors in web console (Each child in a list should have a unique "key" prop.)
- Clean up css and main code, delete all commented sections if happy, check to make reusable classes.
- Look at which fonts and images should be preloaded in head
- Look at fallback fonts for flashing

<!-- FINISHING TOUCHES -->
- Add jump to top button
- Check to add load in animation
- Check to remove hero section
- Double check if design still matches the theme



# ANKIA PLAN OF ACTION

STEP 1 - RANGE GUIDE:
- Sort images, starting at the range guide, optimizing and color grading as needed
- Make sure happy with style of Range Guide
- Check all alt text for images
- Check section linking met aria
- Check if range guide should use aria-atomic for changing sections

STEP 2 - FOOTER AND NAV BAR:
- Fix footer fonts and style
- Update SVG for Nav and Footer
- Update NavBar style, including breakpoints
- Add dropshadow to NavBar
- Check why sticky nav not working on other pages, most likely because of position relative missing
- Fix collapsed nav bar. If visible after scrolling up, rest of page is inert


STEP 3 - TRAINERS:
- Update style trainers section with new logo
- Finish Trainer Section on home page (logos too small near 500px and below plus horizontal overflow @ around 505px)
- Optimize images
- Check accessibility


# Useful resources

- [Hero section semantics](https://medium.com/@matt.dawkins/hero-sections-accessible-semantic-and-performant-c04502e16f40) - The comment at the end has a bunch of good corrections and explanations to look at.
- [Optimizing page speed](https://codestitch.app/page-speed-handbook) - The goat, refer back for specific CSS.
- [React hide nav on scroll](https://dev.to/biomathcode/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98) - This was very helpful, though the comments had a lot of good fixes, used their advice.
- [Style link for active page](https://stackoverflow.com/questions/8998574/css-style-for-links-pointing-to-the-current-page) - This works for different page navigation, but not for in page hrefs
- [Favicon](https://favicon.io/tutorials/favicon-sizes/) - Explanation on favicon sizes and converter to use
- [Fix clip path line](https://stackoverflow.com/questions/51542919/clip-path-on-chrome-leaves-a-strange-line-on-the-edge) - This discussion showed how to use will-change: transform; to fix the weird line bug.
- [Special ul styling](https://stackoverflow.com/questions/61365526/how-to-customize-unordered-list-bullet-using-inline-css-only-for-emails) - Showed how to use unicode as bullets
- [ul wrapping with special bullet](https://stackoverflow.com/questions/24685355/aligning-li-text-that-wraps-when-using-custom-bullet-point) - Showed to use position absolute and relative to position to avoid strange wrapping

# Log of specific changes made

- Replaced all navbar.scss "max-width: 37.5rem" parts with "max-width: $bp-medium"
- Remove clamp className from pricing's pricing\_\_bottom and changed the display to grid
- Changed the assegai svg to not maintain aspect ratio. Added 'preserveAspectRatio="none"' to the svg file and explicit heights and widths in home.scss
