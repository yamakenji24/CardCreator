import html2canvas from 'html2canvas';

export const SaveButton = () => {
  const getElement = () => {
    html2canvas(document.querySelector("#cardScreen"), {
      width: 640,
      height: 320
    })
    .then(canvas => {
      let a = document.createElement('a')
      a.href = canvas.toDataURL('image/jpeg', 1.0);
      a.download = 'mycard.jpg';
      a.click();
    })
  }
  return (
    <div>
      <button onClick={getElement}>save</button>
    </div>
  )
}