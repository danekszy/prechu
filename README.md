prechu
======
A small weekend project aiming to bring sample design to life.

### Considerations
- It's not pixel perfect, as the design was not laid over grid, and spacing seemed random in various places
- Some elements were made from scratch as the design didn't provide necessary vector assets
- It doesn't feature proper font hierarchy - neither styleguide, nor specs were provided
- It uses font-sizes close to those from PSDs (decimal nrs were rounded)
- It doesn't leverage any module dependency system - as the scope of this project is too small
- Favicons, touchicons and tiles are out of scope for this little project

Some possible enhancements:
- Split style into separate files for different environments/breakpoints (mobile only, tablet, desktop)
- Use some progressive enhancement to broaden the browser support (now it only targets modern ones)
- Sprite or inline vector assets
- Separate components, modules, and templates in SASS for better architecture
- Configure slider to use better timings etc.
- Make hit areas for buttons/links bigger
- Get rid of the slider (unslider) - it's lightweight but it is the only module depending on massive jQuery

## Install

Grab code and run `$ npm install --global gulp && npm install` in that directory to get started.

-
## Usage

### Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

### Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.

## Contribute

Report issues in this Github repo.

-
