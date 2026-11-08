# Jacob Su — personal portfolio

Professional two-page portfolio hosted at **https://pekingperson.github.io/**.

- `index.html`: introduction, UMI research contributions, six public software projects, background, and contact.
- `resume.html`: experience, education, skills, projects, and resume download.
- `assets/Jacob-Su-Resume.pdf`: downloadable software engineering resume.
- `assets/styles.css`: responsive styling and print layout.
- `assets/site.js`: email-copy interaction and footer year.

## Run locally

From this directory, run:

```sh
python -m http.server 4175 --bind 127.0.0.1
```

Then open http://127.0.0.1:4175/.

No dependency installation or build step is required. All content and links work without JavaScript; JavaScript only enhances the email copy button and footer date. No analytics or tracking scripts are included.

## Update content

Edit either HTML page directly. Replace `assets/Jacob-Su-Resume.pdf` to update the download, and update the text on `resume.html` to match. Edit project descriptions and links in `index.html`. The extension project summary reflects the current public repository's 2,000-load capacity; the source resume PDF retains the original resume wording.

Project descriptions were checked against the public repositories on November 7, 2026. Research and experience are based on Jacob's existing resume. The UMI card describes Jacob's contributions and explicitly links to the original research at https://umi-gripper.github.io/. The UMI, robot, extension, and platform visuals are illustrative; the geography image is a screenshot of the live project.

## Deploy

GitHub Pages serves the root of the `main` branch. Push to `main` to publish updates. The `.nojekyll` file makes this a plain static site.
