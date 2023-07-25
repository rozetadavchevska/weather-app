export interface Weather{
    weather: WeatherInfo[],
    main: {
        temp: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    sys: {
        country: string,
        sunrise: number,
        sunset: number
    },
    name: string,
    id: number
} 

export interface WeatherInfo{
    main: string,
    description: string,
    icon: string
}

export interface Forecast{
    list: ForecastInfo[]
}

export interface ForecastInfo{
    weather: WeatherInfo[],
    dt: Date,
    main:{
        temp: number,
        temp_max: number
    },
    dt_txt: string
}
