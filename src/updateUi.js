export function selectIconAndBackground(mainDescription, timeCode) {
    switch (mainDescription) {
        case "Clear":
            return timeCode === "d" ? { icon: "clear-day.svg", background: "clear-day-background.png" } : { icon: "clear-night.svg", background: "clear-night-background.png" };
        case "Clouds":
            return timeCode === "d" ? { icon: "clouds-day.svg", background: "clouds-day-background.png" } : { icon: "clouds-night.svg", background: "clouds-night-background.png" };
        case "Rain":
            return timeCode === "d" ? { icon: "rain-day.svg", background: "rain-day-background.png" } : { icon: "rain-night.svg", background: "rain-night-background.png" };
        case "Drizzle":
            return timeCode === "d" ? { icon: "drizzle-day.svg", background: "drizzle-day-background.png" } : { icon: "drizzle-night.svg", background: "drizzle-night-background.png" };
        case "Thunderstorm":
            return timeCode === "d" ? { icon: "thunderstorm-day.svg", background: "thunderstorm-day-background.png" } : { icon: "thunderstorm-night.svg", background: "thunderstorm-night-background.png" };
        case "Snow":
            return timeCode === "d" ? { icon: "snow-day.svg", background: "snow-day-background.png" } : { icon: "snow-night.svg", background: "snow-night-background.png" };
        default:
            return timeCode === "d" ? { icon: "default-day.svg", background: "default-day-background.png" } : { icon: "default-night.svg", background: "default-night-background.png" };
    }
}

export async function loadIconAndBackground(iconName, backgroundName) {
    const iconModule = await import(`./images/${iconName}.svg`);
    const backgroundModule = await import(`./images/${backgroundName}.jpg`);
    return { icon: iconModule.default, background: backgroundModule.default };
}

// const {icon, background} = await loadIcon("my-icon", "my-background");