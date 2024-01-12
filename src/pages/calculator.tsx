import {promises} from 'fs';
import { GetStaticProps, NextPage } from 'next';
import * as path from 'path';
import * as process from 'process';
import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from '../components/Button';

type Country = {
  jpnName: string;
  engName: string;
  numeric: number;
  alpha3: string;
  alpha2: string;
  location: string;
  subDivision: string;
};

type Props = {
  countries: Array<Country>;
};

const IndexPage: NextPage<Props> = (): ReactElement => {

  const [indicator, setIndicator] = useState<string>('0');
  const [mem1, setMemory1] = useState<number>(0.0);
  const [mem2, setMemory2] = useState<number>(0.0);
  const [symbol, setSymbol] = useState<string>('')
  
  const button_number = (indicator: string, num: string) => {
    if (indicator==="0") {
      setIndicator(num);
    } else {
      setIndicator(indicator+num)
    }
  };

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{indicator}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "7")}>
            <span className="select-none text-xl">7</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "8")}>
            <span className="select-none text-xl">8</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "9")}>
            <span className="select-none text-xl">9</span>
          </Button>

          <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (symbol === ""){
                  setMemory1(Number(indicator));
                  setIndicator("0");
                  setSymbol("/");  
                } 
              }}>
              <span className="select-none text-xl">/</span>
          </Button>

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "4")}
          >
            <span className="select-none text-xl">4</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "5")}>
            <span className="select-none text-xl">5</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "6")}>
            <span className="select-none text-xl">6</span>
          </Button>

            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(indicator);

                setIndicator(indicator + 1);
              }}>
              <span className="select-none text-xl">*</span>
            </Button>

          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "1")}
          >
            <span className="select-none text-xl">1</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "2")}
          >
            <span className="select-none text-xl">2</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "3")}
          >
            <span className="select-none text-xl">3</span>
          </Button>

            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(indicator);

                setIndicator(indicator + 1);
              }}>
              <span className="select-none text-xl">-</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(indicator);
                setIndicator(indicator + 1);
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => button_number(indicator, "0")}>
            <span className="select-none text-xl">0</span>
          </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(indicator);

                setIndicator(indicator + 1);
              }}>
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(indicator);

                setIndicator(indicator);
              }}>
              <span className="select-none text-xl">+</span>
            </Button>

            <Button
              className="py-2 bg-green-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setIndicator("0");
              }}>
              <span className="select-none text-xl">C</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const buffer = await promises.readFile(path.join(process.cwd(), 'json', 'countries.json'));
  const str  = buffer.toString();

  return {
    props: {
      countries: JSON.parse(str)
    }
  };
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
