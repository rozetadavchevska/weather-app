export interface Weather{
    weather: WeatherInfo[],
    main: {
        temp: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    rain: {
        '1h': number
    },
    sys: {
        country: string
    },
    name: string,
    id: number
} 

export interface WeatherInfo{
    main: string,
    description: string,
    icon: string
}