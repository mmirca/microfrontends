import { useState, useEffect } from 'react';

export default function Root(props) {
  const [value, setValue] = useState('');
  useEffect(() => {
    document.body.addEventListener('mfs-input-value-change', (ev) => {
      setValue(ev.detail);
      console.log('Hey there')
    });
  }, []);
  return (
    <section>
      <h2>{props.name}</h2>
      <p>Value is: {value}</p>
    </section>
  );
}
