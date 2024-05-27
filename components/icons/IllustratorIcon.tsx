import { ComponentPropsWithoutRef } from 'react';

export const IllustratorIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 250"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <rect
          fill="#330000"
          x="0"
          y="0"
          width="256"
          height="249.6"
          rx="42.5"
        ></rect>
        <path
          d="M124.053643,149.790101 L84.3833387,149.790101 L76.3119787,174.863285 C76.0850527,175.806391 75.2199581,176.455169 74.25104,176.408885 L54.158336,176.408885 C53.0125013,176.408885 52.6117902,175.779196 52.9562027,174.519819 L87.3026027,75.6013013 C87.6463538,74.5710933 87.9899307,73.397568 88.3333333,72.0807253 C88.7825705,69.7894731 89.0125866,67.4606458 89.0202667,65.1257813 C88.9730311,64.7946939 89.0843859,64.4606834 89.3208497,64.2241777 C89.5573135,63.9876719 89.8913042,63.8762579 90.2224,63.9234347 L117.527605,63.9234347 C118.327605,63.9234347 118.785589,64.2097209 118.901557,64.7822933 L157.885419,174.691403 C158.228651,175.837237 157.885074,176.409721 156.854688,176.408853 L134.529163,176.408853 C133.735987,176.496743 133.000857,175.98213 132.811979,175.206773 L124.053643,149.790101 Z M90.5656213,128.151819 L117.699509,128.151819 L117.313449,126.874894 L117.313449,126.874894 L116.691808,124.852684 L116.691808,124.852684 L116.249015,123.433329 L116.249015,123.433329 L115.542276,121.197473 L115.542276,121.197473 L114.038912,116.490007 L114.038912,116.490007 L112.716846,112.316702 L112.716846,112.316702 L109.284405,101.447136 L109.284405,101.447136 C108.40137,98.6504823 107.581344,95.9378175 106.824329,93.3091416 L106.196,91.0998659 L106.196,91.0998659 L105.461782,88.4861171 L105.461782,88.4861171 L104.341416,84.4367406 C104.271031,84.1795685 104.201506,83.9249536 104.132843,83.672896 L103.960971,83.672896 C103.101602,87.7956218 102.055077,91.8768271 100.824716,95.903861 L98.2767177,104.098583 L98.2767177,104.098583 L96.8749105,108.626725 L96.8749105,108.626725 L95.4599253,113.210901 C95.2043979,114.039031 94.9495686,114.857633 94.6954374,115.666707 L93.9351378,118.065348 L93.9351378,118.065348 L93.1790267,120.406824 L93.1790267,120.406824 L92.4271039,122.691136 L92.4271039,122.691136 L91.6793696,124.918282 C91.4308229,125.651137 91.1829742,126.374465 90.9358237,127.088264 L90.5656213,128.151819 Z M181.067189,82.1273387 C177.524532,82.269589 174.089125,80.8954264 171.621856,78.3492053 C169.164827,75.6962742 167.866756,72.1733035 168.015083,68.5604053 C167.888876,64.9783485 169.294144,61.5120581 171.879147,59.029152 C174.347654,56.6598042 177.63213,55.3387485 181.044348,55.3325872 L181.4104,55.3369707 C185.53227,55.3369707 188.766645,56.5676978 191.113525,59.029152 C193.506121,61.6126882 194.772678,65.0418978 194.633835,68.5604053 C194.778932,72.1886113 193.446716,75.7206049 190.941643,78.3492053 C188.409155,80.8456206 184.979355,82.2088348 181.434298,82.1396207 L181.067189,82.1273387 Z M169.217184,174.691403 L169.217184,92.6028693 C169.217184,91.5726613 169.67344,91.0572693 170.591147,91.0572693 L191.714581,91.0572693 C192.629689,91.0572693 193.087676,91.5724693 193.088544,92.6028693 L193.088544,174.691403 C193.088544,175.837237 192.630556,176.409721 191.714581,176.408855 L170.763019,176.408855 C169.787032,176.408855 169.273199,175.895045 169.221518,174.867429 L169.217184,174.691403 Z"
          fill="#ff9a00"
        ></path>
      </g>
    </svg>
  );
};
