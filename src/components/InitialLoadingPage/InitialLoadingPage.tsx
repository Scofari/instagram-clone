import { FC } from "react";
import styles from "./InitialLoadingPage.module.scss";

const InitialLoadingPage: FC = () => {
    return (
        <div className={styles.loadingPage}>
            <svg
                enableBackground="new 0 0 128 128"
                id="Social_Icons"
                version="1.1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="_x37__stroke">
                    <g id="Instagram_1_">
                        <rect
                            clipRule="evenodd"
                            fill="none"
                            fillRule="evenodd"
                            height="128"
                            width="128"
                        />
                        <radialGradient
                            cx="19.1111"
                            cy="128.4444"
                            gradientUnits="userSpaceOnUse"
                            id="Instagram_2_"
                            r="163.5519"
                        >
                            <stop offset="0" style={{ stopColor: "#FFB140" }} />
                            <stop
                                offset="0.2559"
                                style={{ stopColor: "#FF5445" }}
                            />
                            <stop
                                offset="0.599"
                                style={{ stopColor: "#FC2B82" }}
                            />
                            <stop offset="1" style={{ stopColor: "#8E40B7" }} />
                        </radialGradient>
                        <path
                            clipRule="evenodd"
                            d="M105.843,29.837    c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68c0-4.242,3.439-7.68,7.68-7.68    C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z M64,31.135    c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865    C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204    c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884    c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884    c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204    c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204    c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884    c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884    c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204    C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36    c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535    C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535    c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975    C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975    c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535    C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535    c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975    C83.561,0.074,81.381,0,64,0z"
                            fill="url(#Instagram_2_)"
                            fillRule="evenodd"
                            id="Instagram"
                        />
                    </g>
                </g>
            </svg>

            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABa1BMVEX6+vr6///6/f7x5u36+/zuOkz6/f/vQk26RYnxUE/wxs7vP037/fzaPGPeZIL51MT3glTxX1DNQHP69/f0oaP3h1XvSk7aK1jwWU/4g0rwQ0WzNYW3M4D4h0r56+v1eFP7p1jIQnnkOlj2zdH0aVHzZFH6nVfkJEjxWFT1clLtKkD43dzxWEP67+v45OT2fVL4klW/MXfFQnzpOVL8r1ntIzvVPmm+QoT9uFr+w2DyY1z2kX3yTD3xQTzwU2Dzk5z2wbvzg3jzk5D3kmn1cEPxgIH1rqr64M75jkT3eTf3ekP1bDXwNi/0mp3nm6vqr737sWnyc2b4w7T717L3qZb3nX7wa3Xt1N7pxdLQbpbIYpXhtcvPh6/meI3ddZLlq73PXornWnDOL2b90Yz4y8Hwc4DbH0/TJlreiqP+vU35oWT6w6H3tqnsgZD81p71p6H+x270ZEH1fmH4q4r8qUX61rvYmLe1HnfxdHXqIpdVAAAIMUlEQVR4nO2a/V8aVxaH54yDiAwxeHUyoQpVIOjw4hqW2BBEkiCm2UbWaCRqjK2tMW11rdlumz9/z50XZjDadneTzaSf7/Mbw4AzD+eec+4ZFQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8L+jfewL+KiopJTTgkgPHCNSBB9SP9pFfVRUGruXayynmisV8o6R3rqfbDTqD4r0Wx/9s6KWH7bn82bMiFi1FeHEBWWTpWTSNGOp5VVxMVQ0m3e/SNOZD3+9/wfUtenrGcdJJGIZdqhQp5HMSydmLJYyKoOhoomy5J1FRWlJ+aq/oxPz/i//QzC89mjScRJlJ/F4ihcLtRrJZL5Uqs8tx2KGEU0P3L869uXjx4//NnZBilr5anl5+asnV9y3XlxfX+9+ElK08q2/sJNcyZyrWewkGk1VKLtsJpOlFmfYytuUYaSaAytCHbs5ef36wht1cPnQ2xiTmrjKyeir4+Nrn4ITbfjv0kn7XppITFjsxDDmiinTLG2U5fWr9ISlWCvBe3GdtJ8O3CCL/B0nNxKJT8LJ8Obn7OTxll2FKd202ImRiplmXXGXBq2mjGitGFgorpOFBRH8JqrHOPkY/6ETLXxJWVN+Zic3n5GzDFTRjBsG/9pmqZ9CdGFEo5HtwM04TjhQtgIHOQWZF5zIpOrf8SVOdF30ej1hawlPyRre/Kt0IrzMoItoVDpptPyLp04qGq8V/Svux0m77B8Udo0KrB3ORaPd0YpbalhPVjqxi49zTNOf7yxKdvdYzgtm6APf7R9C075gJ9NP/YVBWUs6qQd/T4pG49apf8Rx8nAhk3nmt3hnJdOcm+s74eRUtaxCoTDbVaW4/f39a4lE4s5LmwM+Rx/6enHmNrO0NLXU06ZGPvtsKAyRoq19L+MkeIi2L8aJQhNWPBLxXztOxtoLmbaXZvQyr5xGq+45oVaEi1hVUvhGLsPEDY4SdsIcHh6+JlYyPmMrYSds5fnUyEg4nAx/K+Pkx0D+1CspO5+YInisFo/Usv2zHCf0LJPJvPEWygMOkzp5cUITtYhsAAuFanW2Oit0JeFwx4ad6Olx28ni7d2lRZYyMhISJ5pyl508Kgf6DNqW+YRL8YNgoDTjEcvvxaSTyetUbmcy7e9sU2qxkTQbRc8JdaSS2lG3O9EszM5Wj0i58eqVHSjHzOExO9lhJTOLvwxxah3aC5OTte/ZyQ8D1cNySjHfYSDJrPBC2L7gRKUtlpJxTtjgfcB9cp3oFSsej1SLdjZdZymFrJpOC7vuCLv/F/rzQ+lkyC054sVUWJwMb0onwaUjuGdLrbKTZHIjUHla7CTSv2DXiSJYyfkJn6Z+x/vFUlp3ndAqK4mk3YJzWp2d3ZfrKViL9ZfjTK//lfqL0Dj5Bzu5tTbcP0CrsmfTnda+4zcaFV4LtbR3xe7aUehpOzN/zolHzeXzpTM+4DhJW1ynvE/raQ6UV+JCfyIOWckvgeZFhCXHDn/L+eSWn04oW+PtTod/aFNuAfsSFMFx4reynhOF3szPz28RnZTy+aT8vOOkJZ0IUh3oiJ2M6gNO5NIZPwwqCI+Tn+5+8fmtQIWJ8xawyXUyLbfFyft+oPCW2Rr1XvadqMX2/Px5RbCSkizerpMn3ONFs3322QnvhwecHLCTmaCB8Di5K530x650asWjtSzZHRg7aWQ9C9RkJy3fybTjRKEtDpR7Z7lc3s4+rpNVdhKxajXLbtoKnE9mVwadkHSyE2In3sSMV04kHnfKizDZiWl612g76b7rRBHsJMeU7IUVcBKP2MimjZXMnl4SJ2F24q0dIUdKtYqdNahVynOaPfNasquc0NNzKSV/z3nlr5243cPaPi5xQl2ZY4P7h/A4+Um2sW6O5ZrDN+4NSmhDjh4b7oBa5thgPuk70WSa5TBxNoNU7+fYqKq7aO6UdiBOejLH9oIKQuPEbu2dGaLTe8a9oFErDTmOrQt5mWpR1uKiX4v7Tvit8/OcV7ZdJ0WuXm68BRioxbqMk8Di0YdC42RTOvlBDk8ou8y1pdbPquyoJMf2b1XVTr4cJ/36FHSi0MnJyZn3GccJyYHLUWCMYusZcEKvZc924DnQRXh6+7K9Lf6nUEWnYUQjwYGApm7IiUiqXiHqyH1xsLcPOFFUfxrvOenIBmXCmSfplP7GzkR6T254ZNzppGlDshiPHxCvLV5Zz+0NTyiccEKxR0oLb3Ilk500g+/p6ZIzOKs35fbF6gw6mbzk+SB5swKDk2ztqCL3O+mJQrVgVyUhnVyraKL3elSX1Zg3PF/v9YZ6e7tTIXKircnR4+TCfC5pGnFr8JEFFRtycmbwSpCV1X/DcXLJ2NVzwhlFWqxVt4+aVkHWHXvau+9ujA8P1/kce2M8Yw/alpaWdkPjRFE3f3adxAzr4lNQZxLvOAlkmt93Iqd1lt+gVAujUrZeueFNlV7KOZstxRkqLe6GphYz6r8eTUsn5nIz/c5dUnEuZUgnViSg5A84USh9JJ8WsRJuZE+9LXIvcZxwBm32OQfupG1xkXeDv05N/RoSJ4pa/vFh+zx3v0WXXBCJzlsjldruKIPPd6anb968Ip8sO/NYnSoT21Wr0DztpvvfTKJ77U7izsuus7sksbdze/H2zp582ZMT/Pd9c/8tmsq18sonueTP2X3Uq578Bs91J/QX/3+Dgk84vL5OCdOzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA759/A6b/M9dTnfsHAAAAAElFTkSuQmCC"
                alt=""
            />
        </div>
    );
};

export default InitialLoadingPage;
