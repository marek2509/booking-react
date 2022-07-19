import React, { PureComponent, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css";

const propTypes = {
  hotels: PropTypes.array.isRequired,
};

const slowFunction = (count) => {
  for (let index = 0; index < 800000000; index++) {}
  return count;
};

function Hotels(props) {
  const count = useMemo(() => {
    return slowFunction(props.hotels.length);
  }, [props.hotels.length]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty ({count}):</h2>

      {props.hotels.map((hotel) => (
        <Hotel onOpen={props.onOpen} key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}

Hotels.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
  console.log(prevProps.hotels === nextProps.hotels);
  return prevProps.hotels === nextProps.hotels;
};

// export default React.memo(Hotels, areEqual); // second parametr is optional
export default Hotels;
