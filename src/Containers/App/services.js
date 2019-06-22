export const changeTheme = currentTheme => {
  switch (String(currentTheme).toLowerCase()) {
    case "light": {
      return "dark";
    }

    default: {
      return "light";
    }
  }
};
