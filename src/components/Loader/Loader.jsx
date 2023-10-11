import React from 'react';
import { Bars } from 'react-loader-spinner';
import style from './Loader.module.css';

export function Loader() {
  return (
    <div className={style.loader}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        backgrounColor="transparent"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
