export const customFunction = {
    countDaysBetweenNow: (day1) => {
        let daysBetween = (Date.now() - Date.parse(day1)) / (24 * 3600 * 1000);
        if (daysBetween >= 1) {
            return `${Math.floor(daysBetween)} ngày trước`
        }
        else if (daysBetween < 1) {
            let seconds = customFunction.millisToSeconds(daysBetween * 24 * 3600 * 1000);
            if (seconds < 60) {
                return `${seconds} giây trước`;
            }
            else {
                let minutes = customFunction.secondsToMinutes(seconds);
                if (minutes < 60) {
                    return `${minutes} phút trước`;
                }
                else {
                    return `${customFunction.minutesToHours(minutes)} giờ trước`
                }
            }
        }
    },

    millisToSeconds: (time) => {
        return Math.floor(time / 1000);
    },
    secondsToMinutes: (time) => {
        return Math.floor(time / 60);
    },

    minutesToHours: (time) => {
        return Math.floor(time / 60)
    }
}