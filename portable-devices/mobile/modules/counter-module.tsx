import * as React from "react";
import { IMenuPosition } from "@common-stack/client-react";
import { Feature, IRouteData } from "@common-stack/client-react";
import { Icon, List } from '@ant-design/react-native';
import { Button, View, Text } from "react-native";

import { Link } from "react-router-dom";

export enum CONNECTED_REACT_ROUTER_ROUTES_TYPES {
    HOME = "/",
    HELLO = "/hello",
    COUNTER = "/counter",
}

export const getFilteredRoutes = (
    accountPageStore: [{ key: string; path: string; valid: boolean }],
    selectedRoutes: any
) =>
    accountPageStore
        .map((item) => {
            if (selectedRoutes.indexOf(item.key) !== -1) {
                const { path } = item;
                return {
                    [path]: item,
                };
            }
            return null;
        })
        .filter((valid) => valid);

const Counter = () => (
    <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
            <Text>Counter value</Text>
        </View>
    </View>
);

const Dashboard = () => (
    <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
        <Text>Dashboard value</Text>
        </View>
    </View>
);

const DashboardList = () => (
    <List>
        <Link
            to="/counter"
            component={List.Item}
            arrow="horizontal"
            // thumb={<Icon name="info-circle" />}
        >
            Counter
        </Link>
    </List>
)
const Hello = () => (
    <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
            <Text>Hello value</Text>
        </View>
    </View>
);

export const counterPageStore: any = [
    {
        exact: false,
        icon: "export",
        component: Dashboard,
        position: IMenuPosition.MIDDLE,
        name: "Connected React Router",
        key: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HOME,
        path: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HOME,
        title: "首页",
        headerTintColor: "#ffffff",
        headerTitleStyle: {
            fontWeight: "bold",
        },
        headerStyle: {
            backgroundColor: "#FFC100",
        },
    },
    {
        exact: true,
        icon: "export",
        name: "Hello",
        component: Hello,
        position: IMenuPosition.MIDDLE,
        key: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HELLO,
        path: CONNECTED_REACT_ROUTER_ROUTES_TYPES.HELLO,
    },
    {
        exact: true,
        icon: "export",
        name: "Counter",
        component: Counter,
        position: IMenuPosition.MIDDLE,
        key: CONNECTED_REACT_ROUTER_ROUTES_TYPES.COUNTER,
        path: CONNECTED_REACT_ROUTER_ROUTES_TYPES.COUNTER,
    },
];

const selectedRoutesAndMenus = [
    CONNECTED_REACT_ROUTER_ROUTES_TYPES.HOME,
    CONNECTED_REACT_ROUTER_ROUTES_TYPES.HELLO,
    CONNECTED_REACT_ROUTER_ROUTES_TYPES.COUNTER,
];

// get routes
const filteredRoutes = getFilteredRoutes(
    counterPageStore,
    selectedRoutesAndMenus
);

export default new Feature({
    routeConfig: filteredRoutes as any,
});
