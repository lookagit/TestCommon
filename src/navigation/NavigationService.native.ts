import {
  NavigationActions,
  StackActions,
  NavigationContainerComponent,
  NavigationParams,
  NavigationAction,
  NavigationStackAction
} from "react-navigation";

/**Initialization need to do in main(App) component with reference on 
 * Navigation Container(Wrapper/MainNavigation)
 * NavigationService.setNavigator(ref) on loaded component
 * This is explanation for React-Native projects
 */

interface NavigationType {
  navigator: NavigationContainerComponent
}

let config: NavigationType = null;

export function setNavigator(nav: NavigationContainerComponent): void {
  if (nav) {
    config.navigator = nav;
  }
}

export function push(routeName: string, params?: NavigationParams): void {
  if (config.navigator && routeName) {
    const action: NavigationAction = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
}

export function goBack(): void {
  if (config.navigator) {
    let action: NavigationAction = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}

export function replace(routeName: string, params?: NavigationParams): void {
  if (config.navigator) {
    let action: NavigationStackAction = StackActions.replace({routeName, params});
    config.navigator.dispatch(action);
  }
}

export function navigateAndResetStack(routeName: string, params: NavigationParams): void {
  if (config.navigator && routeName) {
    let action: NavigationAction = NavigationActions.navigate({ routeName, params });

    config.navigator.dispatch(
      StackActions.reset({
        index: 0,
        actions: [action]
      })
    );
  }
}
