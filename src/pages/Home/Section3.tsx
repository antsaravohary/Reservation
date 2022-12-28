import { BiHome } from "react-icons/all";

function Footer() {
  return (
    <div className="footer row">
      <div className="col-xs-6 col-sm-3">
        <h1>App Name</h1>
        <p>
          Aliqua ut pariatur proident ipsum aute aliquip id Lorem tempor culpa.
          Qui veniam quis esse labore commodo eu consequat aute laborum occaecat
          proident enim. Excepteur ut sit occaecat reprehenderit est tempor
          consequat Lorem.
        </p>
      </div>
      <div className="col-xs-6 col-sm-3">
        <h1>Quick Links</h1>
        <div
          className="list-group"
          style={{
            marginTop: 20,
          }}
        >
          <a href="#" className="list-group-item list-group-item-action">
            Link 1
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Link 2
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Link 3
          </a>
        </div>
      </div>
      <div className="col-xs-6 col-sm-3">
        <h1>New Products</h1>
        <div
          className="list-group"
          style={{
            marginTop: 20,
          }}
        >
          <a href="#" className="list-group-item list-group-item-action">
            Product 1
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Product 2
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Product 3
          </a>
        </div>
      </div>
      <div className="col-xs-6 col-sm-3">
        <h1>Supports</h1>
        <div
          className="list-group"
          style={{
            marginTop: 20,
          }}
        >
          <a href="#" className="list-group-item list-group-item-action">
            Frequently Asked Questions
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Terms & Conditions
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Private Policy
          </a>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="item col-xs-12 col-sm-4">
      <BiHome fontSize={80} />
      <h3>Some title</h3>
      <p>
        Voluptate voluptate Lorem culpa veniam duis magna officia sint aute anim
        reprehenderit elit.
      </p>
    </div>
  );
}

export default function Section3() {
  return (
    <div className="home-section home-section-3">
      <div className="content-a row">
        <Item />
        <Item />
        <Item />
      </div>
      <Footer />
    </div>
  );
}
