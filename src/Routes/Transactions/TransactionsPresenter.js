import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import sum from "lodash.sum";
import { makeDateSexy } from "../../utils";
import {
  Card,
  TxHeader,
  TxRow
} from "Components/Shared";

const TableContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const TransactionsPresenter = ({transactions}) => (
  <Fragment>
    <TableContainer>
      <h2>Latest Transactions</h2>
      <Card>
        <TxHeader />
        {transactions.map((transaction, index) =>
          <TxRow
            timestamp={makeDateSexy(transaction.timestamp)}
            id={transaction.id}
            insOuts={`${transaction.txIns.length}/${transaction.txOuts.length}`}
            amount={sum(transaction.txOuts.map(txOut => txOut.amount))}
            key={index}
          />
        )}
      </Card>
    </TableContainer>
  </Fragment>
);

TransactionsPresenter.propTypes = {
    transactions: PropTypes.array.isRequired
  };
export default TransactionsPresenter;
