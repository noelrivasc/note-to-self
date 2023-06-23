/**
  * @file
  * This file contains app-wide style variables
  * and theming utilities
  */

const colors = {
    rich_black: "#001219", // Bluish black
    midnight_green: "#005f73", // Blue, IMO
    dark_cyan: "#0a9396", // Dark acqua
    tiffany_blue: "#94d2bd", // Acqua
    vanilla: "#e9d8a6", // Vanilla ice cream
    gamboge: "#ee9b00", // Yellow
    alloy_orange: "#ca6702", // Orange
    rust: "#bb3e03", // Well, rust
    rufous: "#ae2012", // Bright red
    auburn: "#9b2226" // Deep red
};

const theme = {
  navBarHeight: 80,
  palette: {
    base_0: colors.rich_black,
    base_1: colors.midnight_green,
    base_2: colors.dark_cyan,
    base_3: colors.tiffany_blue,
    neutral: colors.vanilla,
    accent_0: colors.auburn,
    accent_1: colors.rufous,
    accent_2: colors.rust,
    accent_3: colors.alloy_orange,
    accent_4: colors.gamboge,
  }
}

export default theme;
