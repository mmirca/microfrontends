import { useState } from 'react';

export default function Root(props) {
  const [value, setValue] = useState('');
  const handleKeyUp = (ev) => {
    setValue(ev.target.value);
    console.log('Handle', ev.target.value);
    const event = new CustomEvent('mfs-input-value-change', {
      detail: ev.target.value
    });
    document.body.dispatchEvent(event);
  }
  return (
    <section>
      <h2>{props.name}</h2>
      <input onChange={handleKeyUp} value={value}></input>
    </section>
  );
}
