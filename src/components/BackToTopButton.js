
function BackToTopButton() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="btn" onClick={scrollUp}>
      <i className="fa-solid fa-angles-up icon"></i>
    </div>
  );
}

export default BackToTopButton;
