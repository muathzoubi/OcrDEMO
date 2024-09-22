const Loader = (props: { show: boolean; setShow: any }) => {
  return (
    <span style={{ display: props.show ? '' : 'none' }}>
      <img
        className="loader"
        width="40"
        height="40"
        src="https://img.icons8.com/external-anggara-flat-anggara-putra/40/external-processing-logistic-anggara-flat-anggara-putra.png"
        alt="external-processing-logistic-anggara-flat-anggara-putra"
      />
    </span>
  );
};
export default Loader;
