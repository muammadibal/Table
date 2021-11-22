import { useEffect, useState } from 'react';
import './App.css';
import data from './data/data.json';

function App() {
  return (
    <div className='App'>
      <div className='container my-5'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              {data.location.map((item) => {
                return <th>{item.name}</th>;
              })}
              <th>Category</th>
              <th>Product</th>
              <th>Total Stock</th>
              <th>Percent %</th>
              <th>Total Order</th>
            </tr>
          </thead>
          <tbody>
            {data.proformaItem.map((item) => {
              const product = JSON.parse(item.product_stock);
              const items = JSON.parse(item.items);
              const number = [];
              product.map((res, i) => {
                const idx = parseInt(Object.keys(res));
                number.push(product[i][idx]);
              });

              let sum = number.reduce((a, b) => a + b)

              return (
                <>
                  <tr>
                    {product.map((res) => {
                      const idx = Object.keys(res);
                      return <td>{res[idx]}</td>;
                    })}
                    <td>{item.categoryDescription}</td>
                    <td>{item.productDescription}</td>
                    <td>{sum}</td>
                    {items.map((val, i) => {
                      return <td>{(val.qty / sum * 100).toFixed(2)} %</td>;
                    })}
                    {items.map((val, i) => {
                      return <td>{val.qty}</td>;
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
