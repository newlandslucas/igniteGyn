import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from 'native-base';

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const natibeBaseTheme = useTheme();
    const theme = DefaultTheme;
    theme.colors.background = natibeBaseTheme.colors.gray[700]
    return (
        <Box flex={1} bg="gray.700">
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </Box>

    )
}