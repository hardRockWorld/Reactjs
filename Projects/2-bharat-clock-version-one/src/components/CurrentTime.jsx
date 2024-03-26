let CurrentTime = () => {
  let time = new Date();

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString().toUpperCase()}
    </p>
  );
};

export default CurrentTime;
