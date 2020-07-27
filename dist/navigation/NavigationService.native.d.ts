import { NavigationContainerComponent, NavigationParams } from "react-navigation";
export declare function setNavigator(nav: NavigationContainerComponent): void;
export declare function push(routeName: string, params?: NavigationParams): void;
export declare function goBack(): void;
export declare function replace(routeName: string, params?: NavigationParams): void;
export declare function navigateAndResetStack(routeName: string, params: NavigationParams): void;
