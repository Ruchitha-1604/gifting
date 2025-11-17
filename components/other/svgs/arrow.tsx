interface SvgWrapper {
    className?: string;
    fillColor?: string;
    style?: {}
}

const ChevronBack: React.FC<SvgWrapper> = ({ className }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.66667"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
const Close: React.FC<SvgWrapper> = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4.99988L5 18.9999M5 4.99988L19 18.9999" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)
const Check: React.FC<SvgWrapper> = ({ className }) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L4.5 8.5L2 6" stroke="#53585B" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const DiagonalArrow: React.FC<SvgWrapper> = ({ className }) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5002 4.99976H19.5002V10.9998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5003 4.99976L5.50031 18.9998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const Minus: React.FC<SvgWrapper> = ({ className }) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1431 9L3.85742 9" stroke="#103565" strokeWidth="1.78571" strokeLinecap="round" />
    </svg>
)
const Plus: React.FC<SvgWrapper> = ({ className }) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M9.00028 3.85718L9.00028 14.1429M14.1431 9.00003L3.85742 9.00004" stroke="#103565" strokeWidth="1.42857" strokeLinecap="round" />
    </svg>
)

const HowItWorksArrow: React.FC<SvgWrapper> = ({ className }) => (
    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <g clipPath="url(#clip0_6346_5533)">
            <path d="M47.7215 23.6459L37.055 13.9235C36.7587 13.6828 36.4347 13.6365 36.0828 13.7847C35.7313 13.9331 35.5548 14.2014 35.5548 14.5905V20.8127H0.888379C0.628996 20.8127 0.415925 20.8959 0.249457 21.0626C0.0830863 21.2291 -0.000488281 21.4422 -0.000488281 21.7014V27.0346C-0.000488281 27.2937 0.0826971 27.5068 0.24936 27.6731C0.416217 27.8397 0.629288 27.9229 0.888282 27.9229H35.555V34.1451C35.555 34.5159 35.7318 34.7843 36.0831 34.9504C36.4353 35.0992 36.7593 35.043 37.0556 34.7843L47.722 24.9502C47.9072 24.7652 47.9995 24.5433 47.9995 24.2838C47.9995 24.0437 47.9066 23.831 47.7215 23.6459Z" fill="#103565" />
        </g>
        <defs>
            <clipPath id="clip0_6346_5533">
                <rect width="48" height="48" fill="white" transform="translate(0 0.5)" />
            </clipPath>
        </defs>
    </svg>
)

const Play = ({ className }: SvgWrapper) => (
    <svg
        className={className}
        width="320"
        height="384"
        viewBox="0 0 320 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 384L320 192L0 0V384Z" fill="currentColor" />
    </svg>
);

const SwipeArrow = ({ className }: SvgWrapper) => (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 6.6665L18.8333 9.99984L15.5 13.3332" stroke="#8794A5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.16699 10H18.8337" stroke="#8794A5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const DesignedArrow = ({ className }: SvgWrapper) => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <g clipPath="url(#clip0_6233_4686)">
            <path d="M0.328006 23.4047C0.130795 24.3109 0.826577 24.6946 1.47218 24.4051L23.292 13.2167H23.2941C23.5544 13.0699 23.7055 12.8054 23.7055 12.5003C23.7055 12.1949 23.5544 11.9302 23.2941 11.7835H23.292L1.47218 0.594919C0.826577 0.305421 0.130795 0.689165 0.328006 1.59544C0.341351 1.65683 1.63131 7.40286 2.33267 10.5279L13.723 12.5002L2.33267 14.4722C1.63131 17.5971 0.341291 23.3433 0.328006 23.4047Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_6233_4686">
                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
            </clipPath>
        </defs>
    </svg>
)

const RoundedPlus = ({ className }: SvgWrapper) => {
    return <svg width="16" height="16" viewBox="0 0 16 16"
        className={className}
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_8156_3125)">
            <path d="M7.99967 5.3335V10.6668M10.6663 8.00016H5.33301" stroke="#073763" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.6663 8.00016C14.6663 4.31826 11.6815 1.3335 7.99968 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.682 4.31778 14.6668 7.99968 14.6668C11.6815 14.6668 14.6663 11.682 14.6663 8.00016Z" stroke="#073763" />
        </g>
        <defs>
            <clipPath id="clip0_8156_3125">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>

}

const Edit = ({ className }: SvgWrapper) => {
    return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M8.87359 3.48989L9.69125 2.6722C10.1429 2.2206 10.8751 2.2206 11.3267 2.6722C11.7782 3.12379 11.7782 3.85598 11.3267 4.30758L10.509 5.12528M8.87359 3.48989L4.0705 8.293C3.46074 8.90276 3.15585 9.20761 2.94825 9.57914C2.74064 9.95066 2.53176 10.8279 2.33203 11.6668C3.17092 11.4671 4.04819 11.2582 4.41972 11.0506C4.79124 10.843 5.09612 10.5381 5.70589 9.92838L10.509 5.12528M8.87359 3.48989L10.509 5.12528" stroke="#4179C2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.41797 11.6665H9.91797" stroke="#4179C2" stroke-width="1.2" stroke-linecap="round" />
    </svg>

}

const RoundedCheck = () => {
    return <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.999609" y="0.4" width="36" height="36" rx="18" fill="white" />
        <rect x="0.999609" y="0.4" width="36" height="36" rx="18" stroke="#D3E1EE" stroke-width="0.8" />
        <path d="M27 12.3999L16 23.3999L11 18.3999" stroke="#4179C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}

const GradientRoundedCheck = () => {
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12.1693C22 6.64646 17.5228 2.16931 12 2.16931C6.47715 2.16931 2 6.64646 2 12.1693C2 17.6921 6.47715 22.1693 12 22.1693C17.5228 22.1693 22 17.6921 22 12.1693Z" fill="white" fill-opacity="0.1" />
        <path d="M8 12.6695L10.5 15.1695L16 9.16949" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}


export { ChevronBack, Close, DiagonalArrow, Check, Plus, Minus, HowItWorksArrow, Play, SwipeArrow, DesignedArrow, RoundedPlus, Edit, RoundedCheck, GradientRoundedCheck };