import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Preferences {
    style: Style;
    intensityLevel: IntensityLevel;
}
export enum IntensityLevel {
    low = "low",
    normal = "normal",
    high = "high",
    extreme = "extreme"
}
export enum Style {
    fluent = "fluent",
    simple = "simple",
    eloquent = "eloquent"
}
export interface backendInterface {
    getPreferences(): Promise<Preferences>;
    updatePreferences(style: Style, intensityLevel: IntensityLevel): Promise<void>;
}
