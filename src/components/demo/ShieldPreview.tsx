import React from "react";
import { Icon } from "../UI";
import PhoneFrame, { StatusBar } from "./PhoneFrame";

/**
 * The screen iOS shows instead of a blocked app, with the app's wording
 * (shieldTitleTemplate, shieldSubtitleTemplate, shieldButton). It is dark
 * in every theme, as on the phone.
 */
const ShieldPreview: React.FC<{ className?: string }> = ({ className }) => (
    <PhoneFrame
        label="The block screen: Instagram is blocked by the profile Social media"
        height={540}
        className={className}
    >
        <div className="relative flex h-full flex-col bg-[#0b0b0c] text-white">
            <div
                aria-hidden
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(55% 35% at 25% 22%, rgba(142,36,170,0.5), transparent), radial-gradient(50% 35% at 80% 72%, rgba(255,152,0,0.4), transparent)",
                    filter: "blur(28px)",
                }}
            />
            <div aria-hidden className="absolute inset-0 bg-black/75" />

            <StatusBar className="relative" />
            <div className="relative flex flex-1 flex-col items-center justify-center px-7 pb-10 text-center">
                <Icon name="shield" size={56} className="text-white/85" />
                <p className="mt-6 text-title">Instagram is blocked</p>
                <p className="mt-2 text-body text-[#c7c7cc]">
                    Blocked by “Social media” in Unspend
                </p>
                <span className="mt-9 block w-full rounded-control bg-[#E32723] py-3.5 text-subheading">
                    Go Back
                </span>
            </div>
        </div>
    </PhoneFrame>
);

export default ShieldPreview;
