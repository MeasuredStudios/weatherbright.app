import * as React from 'react';
import 'twin.macro';
import Display from './Display';

const WeatherDisplay = (): JSX.Element => {
  return (
    <Display>
      <div tw="w-full flex flex-row justify-evenly items-center border rounded-lg border-blue-200">
        <div tw="p-8">
          <svg
            tw="w-16 mb-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 129 129"
            enableBackground="new 0 0 129 129"
          >
            <g>
              <path
                d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
              <path
                d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#475569"
              />
            </g>
          </svg>
          <strong tw="leading-none text-6xl block font-bold">29ºC</strong>
          <b tw="text-2xl block font-bold">Sunny</b>
        </div>
        <div tw="p-8">
          <div tw="mb-8">
            <h2 tw="text-3xl font-bold tracking-tighter md:text-4xl">
              Tuesday
            </h2>
            <h3 tw="leading-none pb-2 pl-1">15 Jan 19</h3>
            <p tw="flex content-center opacity-75">
              <svg
                tw=" w-4 inline mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 425.963 425.963"
                style={{ enableBackground: 'new 0 0 425.963 425.963' }}
              >
                <g>
                  <path
                    d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#475569"
                  ></path>
                </g>
              </svg>
              París, FR
            </p>
          </div>
          <div tw="flex justify-between w-64 mb-4">
            <div tw="w-auto font-bold text-sm">Pressure</div>
            <div tw="w-auto text-right">10 %</div>
          </div>
          <div tw="flex justify-between w-64 mb-4">
            <div tw="w-auto font-bold text-sm">Humidity</div>
            <div tw="w-auto text-right">29 %</div>
          </div>
          <div tw="flex justify-between w-64 mb-8">
            <div tw="w-auto font-bold text-sm">Wind</div>
            <div tw="w-auto text-right">12 Mph</div>
          </div>
        </div>
      </div>
    </Display>
  );
};

export default WeatherDisplay;
