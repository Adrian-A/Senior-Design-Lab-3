# Lab Requirements

- [Link to slides](https://github.com/Adrian-A/Senior-Design-Lab-3/blob/main/documents/Lab%2003%20-%20UI%20design.pdf)
- [Link to pdf](https://github.com/Adrian-A/Senior-Design-Lab-3/blob/main/documents/Lab3_2025Fall.pdf)

## Hosting
- The website should be hosted publicly.
  - You will lose points if hosted only locally.

## Homepage & Team Pages
- A homepage for the team with links to individual pages for each team member.
- Each team member’s page should contain some embedded graphics (e.g., photos, AI-generated images).
- Do not include unauthorized copyrighted content.

## Password Protected Content
- Default Password: `Fall2025Lab3`
- The main homepage should list a link to protected content.
  - When clicked, it should present a dialog asking for a password.
  - Upon verification, the page should navigate to a list of available protected content.
- Navigation of protected content should be possible **without repeated password prompts**.

## Security
- Take reasonable measures to secure protected content against unauthorized access.
  - It should **not** be possible to access protected content by simply viewing the HTML code.
  - Do **not** list the plain-text password or URLs of unencrypted protected pages in your HTML.
- There must be **no mechanism to change the password from the website itself**.
  - However, an **offline mechanism** should exist to change the password.
    - A shell script or Python program that creates a new set of protected content files for upload is acceptable.

## Contact Form
- Each team member’s portfolio page should include a contact form.
  - The form should allow users to send a text message.
  - Messages, along with a timestamp, should be saved as web pages.
  - These saved messages should be viewable as part of the protected content.

## Visual Design
- Use a **Black & Gold** color scheme.
  - Follow the University of Iowa’s branding standards: [https://brand.uiowa.edu/fonts](https://brand.uiowa.edu/fonts)
  - Do **not** present the site as an official university website.
    - Do **not** include university logos or trademarks.
    - You may link to official university sites.
