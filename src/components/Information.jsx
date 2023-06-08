
import { Box, Typography, styled } from "@mui/material";
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material';

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20
})

const Information = ({ result }) => {

    return (
        result && Object.keys(result).length > 0 ?
        <Box style={{ margin: '30px 60px' }}>
            <Row><LocationOn />Location: {result.city.name}, {result.city.country}</Row>
            <Row><SettingsBrightness />Temperature: {result.list[0].main.temp}</Row>
            <Row><Opacity />Humidity: {result.list[0].main.humidity}</Row>
            <Row><Brightness5 />Sun Rise: {new Date(result.city.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun Set: {new Date(result.city.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.list[0].weather[0].main}</Row>
            <Row><Cloud />Clouds: {result.list[0].clouds.all}%</Row>
        </Box>
        : <Error>Please enter the values to check weather</Error>
    )
}

export default Information;