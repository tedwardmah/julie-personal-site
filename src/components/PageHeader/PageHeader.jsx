function PageHeader(props) {
  const { title } = props;
  return (
    <h1
      css={{
        width: "100%",
        color: "white",
        backgroundColor: "#00b894",
        borderRadius: "5px",
        height: "200px",
        lineHeight: "200px",
      }}
    >
      {title}
    </h1>
  );
}

export default PageHeader;
