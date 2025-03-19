import { createTheme, ThemeProvider } from "@mui/material"
import { ReactNode, useMemo } from "react"
import { buttonCustomization } from "shared/buttonTheme"
import { labelCustomization } from "shared/labelTheme"
import { TextFielCustomization } from "shared/textFielTheme"



export const AppTheme = ({disableCustomTheme, children}: {disableCustomTheme?: boolean, children: ReactNode})=> {
    const theme = useMemo(()=> {
        return disableCustomTheme ? {} : 
        createTheme({
            colorSchemes: { light: true, dark: true },
            cssVariables: {
              colorSchemeSelector: 'class'
            },
            components: {
                ...buttonCustomization,
                ...TextFielCustomization,
                ...labelCustomization
            }
        })
    },[disableCustomTheme])
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}