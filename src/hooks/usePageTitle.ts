import { useEffect } from "react";
import { SITE } from "../config/site";

/** Sets the browser tab's title for the page that is showing. */
export const usePageTitle = (title?: string) => {
    useEffect(() => {
        document.title = title
            ? `${title} — ${SITE.name}`
            : `${SITE.name} — ${SITE.tagline}`;
    }, [title]);
};
