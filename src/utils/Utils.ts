export const getCurrentTimeInAMPM = (): string => {
    const now: Date = new Date();
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';

    const formattedHours: number = hours % 12 || 12;

    const formattedMinutes: string = minutes < 10 ? `0${minutes}` : minutes.toString();

    const timeInAMPM: string = `${formattedHours}:${formattedMinutes} ${ampm}`;

    return timeInAMPM;
}