const manifest = () => {
  return {
    name: "Gayatri Patil",
    short_name: "Gayatri Patil",
    description:
      "Frontend developer building complex and high-performance web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#111e41",
    theme_color: "#111e41",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
};

export default manifest;
