/*
  Add or edit projects in this array.

  Each project supports:
  - title: Card heading
  - year: Short timestamp shown on the card
  - summary: Short descriptive paragraph
  - tags: Small labels for tech, domain, or skills
  - ctaType: "github", "popup", or "none"
  - link: Destination for GitHub-style links
  - linkLabel: Text for link-based actions
  - popup: Reusable popup content object for modal-based projects
    - image: Single popup image
    - images: Optional array of popup images for tiled galleries
  - featured: true shows the project on the landing page

  To add a new project:
  1. Duplicate one of the objects below.
  2. Update the values.
  3. Choose whether the card should open GitHub, a popup, or no CTA at all.
  3. Set featured: true if it should appear on the home page.
*/
const PROJECTS = [
  {
    title: "Patient Information Management System",
    year: "2026",
    summary:
      "A RESTful patient information platform built with Flask and PostgreSQL, using nginx, Docker, and encrypted handling patterns to support HIPAA-aligned security requirements.",
    tags: ["Python", "Nginx", "PostgreSQL"],
    ctaType: "github",
    link: "https://github.com/sidhowardiv/PatientInfoManagerCS499",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    title: "Chick-fil-A Inventory Tracker",
    year: "2023",
    summary:
      "A real-time SwiftUI inventory app backed by Firebase that synced across iPhone and iPad devices, scaled to 90+ test users, and supported production use in two restaurants.",
    tags: ["SwiftUI", "Firebase", "iOS"],
    ctaType: "github",
    link: "https://github.com/BoydEmmons04/CFA-Waste",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    title: "Census Income Classification",
    year: "2025",
    summary:
      "A machine learning project on the UCI Adult dataset featuring full preprocessing, feature engineering, and model comparison between an ANN and an RBF-kernel SVM baseline.",
    tags: ["Python", "scikit-learn", "PyTorch"],
    ctaType: "github",
    link: "https://github.com/BoydEmmons04/MLFinalProject",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    title: "Linux Distro Customization",
    year: "2026",
    summary:
      "A Linux environment customization project focused on Hyprland-based workflow design, desktop theming, configuration management, and hands-on use of Kali Linux for security-oriented tooling and system setup.",
    tags: ["Hyprland", "Kali Linux", "Linux"],
    ctaType: "popup",
    popup: {
      images: [
        {
          src: "assets/img/Custom_Linux.PNG",
          alt: "Placeholder preview for the Linux distro customization project",
        },
      ],
    },
    linkLabel: "View Project Preview",
    featured: false,
  },
  {
    title: "Jellyfin Home Media Server",
    year: "2026",
    summary:
      "A self-hosted home media server deployment centered on Jellyfin, focused on reliable streaming, library organization, and hands-on experience with Linux-based service configuration.",
    tags: ["Jellyfin", "Linux", "Self-Hosted"],
    ctaType: "popup",
    popup: {
      images: [
        {
          src: "assets/img/Jellyfin.PNG",
          alt: "Project image for the Jellyfin home media server",
        },
      ],
    },
    linkLabel: "View Project Preview",
    featured: false,
  },
  {
    title: "Python Inventory Forecasting and Reporting",
    year: "2022",
    summary:
      "An internal operations toolkit built around Python and pandas to automate inventory reporting and support monthly supply forecasting with stronger consistency and reduced manual effort.",
    tags: ["Python", "pandas", "Excel"],
    ctaType: "none",
    featured: false,
  },
  {
    title: "MATLAB Ordered Dithering",
    year: "2025",
    summary:
      "A MATLAB image-processing project that applied ordered dithering across 50 animation frames, converted the results into indexed images, and compiled the processed sequence into an animated GIF.",
    tags: ["MATLAB", "Image Processing", "GIF"],
    ctaType: "github",
    link: "https://github.com/BoydEmmons04/MultimediaProjects",
    linkLabel: "View on GitHub",
    featured: false,
  },
  {
    title: "Terraria Content Mod",
    year: "2024",
    summary:
      "A Terraria mod built with the standard tModLoader stack that added custom items, crafting recipes, and animated content while extending the base game with original modded features.",
    tags: ["C#", "tModLoader", "Game Modding"],
    ctaType: "github",
    link: "https://github.com/BoydEmmons04/TerrariaExpansion",
    linkLabel: "View on GitHub",
    featured: false,
  },
  {
    title: "Linux Downloads Auto Sorter",
    year: "2024",
    summary:
      "A Python automation script for Linux that scans the Downloads folder, classifies files by extension, and safely moves them into destination folders like Documents, Music, Pictures, Videos, and Code without overwriting existing files.",
    tags: ["Python", "Linux", "Automation"],
    ctaType: "github",
    link: "https://github.com/BoydEmmons04/Python-Download-Folder-Sort",
    linkLabel: "View on GitHub",
    featured: false,
  },
  {
    title: "Iris Correlation Analysis",
    year: "2026",
    summary:
      "A Python data analysis project that fetched the UCI Iris dataset, isolated numeric features, computed a Pearson correlation matrix, and visualized feature relationships with a seaborn heatmap.",
    tags: ["Python", "pandas", "seaborn"],
    ctaType: "github",
    link: "https://github.com/BoydEmmons04/BigDataIris",
    linkLabel: "View on GitHub",
    featured: false,
  },
];
