import React from 'react';

export default () => (
  <div className="app-container">
    <h1>Exchange</h1>
    <form name="exchange" action="/">
    <section>
      GBP <input type="text" name="from"/>
    </section>
    <section> £1 = €1.2039</section>
    <section>
      GBP <input type="text" name="to"/>
    </section>
    <button type="submit">Exchange</button>
    </form>
  </div>
);
