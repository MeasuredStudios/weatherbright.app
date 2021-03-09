import 'twin.macro';
import Head from 'next/head';
import Layout from '../components/Layout';

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <div tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 tw="font-bold text-5xl tracking-tight mb-4">Weather Bright</h1>
        <div tw="h-auto w-full">
          <div tw="relative">
            <input
              type="search"
              name="query"
              placeholder="Search City"
              required="required"
              // value=""{props.value}""
              // handleChange={props.onChangeHandler}
              // error={props.error}
              tw="p-4 text-gray-700 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-0"
            />{' '}
            <button
              type="submit"
              position="onForm"
              // clicked={props.onClickHandler}
              tw="bg-theme text-white rounded text-xl absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold hover:bg-blue-300 focus:outline-none focus:ring"
            >
              Search
            </button>
          </div>
        </div>
        <div tw="w-full mt-16 justify-center container mx-auto">
          <div tw="flex flex-wrap w-full lg:w-auto">
            <div
              tw="w-full lg:w-1/2 flex rounded-lg bg-auto"
              // style={{backgroundImage: url('https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')}}
            >
              <div tw="rounded-lg py-6 pl-8 pr-32 w-full bg-theme opacity-90 text-white">
                <div tw="mb-20">
                  <h2 tw="font-bold text-3xl leading-none pb-1">Tuesday</h2>
                  <h3 tw="leading-none pb-2 pl-1">15 Jan 19</h3>
                  <p tw="flex content-center opacity-75">
                    <svg
                      tw=" w-4 inline mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 425.963 425.963"
                      style={{ enableBackground: 'new 0 0 425.963 425.963' }}
                      xmlSpace="preserve"
                      className
                    >
                      <g>
                        <path
                          d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
                          data-original="#000000"
                          className="active-path"
                          data-old_color="#000000"
                          fill="#FFFFFF"
                        ></path>
                      </g>
                    </svg>
                    París, FR
                  </p>
                </div>
                <div>
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
                        fill="#FFFFFF"
                      />
                      <path
                        d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                      <path
                        d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#000000"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                  <strong tw="leading-none text-6xl block font-bold">
                    29ºC
                  </strong>
                  <b tw="text-2xl block font-bold">Sunny</b>
                </div>
              </div>
            </div>

            <div tw="w-full lg:w-1/2 flex ml-0">
              <div tw="lg:my-3 bg-theme text-white p-8 lg:rounded-r-lg w-full">
                <div tw="flex justify-between w-64 mb-4 w-full">
                  <div tw="w-auto font-bold uppercase text-sm">
                    Precipitation
                  </div>
                  <div tw="w-auto text-right">10 %</div>
                </div>
                <div tw="flex justify-between w-64 mb-4 w-full">
                  <div tw="w-auto font-bold uppercase text-sm">Humidity</div>
                  <div tw="w-auto text-right">29 %</div>
                </div>
                <div tw="flex justify-between w-64 mb-8 w-full">
                  <div tw="w-auto font-bold uppercase text-sm">Wind</div>
                  <div tw="w-auto text-right">12 Mph</div>
                </div>
                <div tw="flex flex-row">
                  <div tw="flex flex-col w-1/2 bg-gray-100 text-theme rounded-lg pb-4">
                    <div tw="text-center pt-2 mb-2">
                      <svg
                        tw="w-10 mx-auto"
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
                    </div>
                    <div tw="text-center">
                      <b tw="font-normal">Tue</b>
                      <br />
                      <strong tw="text-xl">29ºC</strong>
                    </div>
                  </div>

                  <div tw="flex flex-col w-1/2 bg-theme rounded-lg">
                    <div tw="text-center pt-2 mb-2">
                      <svg
                        tw="w-10 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 33.062 33.062"
                        style={{ enableBackground: 'new 0 0 33.062 33.062' }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M25.615,26.608H6.442C2.89,26.608,0,23.719,0,20.168c0-3.502,2.81-6.361,6.294-6.439c1.241-4.304,5.161-7.275,9.67-7.275   c3.736,0,7.101,2.023,8.866,5.306c0.26-0.026,0.522-0.04,0.784-0.04c4.106,0,7.446,3.339,7.446,7.443   C33.062,23.268,29.721,26.608,25.615,26.608z M6.527,14.732C3.437,14.732,1,17.17,1,20.168c0,2.999,2.441,5.439,5.442,5.439h19.173   c3.555,0,6.446-2.892,6.446-6.445c0-3.553-2.892-6.443-6.446-6.443c-0.314,0-0.63,0.022-0.939,0.066   c-0.229,0.063-0.469-0.046-0.574-0.259c-1.545-3.13-4.663-5.073-8.137-5.073c-4.183,0-7.803,2.839-8.804,6.904   c-0.056,0.228-0.278,0.372-0.498,0.381l-0.127-0.007C6.533,14.732,6.53,14.732,6.527,14.732z"
                          data-original="#000000"
                          className="active-path"
                          data-old_color="#000000"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>
                    <div tw="text-center">
                      <b tw="font-normal">Wed</b>
                      <br />
                      <strong tw="text-xl">21ºC</strong>
                    </div>
                  </div>
                  <div tw="flex flex-col w-1/2 bg-theme rounded-lg">
                    <div tw="text-center pt-2 mb-2">
                      <svg
                        tw="w-10 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 33.062 33.062"
                        style={{ enableBackground: 'new 0 0 33.062 33.062' }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M25.615,26.608H6.442C2.89,26.608,0,23.719,0,20.168c0-3.502,2.81-6.361,6.294-6.439c1.241-4.304,5.161-7.275,9.67-7.275   c3.736,0,7.101,2.023,8.866,5.306c0.26-0.026,0.522-0.04,0.784-0.04c4.106,0,7.446,3.339,7.446,7.443   C33.062,23.268,29.721,26.608,25.615,26.608z M6.527,14.732C3.437,14.732,1,17.17,1,20.168c0,2.999,2.441,5.439,5.442,5.439h19.173   c3.555,0,6.446-2.892,6.446-6.445c0-3.553-2.892-6.443-6.446-6.443c-0.314,0-0.63,0.022-0.939,0.066   c-0.229,0.063-0.469-0.046-0.574-0.259c-1.545-3.13-4.663-5.073-8.137-5.073c-4.183,0-7.803,2.839-8.804,6.904   c-0.056,0.228-0.278,0.372-0.498,0.381l-0.127-0.007C6.533,14.732,6.53,14.732,6.527,14.732z"
                          data-original="#000000"
                          className="active-path"
                          data-old_color="#000000"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>
                    <div tw="text-center">
                      <b tw="font-normal">Thu</b>
                      <br />
                      <strong tw="text-xl">18ºC</strong>
                    </div>
                  </div>
                  <div tw="flex flex-col w-1/2 bg-theme rounded-lg">
                    <div tw="text-center pt-2 mb-2">
                      <svg
                        tw="w-10 mx-auto"
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
                            fill="#FFFFFF"
                          />
                          <path
                            d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                          <path
                            d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                          <path
                            d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                          <path
                            d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                          <path
                            d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                          <path
                            d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                          <path
                            d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                          <path
                            d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#FFFFFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div tw="text-center">
                      <b tw="font-normal">Fri</b>
                      <br />
                      <strong tw="text-xl">25ºC</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
