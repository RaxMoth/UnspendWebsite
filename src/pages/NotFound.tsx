import React from "react";
import { Button, Container, IconBadge } from "../components/UI";
import { usePageTitle } from "../hooks";

const NotFound: React.FC = () => {
    usePageTitle("Page not found");
    return (
        <Container className="flex flex-col items-center py-28 text-center">
            <IconBadge icon="block" size="hero" muted />
            <h1 className="mt-8 text-page">Page not found</h1>
            <p className="mt-4 text-lede text-muted">
                Nothing lives at this address.
            </p>
            <Button to="/" className="mt-8">
                Back to start
            </Button>
        </Container>
    );
};

export default NotFound;
