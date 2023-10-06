import React from 'react';
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { useState, useEffect } from "react";
import { Box, Text, Newline } from 'ink';
import axios from "axios";
export default function App({
  name = 'Stranger'
}) {
  const [data, setData] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Clitecoin%2Cmatic-network%2Cethereum%2Ctether%2Cbinancecoin%2Csolana%2Caave%2Ccardano%2Ctron&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  useEffect(() => {
    axios.get(url).then(response => setData(response.data)).catch(e => console.log(e));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Gradient, {
    name: "summer"
  }, /*#__PURE__*/React.createElement(BigText, {
    text: "crypto cli",
    align: "center",
    font: "chrome"
  })), /*#__PURE__*/React.createElement(Box, {
    borderStyle: "single",
    padding: 2,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, null, "COIN")), /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, null, "PRICE (EUR)")), /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, null, "24 HOUR CHANGE")), /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, null, "ALL TIME HIGH"))), /*#__PURE__*/React.createElement(Newline, null), data.map(({
    id,
    name,
    current_price,
    price_change_percentage_24h,
    ath
  }) => /*#__PURE__*/React.createElement(Box, {
    key: id
  }, /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, null, name)), /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "cyan"
  }, current_price.toLocaleString() + " €")), /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, {
    backgroundColor: Math.sign(price_change_percentage_24h) < 0 ? 'red' : 'green'
  }, price_change_percentage_24h.toFixed(2) + '%')), /*#__PURE__*/React.createElement(Box, {
    width: "25%"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "green"
  }, ath.toLocaleString() + " €"))))));
}