import { useRouteError } from 'react-router-dom';

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <div id="error-page">
            <h1>UH OH!</h1>
            <p>Very sorry, an unexpected error has occured</p>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    );
}