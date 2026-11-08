# Jacob Su — personal portfolio

Professional two-page portfolio hosted at **https://pekingperson.github.io/**.

- `index.html`: introduction, UMI research contributions, LeRobot SO-101 / DoFBot / Jetson Nano hardware projects, six public software projects, background, and contact.
- `resume.html`: experience, education, skills, projects, and honors.
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

Edit either HTML page directly. Update experience, education, and skills in `resume.html`, and project descriptions and links in `index.html`. The extension project summary reflects the current public repository's 2,000-load capacity. The website presents the resume as an HTML page and does not host a downloadable resume.

Software project descriptions were checked against the public repositories on November 7, 2026. Research and hardware-project descriptions are based on Jacob's existing resumes and research materials; the three hardware entries were added November 8, 2026. The UMI card describes Jacob's contributions and explicitly links to the original research at https://umi-gripper.github.io/.

### Project images

Illustrated thumbnails were removed November 8, 2026. UMI retains a labeled placeholder pending a photo of Jacob's work.

- UR5e and geography previews are screenshots of the live projects.
- Recommendation Memory is an actual screenshot of the compiled extension interface from repository commit `f78f54d`, captured in a local preview with an empty archive. A temporary in-memory extension API adapter allows the unchanged interface to run outside Chrome's extension context. No personal browsing history is shown.
- Kinematics Hub is an actual screenshot of the Next.js homepage from repository commit `13f7874`. A duplicated homepage function was removed in the temporary preview copy so the existing page could render. The preview changes were not published to either application repository.
- LeRobot SO-101: [Seeed Studio product image](https://www.seeedstudio.com/SO-ARM101-Pro-Unassembled-Bundle.html), saved as `assets/so101-reference.jpg`.
- DoFBot: [Yahboom product image](https://www.yahboom.store/products/dofbot-jetson_nano), saved as `assets/dofbot-reference.jpg`.
- Jetson Nano: [NVIDIA product image](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/product-development/), saved as `assets/jetson-nano-reference.jpg`.

Hardware images have visible source credits and illustrate the products; they are not photos of Jacob's own builds. All images are served locally from `assets/`.

## Deploy

GitHub Pages serves the root of the `main` branch. Push to `main` to publish updates. The `.nojekyll` file makes this a plain static site.
